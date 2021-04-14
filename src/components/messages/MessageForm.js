import React, { useState, useEffect } from 'react';
import { getAllMessages, addMessage } from '../../modules/MessagesManager';
import { useHistory } from 'react-router-dom';
import './Messages.css';

export const MessageForm = () => {
  const [messageNew, setMessage] = useState({
      sendingUserId: 0,
      receivingUserId: 0,
      message: "",
      timestamp: 0
  });
  const history = useHistory();

  const getMessage = () => {
    return getAllMessages().then(APImessages => {
      setMessage(APImessages)
    })
  }


  useEffect(() => {
  //load Employee data and setState
    getMessage();
  }, []);


  const handleControlledInputChange = (event) => {
		/* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
		const newMessage = { ...messageNew }
		let selectedVal = event.target.value

		// forms always provide values as strings. But we want to save the ids as numbers.
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		/* Animal is an object with properties.
		Set the property to the new value
		using object bracket notation. */
		newMessage[event.target.id] = selectedVal
		// update state
		setMessage(newMessage)
	}

  const handleClickSaveMessage = (event) => {
		event.preventDefault() //Prevents the browser from submitting the form
    const newMessage = {
      sendingUserId: parseInt(sessionStorage.getItem("nutshell_user")),
      receivingUserId: 0,
      message: messageNew.message,
      timestamp: `${new Date().getMonth()+1} ${new Date().getDate()}, ${new Date().getFullYear()}`
    }
    console.log(newMessage)
		addMessage(newMessage)
			.then(() => history.push("/messages"))
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
          value={messageNew.message} />
    		</div>
    	</fieldset>
    	<button className="btn btn-primary"
    		onClick={handleClickSaveMessage}>
    		Save message
      </button>
    </form>
	)
}