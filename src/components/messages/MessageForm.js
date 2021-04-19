import React, { useState, useEffect } from 'react';
import { addMessage } from '../../modules/MessagesManager';
import { useHistory } from 'react-router-dom';
import './Messages.css';
import { getAllUsers } from '../../modules/FriendsManager';

export const MessageForm = ({getMessages}) => {
  const [message, setMessage] = useState({
    message: ''
  });
  const [users, setUsers] = useState([]);
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
    let newMessage = {
      sendingUserId: parseInt(sessionStorage.getItem("nutshell_user")),
      receivingUserId: 0,
      message: message.message,
      timestamp: `${new Date().getMonth()+1} ${new Date().getDate()}, ${new Date().getFullYear()}`
    }

    const getUsers = () => {
      return getAllUsers().then(usersFromAPI => {
          setUsers(usersFromAPI)
      });
    };

    useEffect(() => {
      getUsers();
    }, []);

    if(newMessage.message.startsWith('@')){
      let regularExpression = /(?<=\@)(.*?)(?=\s)/;
      let selectedVal = event.target.value

      let parsedName = selectedVal.match(regularExpression);

      
      let privateUser = users.find(user => {
        if(user.name.toLowerCase() === parsedName.toLowerCase()) {
          return true
        }
      })

      newMessage.receivingUserId = privateUser.id
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