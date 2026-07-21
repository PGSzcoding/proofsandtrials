import { Fade } from "react-awesome-reveal";
import { contactInfo } from "../data/general";
import Container from "../components/Container";
import LineSeparator from "../components/UI/LineSeparator";


export default function Contact() {
  const title = "CONTÁCTANOS"
  const description = "Estamos listos para brindarte asesoría personalizada según el servicio que necesitas."
  const iframe_src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.6976420012343!2d-74.15656822454592!3d4.64791634211193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9c38b03f8149%3A0x8492e61392977605!2zQ2wuIDcgIzg3Qi01MywgQm9nb3TDoSwgRC5DLCBCb2dvdMOhLCBDb2xvbWJpYQ!5e0!3m2!1ses-419!2sfr!4v1782208868488!5m2!1ses-419!2sfr"
  
  return (
    <section id="contacto" className=" pt-18 pb-20 ">
      <Container>
        <div className="mb-14 text-center">
          <Fade direction="down" cascade>
            <h2 className="mt-3 text-4xl font-bold">{title}</h2>
            <LineSeparator className="mx-auto bg-[#0281FC] my-4" />
            <p className="mx-auto mt-5 max-w-2xl text-slate-950/60">{description}</p>
          </Fade>
        </div>
        
        <Fade >
          <div className="mx-auto max-w-6xl w-full grid grid-cols-1 gap-8 lg:grid-cols-3 items-stretch px-4">
            <div className="overflow-hidden rounded-md   bg-slate-900/30 shadow-2xl lg:col-span-2 min-h-87.5 md:min-h-112.5 flex">
              <iframe src={iframe_src} title="location" className="w-full h-full border-0 min-h-87.5 md:min-h-112.5" allowFullScreen loading="lazy"/>
            </div>

            <div className="rounded-md  bg-slate-100 p-6 backdrop-blur-md flex flex-col justify-center space-y-4">
              <div className="border-b border-white/5 pb-4 mb-2">
                <h3 className="text-xl font-bold  tracking-wide">Información de contacto</h3>
                <p className="text-xs text-slate-800/50 mt-1">Ponte en comunicación con nosotros</p>
              </div>

              <div className="divide-y divide-white/5 space-y-4">
                {contactInfo.map((item,i) => {
                    const Icon = item.icon;
                  const Wrapper =  "div"; //item.href ? "a"  href={item.href} target={item.href ? "_blank" : undefined}:rel={item.href ? "noopener noreferrer" : undefined} 

                  return (
                    <Wrapper key={`${item.label}${i}x`}  className="flex  gap-4 pt-4 first:pt-0 group transition-all items-center">
                      
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0281FC] text-white shadow-lg shadow-sky-500/10 group-hover:bg-sky-400 transition-colors duration-300">
                        <Icon />
                      </div>

                      <div className="flex min-w-0 flex-col wrap-break-word ">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#0281FC]">{item.label}</span>
                        <span className="mt-0.5 text-sm font-medium leading-snug text-slate-900 md:text-base">
                          {item.array?
                          item.array.map(val=>{
                            return <p key={val.val} className="pt-1 text-sm"><a href={val.href}>{val.val}</a></p>
                          })
                          :item.value}
                        </span>
                      </div>
                    </Wrapper>
                )})}
              </div>
            </div>
          </div>
        </Fade>
      </Container>
    </section>
  );
}