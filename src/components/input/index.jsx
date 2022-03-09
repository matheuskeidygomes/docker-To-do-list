import React from "react";

export default function Input(props) {

  return <>

    <div className="flex pb-5 pl-3 pr-3 bg-black">

        <input className="w-full p-3 rounded-lg focus:outline-0 text-black " type="text" value={props.value} placeholder="Insira uma nova tarefa..." onChange={props.onChange} />

        <button className="rounded-lg ml-2 bg-gradient-to-r from-green-700 to-lime-400 font-bold text-white p-2" onClick={props.onClick}>
            Salvar
        </button>

    </div>
  
  </>
  
}

