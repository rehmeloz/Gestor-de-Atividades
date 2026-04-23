import { useState, useEffect } from 'react'
import './App.css'
import AtividadeForm from './components/AtividadeForm';
import Atividade from './components/Atividade';
import AtividadeLista from './components/AtividadeLista';
import api from './api/atividade'

function App() {
    const [index, setIndex] = useState(0);
    const [atividades, setAtividades] = useState([]);
    const [atividade, setAtividade] = useState({ id: 0 });

    const pegaTodasAtividades = () => {
        const response = api.get('atividade');
        return response.data;
    }

    useEffect(() => {
        const getAtividades = () => {
            const todasAtividades = pegaTodasAtividades();
            if (todasAtividades) setAtividades(pegaTodasAtividades);
        }
        getAtividades();
    }, [atividades])

    function addAtividades(ativ)
    {
        setAtividades([...atividades, { ...ativ, id: index }]);
    }

    function cancelarAtividade() {
        setAtividade({ id: 0 });
    }

    function atualizaAtividade(ativ)
    {
        setAtividades(atividades.map(item => item.id === ativ.id ? ativ : item));
        setAtividade({ id: 0 });
    }

    function deletarAtividade(id)
    {
        const atividadesFiltradas = atividades.filter(atividade => atividade.id != id);
        setAtividades([...atividadesFiltradas]);
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
