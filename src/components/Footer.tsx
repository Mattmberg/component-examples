import { FaLinkedin, FaFacebookSquare, FaYoutube } from "react-icons/fa";

export interface FooterInterface {
    linkedinUrl: string;
};

export const Footer = ({}: FooterInterface) => {
    return (
        <footer className ="">
            <a href="#"><FaLinkedin/></a>
            <a href="#"><FaYoutube/></a>
            <a href="#"><FaFacebookSquare/></a>
        </footer>
    );
};
