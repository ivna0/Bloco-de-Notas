import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Form = ({ addInformações} ) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      if(!value || !category) return;
      addInformações(value, category)
      setValue("")
      setCategory("")
      console.log(value, category);
    }

  return (
    <div className="form">
        <h2> Criar tarefa:</h2>
        <form onSubmit={handleSubmit}>
            <input type='text'
            placeholder='Digite o título' 
            value={value}
            onChange={(e) => setValue(e.target.value)}>
            </input>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Selecione uma categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudos">Estudos</option>
        </select>
        <button type="submit">Criar tarefa</button>
        </form>
    </div>
  )
}

export default Form