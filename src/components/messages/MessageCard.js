import React from 'react';

export const MessageCard = ({cardMessage}) => {
  return (
    <div class='messageCard'>
      <p class='message'>{cardMessage.message}</p>
      <div class='timestamp'>{cardMessage.timestamp}</div>
    </div>
  );
}