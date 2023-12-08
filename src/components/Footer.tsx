import { FaLinkedin, FaFacebookSquare, FaYoutube } from "react-icons/fa";

export interface FooterInterface {
    linkedinUrl: string;
    youtubeUrl: string;
    facebookUrl: string;
};

export const Footer = ({linkedinUrl, youtubeUrl, facebookUrl}: FooterInterface) => {
    return (
        <footer className ="">
            <a href="#"><FaLinkedin/></a>
            <a href="#"><FaYoutube/></a>
            <a href="#"><FaFacebookSquare/></a>
        </footer>
    );
};
