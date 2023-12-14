import { ModeToggle } from './components/mode-toggle';
import { Button } from './components/ui/button';

function App() {
  return (
    <div>
      <h1>React + ASP.NET App with Vite</h1>
      <Button variant={'destructive'}>I'm a shadcn button</Button>
      <ModeToggle />
    </div>
  );
}

export default App;
