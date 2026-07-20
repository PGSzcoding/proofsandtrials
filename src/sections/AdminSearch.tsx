import { useState,useEffect } from "react";
import { Spinner } from "../components/Spinner";
import {searchCertificateByClave } from "../services/certificates.service";
import type { Certificate } from "../types/certificates";
import Container from "../components/Container";
import CertificateItem from "../components/CertificateItem";

interface AdminSearchProps {
  refreshValue: string | null;
}

export default function AdminSearch({ refreshValue }: AdminSearchProps){

    const [certificateId, setCertificateId] = useState("");
    const [loading, setLoading] = useState(false);
    const [foundFiles, setFoundFiles] = useState<Certificate[] | null | undefined>(null);

    useEffect(() => {
    if (!refreshValue) return;
    handleSearch(undefined,refreshValue);
  }, [refreshValue]);

    async function handleSearch(e?: React.FormEvent,value?: string) {
      e?.preventDefault();
      setFoundFiles(null)
      setLoading(true)
      try {
        const clave = value ?? certificateId;
        const data = await searchCertificateByClave(clave) 
        setFoundFiles(data.certificates)
      } catch (error) {
        if (error instanceof Error) {setFoundFiles(undefined)}
      } finally{
        setLoading(false)
      }
    }



    function afterDelete(){
      if(foundFiles?.length==1){
        setFoundFiles(null)
        setCertificateId('')
      }else{
        handleSearch()
      }
    }
      
    return (
        <section>
          <Container>
            <form onSubmit={handleSearch}  className="my-20 mx-auto  flex w-full max-w-2xl overflow-hidden rounded-full border border-white/20  shadow-xl">
                <input value={certificateId} onChange={(e) => setCertificateId(e.target.value)}
                    type="text" placeholder="Buscar por número de placa..."className="flex-1 bg-transparent px-7 py-3 text-lg text-slate-700 outline-none placeholder:text-slate-400"/>
                <button disabled={loading} type="submit" className="flex gap-2 items-center bg-slate-800 px-8 font-semibold text-white transition hover:bg-slate-900 cursor-pointer">
                    Consultar {loading && <Spinner />} 
                </button>
            </form>
        
          {foundFiles!==null && 
            <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <div className="grid grid-cols-[1fr_auto_auto] gap-4 border-b border-slate-100 bg-slate-100 px-6 py-4 text-sm font-bold text-slate-700">
                <span>Certificado</span>
              </div>

              {foundFiles == undefined || foundFiles.length==0?(
                <div className="px-6 py-10 text-center text-slate-500">Certificado no encontrado.</div>
              ) : (
                foundFiles.map(item=>{
                  return <CertificateItem key={item.id} item={item} afterDelete={afterDelete}/>
                })
              )}
            </div>
          }
      </Container>
    </section>
  )}