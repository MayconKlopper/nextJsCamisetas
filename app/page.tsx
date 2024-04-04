import CamisetaListagem from "./components/CamisetaListagem";
import { camisetas } from "./mockData";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Lista de Camisetas</h1>
      <CamisetaListagem camisetas={camisetas} />
    </div>
      </div>
    </main>
  );
}
