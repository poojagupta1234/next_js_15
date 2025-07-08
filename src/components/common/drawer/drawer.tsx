"use client";
import React from 'react';
import './drawer.css'; // Assuming you have a CSS file for styling
const Drawer: React.FC<{ isOpen: boolean; onClose: () => void; children: React.ReactNode; position?: 'left' | 'right' }> = ({ isOpen, onClose, children, position = 'left' }) => {
  const drawerClasses = `drawer ${isOpen ? 'open' : ''} ${position}`;

  return (
    <>
      <div className={drawerClasses}>
        <button onClick={onClose} className="drawer-close-button">
          &times;
        </button>
        <div className="drawer-content">
          {children}
        </div>
      </div>
      {isOpen && <div className="backdrop" onClick={onClose}></div>}
    </>
  );
};

export default Drawer;