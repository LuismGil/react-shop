import React from 'react';
import imgNotFound from './404NotFound.jpg'

const NotFound = () => {
  return (
    <div>
      <img src={imgNotFound} alt="404NotFound" />
    </div>
  );
};

export default NotFound;