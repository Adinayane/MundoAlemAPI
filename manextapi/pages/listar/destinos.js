import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from 'next/link'; // Importe o Link para criar links de navegação

const Destinos = () => {
  const [dest, setDest] = useState([]);

  useEffect(() => {
    // Faça uma chamada GET para a API Spring Boot
    axios
      .get("https://localhost:7219/api/Destinos")
      .then((response) => {
        setDest(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de destinos:", error);
      });
  }, []);

  return (
    <div>
      <h1 className="titulo">Lista de Destinos</h1>
      <table className="table container tabela">
        <thead>
          <tr>
            <th>Id</th>
            <th>Destino</th>
            <th>Valor</th>
          </tr>
        </thead>
        {dest.map((element) => (
          <tbody key={element.id}>
            <tr>
              <td>{element.id}</td>
              <td>{element.nomeDestino}</td>
              <td>{element.valorDestino}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Destinos;