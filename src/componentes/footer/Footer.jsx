import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import Card from "react-bootstrap/Card";
import CardFooter from "../../assets/footer.jpeg";

function Footer() {
  return (
   <section className="footer">
    <Card className="footer-card">
      <Card.Img src={CardFooter} alt="Foto de Dai & Diego" className="footer-img" />
      <Card.ImgOverlay className="footer-overlay d-flex flex-column justify-content-start align-items-center text-center">
        <h1 className="footer-title">¡¡ Te esperamos !!</h1>
        <h2 className="footer-sub">Porque los momentos más lindos se viven acompañados</h2>
      </Card.ImgOverlay>
    </Card></section>
  );
}

export default Footer;


