import { useState } from "react";
import { ChevronDown, ChevronUp, FileText } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import type { NormsProps } from "../types/services";


export default function RegulationsAccordion({description,norms}:NormsProps) {
  const [open, setOpen] = useState(false);

  return (
    <Fade direction="up" >

    <div className="mt-10 md:mx-20 rounded-2xl border border-slate-200 bg-white shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-3 text-left transition hover:bg-slate-50"
      >
        <div className="flex items-center gap-3">
          <FileText className="text-sky-500" size={22} />

          <div>
            <h4 className="font-semibold text-slate-900">
              Normatividad aplicable
            </h4>
            <p className="text-sm text-slate-500">
              Consulte las normas que respaldan nuestros procesos.
            </p>
          </div>
        </div>

        {open ? (
          <ChevronUp className="text-slate-500" />
        ) : (
          <ChevronDown className="text-slate-500" />
        )}
      </button>

      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-slate-200 px-5 py-3 text-sm">
            <p className=" text-slate-600">{description} </p>

            <div className="mt-3 space-y-4">
              {norms.map(val=>{
                return(
                  <div key={val.title}>
                  <h5 className="font-semibold">{val.title}</h5>
                  <p className="text-sm text-slate-600">{val.description} </p>
                </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
      </Fade>

  );
}