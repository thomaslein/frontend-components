import { useState } from 'react';
import './App.css';
import { Button, Label, Input } from '..';

function App() {
  const [inputCustomLabelValue, setInputCustomLabelValue] = useState('');
  return (
    <>
      <div className="card">
        <div
          style={{
            width: '100%',
            display: 'flex',
            gap: 4,
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <h1 style={{ fontSize: 40 }}>Frontend Components</h1>
          <Label>{inputCustomLabelValue ? inputCustomLabelValue : 'Default label'}</Label>
          <Input
            placeholder="Simple input"
            value={inputCustomLabelValue}
            onChange={(e) => setInputCustomLabelValue(e.target.value)}
          />
          <Button>Submit something</Button>
        </div>
      </div>
    </>
  );
}

export default App;
