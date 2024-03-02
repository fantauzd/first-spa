import React, { useState } from 'react';

function NameForm() {
    const [name, setName] = useState('');
    return (
      <div className="NameForm">
        <form>
        <fieldset>
            <legend>Your Details</legend>
            <label>Please enter your name
            <input type="text" value={name}
                onChange={e => setName(e.target.value)} />
            </label>
        </fieldset>
        <button onClick={e => {
            setName(e.target.value);
            alert(`Your name is ${name}`);
            e.preventDefault();
        }}>Submit</button>
        </form>
      </div>
    );
  }
  
  export default NameForm;