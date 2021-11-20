import './App.css';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css'
import  chatbotShell  from './Components/chatbotShell.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
       <chatbotShell></chatbotShell>
        
      </header>
    </div>
  );
}

export default App;
