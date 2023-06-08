import React from 'react';
import Command from './../Command/Command';
import './index.css'
const Terminal = () => {
  return (
    <div className='term'>
    <div id="terminal">
      <Command />
    </div>
</div>
  );
};

export default Terminal;
