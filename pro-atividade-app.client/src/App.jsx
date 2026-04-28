import { useState, useEffect } from 'react'
import './App.css'
import AtividadeForm from './components/AtividadeForm';
import Atividade from './components/Atividade';
import AtividadeLista from './components/AtividadeLista';
import api from './api/atividade'

function App() {
    const [atividades, setAtividades] = useState([]);
    const [atividade, setAtividade] = useState({ id: 0 });

    const pegaTodasAtividades = async () => {
        const response = await api.get('atividade');
        return response.data;
    }

    useEffect(() => {
        const getAtividades = async () => {
            const todasAtividades = await pegaTodasAtividades();
            if (todasAtividades) setAtividades(todasAtividades);
        }
        getAtividades();
    }, [])

    const addAtividades = async (ativ) => 
    { 
        const response = await api.post('atividade', ativ);
        setAtividades([...atividades, response.data]);
    }

    function cancelarAtividade() {
        setAtividade({ id: 0 });
    }

    const atualizaAtividade = async (ativ) =>
    {
        const response = await api.put(`atividade/${ativ.id}`, ativ);
        const { id } = response.data;
        setAtividades(atividades.map(item => item.id === id ? response.data : item));
        setAtividade({ id: 0 });
    }

    const deletarAtividade = async (id) =>
    {
        if (await api.delete(`atividade/${id}`))
        {
            const atividadesFiltradas = atividades.filter(atividade => atividade.id != id);
            setAtividades([...atividadesFiltradas]);
        }
    }

    function pegarAtividade(id) {
        const atividade = atividades.filter(atividade => atividade.id == id);
        setAtividade(atividade[0])
    }

    

    return (
        <>
            <AtividadeForm
                addAtividades={addAtividades}
                cancelarAtividade={cancelarAtividade}
                atualizaAtividade={atualizaAtividade}
                ativSelecionada={atividade}
                atividades={atividades}
            />

            <AtividadeLista
                atividades={atividades}
                deletarAtividade={deletarAtividade}
                pegarAtividade={pegarAtividade}
            />
        </>
    );
}

export default App
