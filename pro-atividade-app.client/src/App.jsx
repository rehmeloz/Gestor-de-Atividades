import { useState } from 'react'
import './App.css'
import AtividadeForm from './components/AtividadeForm';
import Atividade from './components/Atividade';
import AtividadeLista from './components/AtividadeLista';

 let inicialState = [
    {
        id: 1,
        prioridade: '1',
        titulo: "Título",
        descricao: "Primeira Atividade",
    },
    {
        id: 2,
        prioridade: '1',
        titulo: "Título",
        descricao: "Segunda Atividade",
    },
];

function App() {
    const [atividades, setAtividades] = useState(inicialState);
    const [atividade, setAtividade] = useState({});

    function addAtividades(e)
    {
        e.preventDefault();

        const atividade = {
            id: Math.max.apply(Math, props.atividades.map((item) => item.id)) + 1,
            prioridade: document.getElementById('prioridade').value,
            titulo: document.getElementById('titulo').value,
            descricao: document.getElementById('descricao').value,  
        };

        setAtividades([...atividades, {...atividade}])  
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
