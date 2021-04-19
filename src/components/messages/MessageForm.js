import React, { useState, useEffect } from 'react';
import { getAllMessages, addMessage } from '../../modules/MessagesManager';
import { useHistory } from 'react-router-dom';
import './Messages.css';

export const MessageForm = ({getMessages}) => {
  const [message, setMessage] = useState({
    message: ''
  });
  const history = useHistory();
  

  const handleControlledInputChange = (event) => {
		/* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
		const newMessage = { ...message}
		let selectedVal = event.target.value

		newMessage[event.target.id] = selectedVal
		// update state
		setMessage(newMessage)
	}

  const handleClickSaveMessage = (event) => {
		event.preventDefault() //Prevents the browser from submitting the form
    const newMessage = {
      sendingUserId: parseInt(sessionStorage.getItem("nutshell_user")),
      receivingUserId: 0,
      message: message.message,
      timestamp: `${new Date().getMonth()+1} ${new Date().getDate()}, ${new Date().getFullYear()}`
    }

    if(newMessage.message.startsWith('@')){
      let regularExpression = /(?<=\@)(.*?)(?=\s)/;
    }

    console.log(newMessage)
		addMessage(newMessage)
			.then(getMessages())
	}

	return (
    <form className="messageBox">
    	<h2 className="message__title">Messages</h2>
    	<fieldset>
    		<div className="form-group">
    			<label htmlFor="name">Message Text Here:</label>
    			<input type="text" id="message" 
          onChange={handleControlledInputChange} required autoFocus 
          className="form-control" placeholder="message text" 
          value={message.message} />
    		</div>
    	</fieldset>
    	<button className="btn btn-primary"
    		onClick={handleClickSaveMessage}>
    		Save message
      </button>
    </form>
	)
}