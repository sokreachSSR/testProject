import React from 'react'
import { useState } from 'react';

export default function PopupClose() {
    const [isOpen, setIsOpen] = useState(false);

    // function to toggle the state of the popup
    const togglePopup = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className={isOpen ? 'popup open' : 'popup'}>
        <button onClick={togglePopup}>Close Popup</button>
      </div>
    );
  }
  


