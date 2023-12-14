import { ModeToggle } from './components/mode-toggle';
import { Button } from './components/ui/button';
import Test from './pages/test';

function App() {
  return (
    <div className="container">
      <div className="flex items-center justify-between">
        <h1>React + ASP.NET App with Vite</h1>
        <Button variant={'destructive'}>I'm a shadcn button</Button>
        <ModeToggle />
      </div>
      <div className="flex flex-col">
        <Test />
      </div>
    </div>
  );
}

export default App;
