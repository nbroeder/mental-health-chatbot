import './App.css';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css'
import  {ChatbotShell}  from './Components/ChatbotShell.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
       <ChatbotShell></ChatbotShell>
        
      </header>
    </div>
  );
}

export default App;
