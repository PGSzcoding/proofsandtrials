import {
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";

export function Socials(){
    return (
        <div className="flex gap-4 mt-6">
            <a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank" aria-label="Visitar LinkedIn de Proofs and Trials">
                <FaLinkedin className="text-2xl hover:text-sky-500 transition" />
            </a>

            <a href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank" aria-label="Visitar Instagram de Proofs and Trials">
                <FaInstagram  className="text-2xl hover:text-purple-400 transition" />
            </a>

            <a href="https://wa.me/5731332381467" rel="noopener noreferrer" target="_blank" aria-label="Contactar a Proofs and Trials por WhatsApp">
                <FaWhatsapp className="text-2xl hover:text-green-500 transition" />
            </a>
        </div>
    )
}