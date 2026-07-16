import { useState } from "react";
import { CertificateOptions } from "../data/general";
import { Eye, Trash2 } from "lucide-react";
import { deleteCertificate, getDownloadUrl } from "../services/certificates.service";
import type { Certificate } from "../types/certificates";
import ConfirmToast from "./ConfirmToast";
import toast from "react-hot-toast";

const buttonClass = "cursor-pointer rounded-full border px-3 py-1 text-sm font-semiboldtransition  hover:text-white"
interface CertificateItemProps{
    item:Certificate,
    afterDelete: () => void;
}

export default function CertificateItem({item,afterDelete}:CertificateItemProps){
    
    const [deleting, setDeleting] = useState(false);
    const certificateType = CertificateOptions.find(val=>val.value==item?.tipo)?.label

    const notify = () => toast((t) => (
        <ConfirmToast
        toastId={t.id}
        title={`¿Seguro que quieres eliminar el archivo "${item?.clave}" de ${certificateType}?`}
        description="Esta acción no se puede deshacer."
        onConfirm={handleDelete}
    />
    ));;

    async function handleOpen(){
        try {
            const {downloadUrl} = await getDownloadUrl(item.key);
            window.open(downloadUrl, "_blank");
        } catch(error) {
            if (error instanceof Error) {
                toast.error(error.message);
            }
        }
    }

    async function handleDelete(){
        if(item){
            setDeleting(true)
            try{
                await deleteCertificate (item.id);
                toast.success('Archivo eliminado');
                afterDelete()
                
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
        <div key={item.id} className="divide-y divide-slate-100">
            <div  className="grid grid-cols-[1fr_auto_auto] items-center gap-4 px-6 py-5"  >
                <div>
                    <p className="font-semibold text-slate-800">{item.clave}</p>
                    <p className="mt-1 text-xs text-slate-400">{certificateType}</p>
                </div>

                <div className="flex gap-3">
                    {!deleting &&
                        <button onClick={() => handleOpen()}  className={`${buttonClass} border-sky-400 text-sky-500 transition hover:bg-sky-400`} ><Eye size={20}/></button>
                    }

                    <button disabled={deleting} onClick={() => notify()} className={`${buttonClass} border-red-400 ${deleting?'bg-red-400':''} text-red-500 transition hover:bg-red-400`}  >
                        <Trash2 size={20}/>
                    </button>
                </div>
            </div>
        </div>
    )
}