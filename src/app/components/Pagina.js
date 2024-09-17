import { Container } from "react-bootstrap";
import BarraNavegacao from "./BarraNavegacao";
import '../globals.css';

export default function Pagina({titulo, children}) {
    return (
        <>
            <BarraNavegacao />

            <div className="header text-center">
                <h1>{titulo}</h1>
            </div>

            <Container className="container-custom">
                {children}
            </Container>
        </>
    )
}
