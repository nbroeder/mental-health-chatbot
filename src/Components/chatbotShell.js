import React from 'react';

import config from '../Chatbot/config.js';
import ActionProvider from "../Chatbot/ActionProvider";
import MessageParser from '../Chatbot/MessageParser';

import 'react-chatbot-kit/build/main.css'
import Chatbot from 'react-chatbot-kit';

export const ChatbotShell = () => {
    return (
        
            <Chatbot
        // config={config}
        // messageParser={MessageParser}
        // actionProvider={ActionProvider}
      />
        
    )
}
