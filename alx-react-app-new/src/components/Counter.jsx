import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <p style={{ fontSize: '24px', marginBottom: '20px' }}>Current Count: {count}</p>
      <button 
        onClick={() => setCount(count + 1)}
        style={{ 
          margin: '5px', 
          padding: '10px 20px', 
          fontSize: '16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Increment
      </button>
      <button 
        onClick={() => setCount(count - 1)}
        style={{ 
          margin: '5px', 
          padding: '10px 20px', 
          fontSize: '16px',
          backgroundColor: '#f44336',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Decrement
      </button>
      <button 
        onClick={() => setCount(0)}
        style={{ 
          margin: '5px', 
          padding: '10px 20px', 
          fontSize: '16px',
          backgroundColor: '#2196F3',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
