import { Fade } from "react-awesome-reveal";
import LineSeparator from "../components/LineSeparator";
import type { ServicioTransporteProps } from "../types/services";
import RegulationsAccordion from "./RegulationsAccordion";
import { normasIzaje } from "../data/services";

export default function ServiceInspection({title,subtitle,items}:ServicioTransporteProps){
    return (
        <section className="md:mt-40 md:mb-30 mt-25 mb-20">
            <div className="mx-auto max-w-2xl text-center">   
                <Fade direction="up" cascade>
                <h2 className="text-4xl font-bold text-slate-800">{title}</h2>
                <LineSeparator />
                <p className="mt-6 text-sm leading-7 text-slate-600">{subtitle}</p>
                </Fade>
            </div>
            <Fade direction="up">
            <div className="grid gap-x-10 md:gap-x-16 lg:gap-x-16 gap-y-5 md:grid-cols-2 grid-cols-2 lg:grid-cols-3 mt-10">
                {items.map((element) => {
                    return (
                       <div key={element.title}
                        className={`group relative md:ml-10 ml-4 h-24 items-center rounded-r-full bg-slate-100 px-8 md:pl-16 pl-8 transition duration-300 hover:bg-sky-400 flex
                        `}>
                            <div className="absolute -left-10 flex md:h-20 h-15 w-15  md:w-20 items-center justify-center rounded-full border-2 border-slate-500 bg-white transition duration-300 group-hover:border-sky-400">
                                {element.image? <img  src={element.image} alt={element.title} className="h-full w-full rounded-full object-cover p-1" />:''}
                            </div>
                            <Fade cascade direction="right">

                            <h3 className="md:text-sm text-xs font-bold uppercase tracking-widest text-slate-700 transition group-hover:text-sky-50">
                                {element.title}
                            </h3>
                            </Fade>
                        </div>
                    );
                })}
            </div>
            </Fade>
            <div className="mt-15">
            <RegulationsAccordion description={normasIzaje.description} norms={normasIzaje.norms} />

            </div>

        </section>
    )
}