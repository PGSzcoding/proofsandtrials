import type { TransporteItem } from "../types/services";


export default function TransportCard({title,image,description}:TransporteItem){
    return (
        <div className="group relative h-[380px] overflow-hidden rounded-xl">
            
            {image && (
              <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"/>
            )}

            <div className={`absolute inset-0 ${
                image? "bg-black/30" : "bg-gradient-to-br from-slate-900 via-sky-900 to-sky-600" }`}
            />

            <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center text-white">
              <h3 className="mb-4 text-2xl font-bold uppercase">{title} </h3>
              <p className="max-w-xs leading-7 text-slate-200">
                {description}
              </p>
            </div>
          </div>
    )
}