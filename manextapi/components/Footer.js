import Image from "next/image";

const Footer = () => {
  return (
    <div className="estilo-rodape text-nav">
      <footer>
        MundoAlém
        <div className="d-flex justify-content-center">
          <div className="col-md-1">
            <Image src="/midia/facebook.jpg" width="30" height="30" title="logo do facebook" />
          </div>
          <div className="col-md-1">
            <Image src="/midia/linkedin.png" width="30" height="30" title="logo do LinkedIn" />
          </div>
          <div className="col-md-1">
            <Image src="/midia/instagram.jpg" width="30" height="30" title="logo do Instagram" />
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;