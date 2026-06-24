import { Mail, MapPin, Phone } from "lucide-react";
import Container from "../components/Container";

const contactInfo = [
  {
    label: "Telefono",
    value: "313 323 81 46",
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
   

    <section id="contact" className="bg-slate-50 py-24">
  <Container>
    <div className="mb-14 text-center">
      <h2 className="text-4xl font-bold text-slate-800">
        Contáctanos
      </h2>

      <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-sky-400" />

      <p className="mt-5 text-slate-500">
        Estamos listos para brindarte asesoría personalizada.
      </p>
    </div>


    <div className="grid items-stretch gap-8 lg:grid-cols-2">

      <div className="overflow-hidden rounded-3xl shadow-lg">
        <iframe
          title="map"
          className="h-full min-h-[450px] w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.6976420012343!2d-74.15656822454592!3d4.64791634211193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9c38b03f8149%3A0x8492e61392977605!2zQ2wuIDcgIzg3Qi01MywgQm9nb3TDoSwgRC5DLCBCb2dvdMOhLCBDb2xvbWJpYQ!5e0!3m2!1ses-419!2sfr!4v1782208868488!5m2!1ses-419!2sfr"

        />
      </div>


      <div className="grid gap-5">

        {contactInfo.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-6 rounded-3xl bg-white p-8 shadow-sm transition hover:shadow-md"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sky-400 text-white">
              {item.icon}
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-800">
                {item.label}
              </h3>

              <p className="mt-1 text-slate-500">
                {item.value}
              </p>
            </div>
          </div>
        ))}

      </div>

    </div>

  </Container>
</section>
  );
}