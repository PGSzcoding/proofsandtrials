import {
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";

export function Socials(){
    return (
        <div className="flex gap-4 mt-6">
            <a href="https://www.facebook.com/" target="_blanc">
                <FaFacebook  className="text-2xl hover:text-sky-500 transition" />
            </a>

            <a href="https://www.instagram.com/" target="_blanc">
                <FaInstagram  className="text-2xl hover:text-purple-400 transition" />
            </a>

            <a href="https://wa.me/5731332381467}" target="_blanc">
                <FaWhatsapp className="text-2xl hover:text-green-500 transition" />
            </a>
        </div>
    )
}