//import logo from './logo.svg';
import './App.css';
import './css/NavigationBar.css';
import './css/Console.css';

import NavigationBar from './components/NavigationBar'
import Console from './components/Console';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Console />
    </div>
  );
}

export default App;
