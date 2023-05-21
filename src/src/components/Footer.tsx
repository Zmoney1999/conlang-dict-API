import React from "react";
import { Col } from "react-bootstrap";

function Footer() {

    // Render the footer with the OSU logo
    return (
        <footer className="footer">
            <img src={process.env.PUBLIC_URL + "/OSU_Logo.png"} height={80} width={256} />
        </footer>
    )
}

export default Footer;
