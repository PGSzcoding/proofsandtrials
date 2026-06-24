import Container from "../components/Container";

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <section className="bg-slate-50 py-24">
        <Container>
          <h1 className="text-5xl font-bold text-slate-800">
            Services
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Here you can describe the company services in more detail.
          </p>
        </Container>
      </section>
    </main>
  );
}