import React from "react";
import CustomGrid from "./componentes/CustomGrid";

function handleEditClick(obj) {
  console.log('Editou', obj)
}

function handleRemoveClick(obj) {
  console.log('Excluiu', obj)
}


const columns = [
  {
    key: 'id',
    title: 'Código'
  },
  {
    key: 'nome',
    title: 'Nome Completo'
  },
  {
    key: 'idade',
    title: 'Idade'
  },
  {
    key: 'sexo',
    title: 'Sexo'
  }
]



const rows = [
  {
    id: '1',
    nome: 'Flávio',
    idade: 35,
    sexo: 'M'
  },
  {
    id: '2',
    nome: 'Maria',
    idade: 19,
    sexo: 'F'
  },
  {
    id: '3',
    nome: 'João',
    idade: 22,
    sexo: 'M'
  },
  {
    id: '4',
    nome: 'Pedro',
    idade: 49,
    sexo: 'M'
  },
  {
    id: '5',
    nome: 'Joice',
    idade: 55,
    sexo: 'F'
  },
  {
    id: '6',
    nome: 'Isis',
    idade: 13,
    sexo: 'F'
  }
]


function App() {

  return (
    <CustomGrid
      columns={columns}
      rows={rows}
      select={true}
      buttons={['editar', 'excluir']}
      events={[handleEditClick, handleRemoveClick]}
    />
  );
}

export default App;
