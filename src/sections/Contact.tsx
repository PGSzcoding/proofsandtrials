import { Mail, MapPin, Phone } from "lucide-react";
import Container from "../components/Container";

const contactInfo = [
  {
    label: "Telefono",
    value: "313 323 81 46",
    icon: <Phone/>,
  },
  {
    label: "Telefono",
    value: "313 487 99 83",
    icon: <Phone/>,
  },
  {
    label: "Email",
    value: "gerenciapytsas@gmail.com  ",
    icon: <Mail/>,
  },
  {
    label: "Direccion",
    value: "Calle 7 No 87b 53 –  Bogotá D. C  ",
    icon: <MapPin/>,
  },
];

export default function Contact() {
  return (
<section id="contacto" className="bg-slate-950 pt-18 pb-10 text-white">
  <Container>
    <div className="mb-14 text-center">

      <h2 className="mt-3 text-4xl font-bold">
    Contáctanos
      </h2>

      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-sky-400" />

      <p className="mx-auto mt-5 max-w-2xl text-white/60">
        Estamos listos para brindarte asesoría personalizada según el servicio que necesitas.
      </p>
    </div>

    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
        <iframe title="location" className="h-[520px] min-h-70 md:min-h-112.5 w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.6976420012343!2d-74.15656822454592!3d4.64791634211193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9c38b03f8149%3A0x8492e61392977605!2zQ2wuIDcgIzg3Qi01MywgQm9nb3TDoSwgRC5DLCBCb2dvdMOhLCBDb2xvbWJpYQ!5e0!3m2!1ses-419!2sfr!4v1782208868488!5m2!1ses-419!2sfr" />
    
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
        <h3 className="text-2xl font-bold">
          Información de contacto
        </h3>

        <div className="mt-8 space-y-5">
          {contactInfo.map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-5 rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sky-400 text-white">
                {item.icon}
              </div>

              <div>
                <p className="font-semibold text-white">
                  {item.label}
                </p>

                <p className="mt-1 text-white/60">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>

    
      </div>
    </div>
  </Container>
</section>
  );
}