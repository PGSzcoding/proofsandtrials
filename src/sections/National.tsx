import Container from "../components/Container";
import colombiaMap from "../assets/mapa2.png";

export default function National(){
    return (
    <section className="py-3 bg-linear-to-r from-slate-950 via-slate-900 to-slate-800">
        <Container>
            <div className="flex w-full justify-center items-center gap-16 lg:grid-cols-2 ">
                <div>
                    <span className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-500">
                    Presencia en Colombia
                    </span>
                    <h2 className="mt-4 text-5xl font-bold text-white">Disponible a nivel nacional</h2>
                    <div className="mt-6 h-1 w-20 rounded-full bg-sky-400" />
                </div>
                <div className="flex justify-center">
                    <img src={colombiaMap} alt="Cobertura nacional" className="max-h-125 object-contain"/>
                </div>
            </div>
        </Container>
</section>
)}

