import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from 'next/link'; // Importe o Link para criar links de navegação

const TiposPag = () => {
  const [tipos, setTipos] = useState([]);

  useEffect(() => {
    // Faça uma chamada GET para a API Spring Boot
    axios
      .get("https://localhost:7219/api/FormasPags")
      .then((response) => {
        setTipos(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de destinos:", error);
      });
  }, []);

  return (
    <div>
      <h1 className="titulo">Lista de Tipos de Pagamento</h1>
      <table className="table container tabela">
        <thead>
          <tr>
            <th>Id</th>
            <th>Descrição</th>
          </tr>
        </thead>
        {tipos.map((element) => (
          <tbody key={element.id}>
            <tr>
              <td>{element.id}</td>
              <td>{element.descrPag}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default TiposPag;