import React, { useState, useEffect } from 'react';
import { addMessage, getAllMessages } from '../../modules/MessagesManager';
import { useHistory } from 'react-router-dom';
import './Messages.css';
import { MessageCard } from './MessageCard';
import { MessageForm } from './MessageForm';

export const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const history = useHistory();

  const getMessages = () => {
    return getAllMessages().then(APImessages => {
      setMessages(APImessages)
    })
  }


  useEffect(() => {
  //load Employee data and setState
    getMessages();
  }, []);
  
	return (
    <section>
      <div className='allMessages'>
        <div className='messageList'>
          {messages.map(singleMessage => 
            <MessageCard key={singleMessage.id} cardMessage={singleMessage}/>
          )}
        </div>
        <div>
          <MessageForm getMessages={getMessages}/>
        </div>
      </div>
    </section>
	)
}