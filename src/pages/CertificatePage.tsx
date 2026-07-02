import Container from "../components/Container";
import certificateImage from "../assets/consulta.png";
import { useState } from "react";
import SelectField from "../components/SelectField";
import { Fade } from "react-awesome-reveal";
import { CertificateOptions } from "../data/general";

export default function CertificatePage() {
  const labelClasses = 'mb-2 block text-sm font-medium text-slate-700'
  const [certificateType,setCertificateType] = useState<string>("")

  return (
    <main className=" pt-10">
      <Container className="min-h-[calc(100vh-260px)] flex items-center">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2  pb-20">
          {/* Image */}
          <Fade direction="left">
            <div className="order-2 lg:order-1 relative  overflow-hidden rounded-3xl bg-slate-100 shadow-xl lg:block">
                <img src={certificateImage} alt="Consulta de certificados P&T" className="h-full w-full object-cover"/>
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-5 left-8 right-8 text-white">
                  <p className="text-sm font-semibold uppercase tracking-widest text-sky-300">P&T S.A.S.</p>
                  <p className=" text-sm leading-6 text-white/80">Certificados confiables</p>
              </div>
            </div>
          </Fade>

          <div className="order-1 lg:order-2 ">
            <Fade cascade >
                <span className="text-sm font-semibold uppercase tracking-widest text-sky-600">Certificados</span>
                <h1 className="mt-4 text-5xl font-bold leading-tight text-slate-800">Consulta tu certificado</h1>

                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500">
                  Ingresa el código de tu certificado para verificarlo y descargar
                  el documento correspondiente.
                </p>

                <form className="mt-10 max-w-md">
                  <SelectField label="Tipo de certificado" value={certificateType} onChange={setCertificateType}
                  placeholder="Selecciona un tipo" options={CertificateOptions} className="mb-4"/>

                  {certificateType && <Fade cascade>
                    <>
                      <label className={labelClasses}> Número </label>
                      <input type="text"placeholder="Ej. CERT-000001"
                      className="w-full rounded-full border border-slate-300  px-6 py-4 outline-none transition focus:border-sky-700"/>
                    </>
                    <button type="submit"  className="inline-flex items-center justify-center rounded-full   transition duration-300 cursor-pointer mt-5 w-full px-8 py-4 font-semibold bg-sky-500 text-white hover:bg-sky-600">
                      Consultar
                    </button>
                  </Fade>
                  }
                </form>
            </Fade>
          </div>
        </div>
      </Container>
    </main>
  );
}