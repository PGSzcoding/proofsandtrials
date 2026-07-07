import { Eye, Trash2 } from "lucide-react";
import Container from "../components/Container";
import { useState } from "react";
import type { Certificate } from "../types/certificates";
import { deleteCertificate, getCertificateById, getDownloadUrl } from "../services/certificates.service";
import toast from "react-hot-toast";
import { Spinner } from "../components/Spinner";
import ConfirmToast from "../components/ConfirmToast";

export default function AdminSearch(){
    const buttonClass = "cursor-pointer rounded-full border px-3 py-1 text-sm font-semiboldtransition  hover:text-white"
    const [certificateId, setCertificateId] = useState("");
    const [loading, setLoading] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [foundFile, setFoundFile] = useState<Certificate | null | undefined>(null);

    const notify = () => toast((t) => (
    <ConfirmToast
      toastId={t.id}
      title={`¿Seguro que quieres eliminar ${foundFile?.id}?`}
      description="Esta acción no se puede deshacer."
      onConfirm={() => handleDelete()}
    />
    ));;

    async function handleSearch(e: React.FormEvent) {
      e.preventDefault();
      setFoundFile(null)
      setLoading(true)
      try {
        const data = await getCertificateById(certificateId);
        setFoundFile(data.certificate)
      } catch (error) {
        if (error instanceof Error) {setFoundFile(undefined)}
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

      
      async function handleDelete(){
        if(foundFile){
            setDeleting(true)
            try{
            await deleteCertificate (foundFile.id);
                toast.success('Archivo eliminado');
                setFoundFile(null)
                setCertificateId('')
            }catch(error ){
                if (error instanceof Error) {
                toast.error(error.message);
                }
            }finally{
                setDeleting(false)
            }
        }
    }

    return (
        <section>
            <Container>
            <form onSubmit={handleSearch}  className="my-20 mx-auto  flex w-full max-w-2xl overflow-hidden rounded-full border border-white/20  shadow-xl">
                <input value={certificateId} onChange={(e) => setCertificateId(e.target.value)}
                    type="text" placeholder="Ingresa el número del certificado..."className="flex-1 bg-transparent px-7 py-3 text-lg text-slate-700 outline-none placeholder:text-slate-400"/>
                <button disabled={loading} type="submit" className="flex gap-2 items-center bg-slate-800 px-8 font-semibold text-white transition hover:bg-slate-900 cursor-pointer">
                    Consultar {loading && <Spinner />} 
                </button>
            </form>
        
        {foundFile!==null && 
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
            <div className="grid grid-cols-[1fr_auto_auto] gap-4 border-b border-slate-100 bg-slate-100 px-6 py-4 text-sm font-bold text-slate-700">
              <span>Certificado</span>
            </div>

            {foundFile == undefined?(
              <div className="px-6 py-10 text-center text-slate-500">Certificado no encontrado.</div>
            ) : (
              <div className="divide-y divide-slate-100">
                  <div  className="grid grid-cols-[1fr_auto_auto] items-center gap-4 px-6 py-5"  >
                    <div>
                      <p className="font-semibold text-slate-800">{foundFile.id}</p>
                      <p className="mt-1 text-xs text-slate-400">{foundFile.type}</p>
                    </div>

                    <div className="flex gap-3">
                        {!deleting &&
                            <button onClick={() => handleOpen(foundFile.key)}  className={`${buttonClass} border-sky-400 text-sky-500 transition hover:bg-sky-400`} ><Eye size={20}/></button>
                        }

                        <button disabled={deleting} onClick={() => notify()} className={`${buttonClass} border-red-400 ${deleting?'bg-red-400':''} text-red-500 transition hover:bg-red-400`}  >
                        {deleting ? <Spinner/> : <Trash2 size={20}/>}
                        </button>
                    </div>
                  </div>
              </div>
            )}
          
        </div>
    }</Container>
</section>
)}