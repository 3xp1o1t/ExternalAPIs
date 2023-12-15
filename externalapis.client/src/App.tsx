import { ModeToggle } from "./components/mode-toggle";
import PokemonPage from "./components/pokemon";

function App() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/50 backdrop-blur">
        <div className="container flex h-14 items-center">
          <h1 className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-xl font-extrabold text-transparent">
            React + ASP.NET (Vite)
          </h1>
          <div className="flex flex-1 items-center justify-end">
            <ModeToggle />
          </div>
        </div>
      </header>
      <div className="container flex-1 items-center border-b py-6 py-6">
        <PokemonPage />
      </div>
      <footer className="container flex h-14 items-center justify-center py-6">
        <p className="text-center text-sm leading-loose text-muted-foreground">
          Jesus Montiel
        </p>
      </footer>
    </div>
  );
}

export default App;
