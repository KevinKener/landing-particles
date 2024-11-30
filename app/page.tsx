//Creacion de componente: 

//Importacion de CoverParticles
import CoverParticles from "@/components/cover-particles"
import TransitionPage from "@/components/transition-page";

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        
      </div>
    </main>
  );
}

//Generando nuevo componente TransitionPage.
