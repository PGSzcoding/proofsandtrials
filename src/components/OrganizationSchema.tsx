import { Helmet } from "react-helmet-async";

export default function OrganizationSchema() {
   
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Proofs and Trials P&T S.A.S.",
    url: "https://proofsandtrials.com",
    logo: "https://proofsandtrials.com/logo.jpeg",
    image: "https://proofsandtrials.com/logo.jpeg",
    telephone: "+573133238146",
    email: "comercial@proofsandtrials.com",
     address: {
    "@type": "PostalAddress",
    streetAddress: "Calle 7 No 87b 53",
    addressLocality: "Bogotá",
    addressCountry: "CO",
    },
    description:
      "Empresa especializada en inspección técnica, ensayos no destructivos y certificación de equipos de transporte e izaje en Colombia.",
    areaServed: {
      "@type": "Country",
      name: "Colombia",
    },
    serviceType: [
      "Certificación de quinta rueda",
      "Certificación de king pin",
      "Pruebas hidrostáticas",
      "Certificación de líneas de vida",
      "Certificación de tornamesa",
      "Certificación de tren de apoyo",
      "Certificación de espesores por ultra sonido",
      "Tablas de aforo",
      "Inspección Elementos de Izaje",
      "Certificación de montacarga"
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}