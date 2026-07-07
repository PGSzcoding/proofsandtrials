import { useState } from "react";
import toast from "react-hot-toast";
import {  saveFileMetadata, uploadFile } from "../services/certificates.service";
import { Spinner } from "./Spinner";

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
        const  key  = 'test2'//await uploadFile(selectedFile);
        await saveFileMetadata({ id: idPlaca, key, type: tipoArchivo,});

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
              <select  name="tipoArchivo"  id="tipoArchivo"  value={tipoArchivo}  onChange={handleTipoArchivoChange} 
                className="w-full rounded-full border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-700 text-sm">
                <option value="">Selecciona tipo de archivo</option>
                <option value="hola">tipo 1</option>
              </select>

              <input  type="text"  placeholder="Id / Placa" value={idPlaca} onChange={handleIdPlacaChange} className="rounded-full border border-slate-300 px-4 py-3 text-sm"/>
              
              <input type="file" accept="application/pdf" onChange={(e) => setSelectedFile(e.target.files?.[0] ?? null)} className="rounded-full border border-slate-300 px-4 py-3 text-sm"/>
               
              <button type="button" onClick={handleUpload}  disabled={!selectedFile || loading}  className="rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-500 disabled:cursor-not-allowed disabled:opacity-50">
                  {loading ? <>
                  <Spinner />
                    <span>Subiendo</span>
                  </> : "Subir"}
              </button>
        </form>
    )
}