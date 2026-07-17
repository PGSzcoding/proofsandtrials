import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { CertificateOptions } from "../data/general";
import { Spinner } from "../components/Spinner";
import { buttonStyles } from "../styles/general";
import { getDownloadUrl, searchCertificateByClave } from "../services/certificates.service";
import Container from "../components/Container";
import certificateImage from "../assets/consulta.webp";
import SelectField from "../components/SelectField";
import toast from "react-hot-toast";
import BlueText from "../components/UI/BlueText";
import SEO from "../components/SEO";

export default function CertificatePage() {
  const labelClasses = 'mb-2 block text-sm font-medium text-slate-700'
  const [certificateType,setCertificateType] = useState<string>("")
  const [certificatePlaca,setCertificatePlaca] = useState<string>("")
  const [loading, setLoading] = useState(false);
  
  const title="Consulta tu certificado"
  const description=" Ingresa el código de tu certificado para verificarlo y descargar el documento correspondiente."

   async function handleSearch(e?: React.FormEvent) {
        e?.preventDefault();
        setLoading(true)
        try {
          const data = await searchCertificateByClave(certificatePlaca) 
          if(data.certificates.length == 0){
            toast.error("No se encontró ningún archivo con los datos proporcionados.",{position: "top-right"})
          }else{
            const certificate = data.certificates.find(val=>val.tipo==certificateType)
            if(!certificate)
              toast.error("No se encontró ningún archivo con los datos proporcionados.",{position: "top-right"})
            else
              handleOpen(certificate.key)
            
          }
        } catch (error) {
          if (error instanceof Error) {toast.error(error.message)}
        } finally{
          setLoading(false)
        }
      }

      async function handleOpen(key:string){
        try {
        const {downloadUrl} = await getDownloadUrl(key);
        window.open(downloadUrl, "_blank");
      } catch(error) {
        if (error instanceof Error) {
          toast.error(error.message);
        }
      }}

  return (<>
      <SEO
          title="Consulta"
          description="Consulta y descarga certificados emitidos por Proofs and Trials utilizando la información de identificación del equipo."
          canonical="/consulta-certificado"
        />
    <main className=" pt-10">
      <Container className="min-h-[calc(100vh-260px)] flex items-center">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2  pb-20">
          
          {/* Image */}
          <div className="order-2 lg:order-1 relative  overflow-hidden rounded-3xl lg:block">
            <Fade >
                <img src={certificateImage} alt="Consulta de certificados P&T" className="destello h-full w-full object-cover"/>
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-5 left-8 right-8 text-white">
                    <BlueText >P&T S.A.S</BlueText>
                    <p className=" text-sm leading-6 text-white/80">Certificados confiables</p>
                </div>
            </Fade>
          </div>

          {/* Description */}
          <div className="order-1 lg:order-2 ">
            <Fade cascade >
                <BlueText >Certificados</BlueText>
                <h1 className="mt-2 text-5xl font-bold leading-tight text-slate-800">{title}</h1>

                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500">
                  {description}
                </p>

                <form className="mt-10 max-w-md" onSubmit={handleSearch}>
                  <SelectField label="Tipo de certificado" value={certificateType} onChange={setCertificateType} placeholder="Selecciona un tipo" options={CertificateOptions} className="mb-4"/>

                  {certificateType && <Fade cascade>
                    <div>
                      <label className={labelClasses}> Placa </label>
                      <input type="text"placeholder="" value={certificatePlaca} onChange={(e) => setCertificatePlaca(e.target.value)}
                      className="w-full rounded-full border border-slate-300  px-6 py-4 outline-none transition focus:border-sky-700"/>
                    </div>
                    <button type="submit" disabled={loading}  className={`inline-flex mt-5 w-full px-8 py-4 font-semibold ${buttonStyles.primary}`}>
                      Consultar {loading && <span className="ms-2"><Spinner /></span>}
                    </button>
                  
                  </Fade>
                  }
                </form>
            </Fade>
          </div>

        </div>
      </Container>
    </main>
  </>);
}