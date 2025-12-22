import React, { useState } from 'react';

function MyForm() {
  const [name, setName] = useState('karimul');

  return (
    <div>
      <h1>MyForm</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(`The name you entered was: ${name}`);
        }}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default MyForm;