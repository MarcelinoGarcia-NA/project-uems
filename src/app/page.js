"use client";

import { useState } from "react";

export default function Page() {
  const [nome, setNome] = useState("");
  const [matricula, setMatricula] = useState("");
  const [curso, setCurso] = useState("");

  const salvarDados = async(event) => {
      try{
         event.preventDefault();
         const resposta = await fetch("/api/alunos", {
            method: "POST",
            headers: { "Content-type": "Application/json"},
            body: JSON.stringify({ nome: nome, matricula: matricula, curso: curso})
         });
         if(resposta.ok){
            alert("Show na bagaça, Layan vai reprovar!");
         }
      }catch(err){
          return console.error("Deu erro na bagaça", err);7
      }
  }

  return (
    <main>
      <form onSubmit={salvarDados}>
        <input
          type="text"
          placeholder="Digite nome"
          onChange={(event) => setNome(event.target.value)}
        />
        <input
          type="number"
          placeholder="Digite matrícula"
          onChange={(event) => setMatricula(event.target.value)}
        />
        <input
          type="text"
          placeholder="Digite curso"
          onChange={(event) => setCurso(event.target.value)}
        />
        <button>Salvar</button>
      </form>
    </main>
  );
}
