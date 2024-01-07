import Link from "next/link";

const Home = () => {
    return (
        <div>
            <div className="text-nav titulo">
                <h2>Sejam Bem Vindo ao Menu de Consulta</h2>
                <h4>Escolha uma das opções a seguir:</h4>
            </div>
            <div className="row p-3">
                <div className="card col-sm-3">
                    <div className="card-content">
                        <h4>Usuários</h4>
                        <p>Lista de Usuários
                        </p>
                        <br />
                        <Link href="/listar/usuarios" className="button btn-car">Selecionar</Link>
                    </div>
                </div>
            </div>
            <div className="row p-3">
                <div className="card col-sm-3">
                    <div className="card-content">
                        <h4>Destinos</h4>
                        <p>Lista de Destinos
                        </p>
                        <br />
                        <Link href="/listar/destinos" className="button btn-car">Selecionar</Link>
                    </div>
                </div>
            </div>
            <div className="row p-3">
                <div className="card col-sm-3">
                    <div className="card-content">
                        <h4>Tipos de Pagamento</h4>
                        <p>Lista de tipos de pagamentos
                        </p>
                        <br />
                        <Link href="/listar/tipoPag" className="button btn-car">Selecionar</Link>
                    </div>
                </div>
                <div className="row p-3">
                    <div className="card col-sm-3">
                        <div className="card-content">
                            <h4>Contato</h4>
                            <p>Veja as mensagens via contato.
                            </p>
                            <br />
                            <Link href="/listar/contato" className="button btn-car">Selecionar</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;