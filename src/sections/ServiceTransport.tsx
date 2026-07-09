import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ServicioTransporteProps } from "../types/services";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay, Navigation } from "swiper/modules";
import TransportCard from "../components/TransportCard";
import { Fade } from "react-awesome-reveal";
import RegulationsAccordion from "./RegulationsAccordion";
import { normasTransporte } from "../data/services";

export default function ServiceTransport({title,subtitle,items}:ServicioTransporteProps){
    const arrows = <div>
                      <button className="prev absolute -left-6 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:bg-sky-500 hover:text-white">
                          <ChevronLeft size={22} />
                        </button>
                              <button className="next absolute -right-6 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:bg-sky-500 hover:text-white">
                          <ChevronRight size={22} />
                        </button>
                  </div>
    return (<>
        <section>
            <div className="mx-auto max-w-7xl">
                <div className="mb-10 max-w-2xl">
                    <Fade direction="left" cascade>
                    <h2 className="mt-3 text-xl font-bold  md:text-3xl">{title}</h2>
                    <span className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">{subtitle}</span>
                    </Fade>
                </div>

                <Fade>
                   <div className="relative px-8">
                <Swiper  modules={[Navigation,Autoplay]} navigation={{ prevEl: ".prev", nextEl: ".next",}} loop   autoplay={{ delay: 2500,
                  disableOnInteraction: false, pauseOnMouseEnter: true,}}  spaceBetween={24} slidesPerView={4}  
                  breakpoints={{  0: { slidesPerView: 1 },  768: { slidesPerView: 3 }, 1024: { slidesPerView: 4 },}}>
                  {items.map((item, index) => (
                    <SwiperSlide key={index}>
                      <TransportCard title={item.title} description={item.description} image={item.image} />
                    </SwiperSlide>
                  ))}
                </Swiper>
                {arrows}
                </div>
                </Fade>
                    </div>
        <RegulationsAccordion description={normasTransporte.description} norms={normasTransporte.norms} />

        </section>
     </>
    )

}