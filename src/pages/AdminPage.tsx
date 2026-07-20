import { useState } from "react";
import Container from "../components/Container";
import AdminHeader from "../components/AdminHeader";
import { Plus} from "lucide-react";
import Modal from "../components/modal/Modal";
import { AddFileModal } from "../components/AddFileForm";
import AdminSearch from "../sections/AdminSearch";
import { buttonStyles } from "../styles/general";

export default function AdminCertificates() {
  const [open, setOpen] = useState(false);
  const [refreshValue, setRefreshValue] = useState<string | null>(null);
  function fileAdded(clave:string){
    setOpen(false)
    setRefreshValue(clave);

  }

  return (
    <main className="h-screen">
       <Modal open={open} onClose={() => setOpen(false)} title="SUBIR ARCHIVO" size="md">
            <AddFileModal fileAdded={fileAdded}/>
        </Modal>
      <AdminHeader />

      <section className="pt-5">
        <Container>
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

            <div>
              <h1 className="mt-3 text-4xl font-bold text-slate-800">Certificados</h1>
              <p className="mt-3 text-slate-500">Sube y consulta los certificados disponibles.</p>
            </div>

            <div>
             <button onClick={() => setOpen(true)}  type="button" className={`${buttonStyles.primary} mt-5 w-full px-8 py-4 font-semibold `}>
               <span className="flex gap-2"><Plus/> Subir archivo </span>
              </button>
            </div>
         
          </div>
        </Container>
      </section>
     
     <AdminSearch refreshValue={refreshValue} />

    </main>
  );
}