import React from 'react';

export const MessageCard = ({cardMessage}) => {
  return (
    <div className='messageCard'>
      <p className='message'>{cardMessage.message}</p>
      <div className='timestamp'>{cardMessage.timestamp}</div>
    </div>
  );
}