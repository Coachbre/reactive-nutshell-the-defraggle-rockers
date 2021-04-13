import React, { useState, useEffect } from 'react';
import { addMessage, getAllMessages } from '../modules/MessagesManager';
import { useHistory } from 'react-router-dom';

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

  const handleControlledInputChange = (event) => {
		/* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
		const newMessage = { ...messages }
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
		setMessages(newMessage)
	}

  const handleClickSaveMessage = (event) => {
		event.preventDefault() //Prevents the browser from submitting the form

			//invoke addAnimal passing animal as an argument.
			//once complete, change the url and display the animal list
		addMessage(messages)
			.then(() => history.push("/messages"))
	}

	return (
		<form className="messageBox">
			<h2 className="message__title">Messages</h2>
      <section id='messagePrint'></section>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Message Text Here:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="message name" value={messages.message} />
				</div>
			</fieldset>
			<button className="btn btn-primary"
				onClick={handleClickSaveMessage}>
				Save message
      </button>
		</form>
	)
}