import { useState } from "react";
import { Spinner } from "./Spinner";
import { CertificateOptions } from "../data/general";
import { saveFileMetadata, uploadFile } from "../services/certificates.service";
import toast from "react-hot-toast";
import { buttonStyles } from "../styles/general";

interface AddFileProps{
    fileAdded: () => void;
}

export function AddFileModal({fileAdded}:AddFileProps){
    const [loading, setLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [tipoArchivo, setTipoArchivo] = useState('');
    const [idPlaca, setIdPlaca] = useState('');
    const handleTipoArchivoChange = (e: React.ChangeEvent<HTMLSelectElement>) => setTipoArchivo(e.target.value);
    const handleIdPlacaChange = (e: React.ChangeEvent<HTMLInputElement>) => setIdPlaca(e.target.value);

    async function handleUpload() {
      if (!selectedFile) return;

      setLoading(true);

      try {
        const  key  = await uploadFile(selectedFile);
        await saveFileMetadata({ key: key.key, tipo: tipoArchivo,clave:idPlaca});

        toast.success(`"${selectedFile.name}" subido correctamente`);
        setSelectedFile(null);
        clearForm();
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        }
      } finally {
        setLoading(false);
      }
  }

    function clearForm(){
      setTipoArchivo('')
      setIdPlaca('')
      setSelectedFile(null)
      fileAdded()
    }

    return(
      <form className=" flex-col flex gap-2">
          <select  name="tipoArchivo"  id="tipoArchivo"  value={tipoArchivo}  onChange={handleTipoArchivoChange}  className="w-full rounded-full border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-700 text-sm">
            <option value="">Selecciona tipo de archivo</option>
            {CertificateOptions.map(val=>{
              return <option key={val.value} value={val.value}>{val.label}</option>
            })}
          </select>

          <input  type="text"  placeholder="Id / Placa" value={idPlaca} onChange={handleIdPlacaChange} className="rounded-full border border-slate-300 px-4 py-3 text-sm"/>
              
          <input type="file" accept="application/pdf" onChange={(e) => setSelectedFile(e.target.files?.[0] ?? null)} className="rounded-full border border-slate-300 px-4 py-3 text-sm"/>
               
          <button type="button" onClick={handleUpload}  disabled={(!selectedFile || idPlaca == "" || tipoArchivo == "") || loading}  className={`${buttonStyles.primary}  px-6 py-3 text-sm font-semibold mt-3`}>
            {loading ?  <span className="flex justify-center gap-2">Subiendo <Spinner /></span>: "Subir"}
          </button>

      </form>
    )
}