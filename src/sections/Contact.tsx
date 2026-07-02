import Container from "../components/Container";
import { Fade } from "react-awesome-reveal";
import { contactInfo } from "../data/general";
import LineSeparator from "../components/LineSeparator";


export default function Contact() {
  return (
    <section id="contacto" className=" pt-18 pb-20 ">
      <Container>
        <div className="mb-14 text-center">
          <Fade direction="down" cascade>
            <h2 className="mt-3 text-4xl font-bold">CONTÁCTANOS</h2>
            <LineSeparator />
            <p className="mx-auto mt-5 max-w-2xl text-slate-950/60">
              Estamos listos para brindarte asesoría personalizada según el servicio que necesitas.
            </p>
          </Fade>
        </div>
        
        <Fade >
          <div className="mx-auto max-w-6xl w-full grid grid-cols-1 gap-8 lg:grid-cols-3 items-stretch px-4">
            <div className="overflow-hidden rounded-md   bg-slate-900/30 shadow-2xl lg:col-span-2 min-h-[350px] md:min-h-[450px] flex">
              <iframe title="location"  className="w-full h-full border-0 min-h-[350px] md:min-h-[450px]" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.6976420012343!2d-74.15656822454592!3d4.64791634211193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9c38b03f8149%3A0x8492e61392977605!2zQ2wuIDcgIzg3Qi01MywgQm9nb3TDoSwgRC5DLCBCb2dvdMOhLCBDb2xvbWJpYQ!5e0!3m2!1ses-419!2sfr!4v1782208868488!5m2!1ses-419!2sfr" 
                allowFullScreen loading="lazy"/>
            </div>

            <div className="rounded-md  bg-slate-100 p-6 backdrop-blur-md flex flex-col justify-center space-y-4">
              <div className="border-b border-white/5 pb-4 mb-2">
                <h3 className="text-xl font-bold  tracking-wide">Información de contacto</h3>
                <p className="text-xs text-slate-800/50 mt-1">Ponte en comunicación con nosotros</p>
              </div>

              <div className="divide-y divide-white/5 space-y-4">
                {contactInfo.map((item,i) => {
                    const Icon = item.icon;
                  return (
                  <div key={`${item.label}${i}x`} className="flex items-start gap-4 pt-4 first:pt-0 group transition-all">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-500 text-white shadow-lg shadow-sky-500/10 group-hover:bg-sky-400 transition-colors duration-300">
                      <Icon/>
                    </div>

                    <div className="flex flex-col min-w-0 wrap-break-word">
                      <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">{item.label}</span>
                      <span className="mt-0.5 text-sm md:text-base font-medium text-slate-900 leading-snug">{item.value}</span>
                    </div>
                  </div>
                )})}
              </div>
            </div>
          </div>
        </Fade>
      </Container>
    </section>
  );
}