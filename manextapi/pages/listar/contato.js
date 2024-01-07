import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from 'next/link'; // Importe o Link para criar links de navegação

const Mensagens = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        // Faça uma chamada GET para a API Spring Boot
        axios
            .get("https://localhost:7219/api/Contatoes")
            .then((response) => {
                setContacts(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar a lista de Mensagens:", error);
            });
    }, []);

    return (
        <div>
            <h1 className="titulo">Lista de Mensagens</h1>
            <table className="table container tabela">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Assunto</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Mensagem</th>
                        <th>Aberto?</th> {/* */}
                    </tr>
                </thead>
                {contacts.map((element) => (
                    <tbody key={element.id}>
                        <tr>
                            <td>{element.id}</td>
                            <td>{element.assunto}</td>
                            <td>{element.nome}</td>
                            <td>{element.email}</td>
                            <td>{element.mensagem}</td>
                            <td>{element.lido ? "Sim":"Não"}</td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    );
};

export default Mensagens;