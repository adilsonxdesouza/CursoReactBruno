import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import styles from "../componentes/estilos/footer.module.css";


export default  function FooterReactIcons () {
    return (
        <footer>
            <p> Meu footer</p>
            <ul className={styles.social_list}>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>
            </ul>

        </footer>
        );
}