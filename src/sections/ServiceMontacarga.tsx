import { SwiperSlide } from "swiper/react";
import type { ServicioTransporteProps } from "../types/services";
import {   Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import { Fade } from "react-awesome-reveal";

import "swiper/css";
import 'swiper/css/pagination';

export default function ServiceMontacarga({title,subtitle,items}:ServicioTransporteProps){
   
    return <section className=" md:px-20 px-10  pt-17 pb-10 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 ">
        
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
                <Fade cascade direction="left">
                <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">{title}</h2>
                <div className="mt-3 h-1 w-16 rounded-full bg-sky-400" />
                <p className="mt-6 text-lg leading-8 text-slate-400">
                {subtitle}
                </p>
                </Fade>
            </div>

            <div className="min-w-0 md:p-8 p-2">
            <Fade direction="right">

                <Swiper
                    modules={[Pagination]} pagination={{ clickable: true }}
                    spaceBetween={24}
                    slidesPerView={1}
                    className="w-full"
                    >
                    {items.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex justify-center">
                                <div className=" max-w-md  group flex min-h-[380px] flex-col rounded-3xl border border-slate-800 bg-slate-800 p-8 shadow-lg transition-all duration-300">
                                    <div className="mb-8 flex items-center justify-between">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-xl font-bold text-sky-700">
                                        {String(index + 1).padStart(2, "0")}
                                        </div>
                                        <div className="h-px flex-1 mx-4 bg-slate-200"></div>
                                    </div>
                                    <Fade  >
                                    <h3 className="text-2xl font-bold leading-tight text-white">{item.title}</h3>
                                    <p className="mt-6 flex-1 text-[17px] leading-8 text-slate-400">
                                        {item.description}
                                    </p>
                                    </Fade>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    </Swiper>
                </Fade>

                </div>
            </div>
    </section>
}