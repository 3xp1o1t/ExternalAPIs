import { ModeToggle } from "./components/mode-toggle";
import Test from "./pages/test";

function App() {
  return (
    <div className="container mx-auto">
      <div className="my-4 flex items-center justify-between gap-2 border-b py-2">
        <h1 className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-xl font-extrabold text-transparent">
          React + ASP.NET (Vite)
        </h1>
        <ModeToggle />
      </div>
      <div className="flex flex-col">
        <Test />
      </div>
    </div>
  );
}

export default App;
