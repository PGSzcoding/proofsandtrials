import Container from "../components/Container";
import colombiaMap from "../assets/mapa2.png";
import { Fade } from "react-awesome-reveal";

export default function National(){
    return (
        <Fade>
            <section className="bg-linear-to-r from-slate-950 via-slate-900 to-slate-800 py-16 lg:py-6">
                <Container>
                    <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-center lg:gap-16">
                        <div className="text-center lg:text-left">
                            <Fade direction="left" cascade>
                                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-500">
                                    Presencia en Colombia
                                </span>
                                <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">Disponible a nivel nacional</h2>
                                <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-sky-400 lg:mx-0" />
                            </Fade>
                        </div>
                        <div className="flex justify-center">
                            <Fade>
                                <img src={colombiaMap} alt="Cobertura nacional" className="w-65 md:w-85 lg:w-105 xl:w-120" />
                            </Fade>
                        </div>
                    </div>
                </Container>
            </section>
        </Fade>
        )}

