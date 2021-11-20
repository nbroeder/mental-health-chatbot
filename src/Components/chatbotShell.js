import React from 'react';

import config from '../Chatbot/config.js';
import ActionProvider from "../Chatbot/ActionProvider";
import MessageParser from '../Chatbot/MessageParser';
import Chatbot from 'react-chatbot-kit';

export const chatbotShell = () => {
    return (
        <div>
            <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
        </div>
    )
}
