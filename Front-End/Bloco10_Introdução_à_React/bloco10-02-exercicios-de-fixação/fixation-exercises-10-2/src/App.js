import staringCat from './cat.jpg';
import Image from './Image';
import './App.css';

function App() {
  return (
    <main>
      <Image source={staringCat} alternativeText='Cute cat staring'/>
    </main>
  );
}

export default App;
