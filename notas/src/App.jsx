/* eslint-disable no-unused-vars */
import { useState } from 'react'
import "./App.css"
import Informações from './components/Informações'
import Form from './components/Form'
import Search from './components/Search'
import Filter from './components/Filter'

function App() {
  const [notas, setNotas] = useState([

    {
      id:1,
      text: "criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
  
    {
      id:2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
  
    {
      id:3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },

  ])  

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All")
  const [sort, setSort] = useState("Asc")


  const addInformações = (text, category) => {
    const newNotas = [...notas, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    },
  ]

    setNotas(newNotas)
  }

  const removeInformações = (id) => {
    const newNotas = [...notas]
    const filteredNotas = newNotas.filter((informações) => 
    informações.id !== id ? informações : null
    )
    setNotas(filteredNotas)
  }
  
  const concluirInformações = (id) => {
    const newNotas = [...notas]
    newNotas.map((informações) => informações.id === id ? informações.isCompleted = !informações.isCompleted : informações
    ) 
    setNotas(newNotas)
  }

  return (
    <div className='app'> 
    <h1>Lista de Tarefas</h1>
    <Search search={search} setSearch={setSearch}/>
    <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
    <div className='notas-list'>
      {notas
        .filter((informações) => 
         filter === "All" 
          ? true 
          : filter === "Completed" 
          ? informações.isCompleted 
          : !informações.isCompleted 
          )
        .filter((informações) => 
           informações.text.toLowerCase().includes(search.toLowerCase())
          )
        .sort((a, b) =>
         sort === "Asc" 
          ? a.text.localeCompare(b.text) 
          : b.text.localeCompare(a.text) 
          )
        .map((informações) => (
    <Informações 
          key={informações.id} 
          informações={informações} 
          removeInformações={removeInformações} 
          concluirInformações={concluirInformações}
          />
        ))}
    </div>
    <Form addInformações={addInformações} />
    </div>
  )
}


export default App
