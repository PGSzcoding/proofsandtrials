import { useState } from "react";
import toast from "react-hot-toast";
import {  uploadFile } from "../services/certificates.service";

interface AddFileProps{
    loadFiles: () => void;
}

export function AddFileModal({loadFiles}:AddFileProps){
    const [loading, setLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    
     async function handleUpload() {
    if (!selectedFile) return;

    setLoading(true);

    try {
      await uploadFile(selectedFile);
      toast.success(`"${selectedFile.name}" subido correctamente`);
      setSelectedFile(null);
      await loadFiles();
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }finally{
      setLoading(false);
    } 
  }


  

    return(
        <form className=" flex-col flex gap-2">
              <select 
              name="" id="" className="w-full rounded-full border border-slate-300  px-4 py-3 outline-none transition focus:border-sky-700 text-sm" >
                <option value="">Selecciona tipo de archivo</option>
                <option value="hola">tipo 1</option>
              </select>
                <input type="text" placeholder="Id / Placa" className="rounded-full border border-slate-300 px-4 py-3 text-sm"/>
                <input type="file" accept="application/pdf" onChange={(e) => setSelectedFile(e.target.files?.[0] ?? null)} className="rounded-full border border-slate-300 px-4 py-3 text-sm"/>
               <button type="button" onClick={handleUpload}  disabled={!selectedFile || loading}  className="rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-500 disabled:cursor-not-allowed disabled:opacity-50">
                  {loading ? "Subiendo..." : "Subir"}
                </button>
              
            </form>
    )
}