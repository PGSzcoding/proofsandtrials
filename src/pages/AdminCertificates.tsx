import { useEffect, useState } from "react";
import Container from "../components/Container";
import { getDownloadUrl, getFiles, uploadFile } from "../services/certificates.service";
import AdminHeader from "../components/AdminHeader";
import toast from "react-hot-toast";

type CertificateFile = {
  key: string;
  size?: number;
  lastModified?: string;
};
/*
  const notify = () => toast((t) => (
    <ConfirmToast
      toastId={t.id}
      title="¿Seguro que quieres eliminar?"
      description="Esta acción no se puede deshacer."
      onConfirm={() => handleDelete(key)}
    />
));;*/
export default function AdminCertificates() {
  const [files, setFiles] = useState<CertificateFile[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    async function loadFiles() {
      try {
        const data = await getFiles();
        setFiles(data.files);
      } catch(error) {
        console.log(error);
      } 
    }

    loadFiles();

  }, []);

  async function handleUpload() {
    if (!selectedFile) return;

    setLoading(true);

    try {
      await uploadFile(selectedFile);
      toast.success(`"${selectedFile.name}" subido correctamente`);
    //  setSelectedFile(null);
      // await loadFiles();
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }finally{
      setLoading(false);
    } 
  }


  async function handleDownload(key:string){
    try {

    const {downloadUrl} = await getDownloadUrl(key);

    window.open(downloadUrl, "_blank");

  } catch(error) {

    if (error instanceof Error) {
      toast.error(error.message);
    }

  }
  }

  function handleDelete(){
    
  }

  return (
    <main className="h-screen">
      
      <AdminHeader />

      <section className="bg-slate-50 pt-5">
        <Container>
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="mt-3 text-4xl font-bold text-slate-800">Certificados</h1>
              <p className="mt-3 text-slate-500">Sube, consulta y administra los certificados disponibles.</p>
            </div>

            <form className="rounded-2xl bg-white p-5 shadow-sm">
              <label className="mb-3 block text-sm font-semibold text-slate-700">Subir nuevo certificado</label>

              <div className="flex flex-col gap-3 sm:flex-row">
                <input type="file" accept="application/pdf" onChange={(e) => setSelectedFile(e.target.files?.[0] ?? null)} className="rounded-full border border-slate-300 px-4 py-3 text-sm"/>
                <button type="button" onClick={handleUpload}  disabled={!selectedFile || loading}  className="rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-500 disabled:cursor-not-allowed disabled:opacity-50">
                  {loading ? "Subiendo..." : "Subir"}
                </button>
              </div>
            </form>
          </div>
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
            <div className="grid grid-cols-[1fr_auto_auto] gap-4 border-b border-slate-100 bg-slate-100 px-6 py-4 text-sm font-bold text-slate-700">
              <span>Certificado</span>
            </div>

            {files.length === 0 ? (
              <div className="px-6 py-10 text-center text-slate-500">No hay certificados disponibles.  </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {files.map((item) => (
                  <div  key={item.key}  className="grid grid-cols-[1fr_auto_auto] items-center gap-4 px-6 py-5"  >
                    <div>
                      <p className="font-semibold text-slate-800">
                        {item.key.split("/").pop()}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        {item.key}
                      </p>
                    </div>

                    <button onClick={() => handleDownload(item.key)}  className="rounded-full border border-sky-400 px-5 py-2 text-sm font-semibold text-sky-500 transition hover:bg-sky-400 hover:text-white" >
                      Ver
                    </button>

                    <button  onClick={() => handleDelete()}  className="rounded-full border border-red-300 px-5 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-500 hover:text-white" >
                      Borrar
                    </button>
                  </div>
                ))}
              </div>
            )}
          
          </div>
        </Container>
      </section>

    </main>
  );
}