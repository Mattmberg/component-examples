import { FaLinkedin, FaFacebookSquare, FaYoutube } from "react-icons/fa";

export interface FooterInterface {
    linkedinUrl: string;
    youtubeUrl: string;
    facebookUrl: string;
};

export const Footer = ({linkedinUrl, youtubeUrl, facebookUrl}: FooterInterface) => {
    return (
        <footer className ="">
            <a href={linkedinUrl}><FaLinkedin/></a>
            <a href={youtubeUrl}><FaYoutube/></a>
            <a href={facebookUrl}><FaFacebookSquare/></a>
        </footer>
    );
};
