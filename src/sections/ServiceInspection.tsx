import { Fade } from "react-awesome-reveal";
import LineSeparator from "../components/LineSeparator";
import type { ServicioTransporteProps } from "../types/services";

export default function ServiceInspection({title,subtitle,items}:ServicioTransporteProps){
    return (
        <section className="mt-45 mb-30">
            <div className="mx-auto max-w-2xl text-center">   
                <Fade direction="up" cascade>
                <h2 className="text-4xl font-bold text-slate-800">{title}</h2>
                <LineSeparator />
                <p className="mt-6 text-sm leading-7 text-slate-600">{subtitle}</p>
                </Fade>
            </div>
            <Fade direction="up">
            <div className="grid gap-x-16 gap-y-5 md:grid-cols-2 lg:grid-cols-3 mt-10">
                {items.map((element,index) => {
                    return (
                       <div key={element.title}
                        className={`group relative ml-10 flex h-24 items-center rounded-r-full bg-slate-100 px-8 pl-16 transition duration-300 hover:bg-sky-400
                        ${index >= 4 ? "hidden md:flex" : "flex"}`}>
                            <div className="absolute -left-10 flex h-20 w-20 items-center justify-center rounded-full border-2 border-slate-500 bg-white transition duration-300 group-hover:border-sky-400">
                                {element.image? <img  src={element.image} alt={element.title} className="h-full w-full rounded-full object-cover p-1" />:''}
                            </div>
                            <Fade cascade direction="right">

                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-700 transition group-hover:text-sky-50">
                                {element.title}
                            </h3>
                            </Fade>
                        </div>
                    );
                })}
            </div>
            </Fade>

        </section>
    )
}