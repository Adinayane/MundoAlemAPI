import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from 'next/link'; // Importe o Link para criar links de navegação

const Usuarios = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Faça uma chamada GET para a API Spring Boot
        axios
            .get("https://localhost:7219/api/Usuarios")
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar a lista de clientes:", error);
            });
    }, []);

    return (
        <div>
            <h1 className="titulo">Lista de Usuarios</h1>
            <table className="table container tabela">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>CPF</th>
                        <th>Nome</th>
                        <th>Endereço</th>
                        <th>UF</th>
                        <th>Email</th> {/* */}
                    </tr>
                </thead>
                {users.map((element) => (
                    <tbody key={element.id}>
                        <tr>
                            <td>{element.id}</td>
                            <td>{element.cpf}</td>
                            <td>{element.nome}</td>
                            <td>{element.endereco}</td>
                            <td>{element.uf}</td>
                            <td>{element.email}</td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    );
};

export default Usuarios;