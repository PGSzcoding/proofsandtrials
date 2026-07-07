import { MessageCircle } from "lucide-react";

export default function WhatsAppButton({
  phone = "5731332381467",
  text = "¡Hola! Me gustaría solicitar información.",
}) {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        fixed
        bottom-6
        right-6
        z-50
        flex
        h-16
        w-16
        items-center
        overflow-hidden
        rounded-full
        bg-[#25D366]
        text-white
        shadow-xl
        transition-all
        duration-300
        hover:w-64
        hover:rounded-full
      "
    >
      <div className="flex h-16 w-16 shrink-0 items-center justify-center">
        <MessageCircle size={30} strokeWidth={2.3} />
      </div>

      <span
        className="
          flex
          flex-col
          leading-tight
          opacity-0
          transition-opacity
          duration-200
          group-hover:opacity-100
        "
      >
        <span className="text-xs font-semibold  tracking-wide">
          Programe su inspección
        </span>

        <span className="text-xs font-semibold  tracking-wide">
          y certificación
        </span>

        <span className=" text-md font-bold">
          313 323 81 46
        </span>
</span>
    </a>
  );
}