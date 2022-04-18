import './App.css';
import { useCallback, useState } from 'react';
import { Box, Button, Paper } from '@mui/material';
import Fact from './Fact';

function App() {
  const total = 20;
  const [res, setRes] = useState(0);
  const [allowEdits, setAllowEdits] = useState(false);
  const updateResult = useCallback((update) => {
    setRes(res + update);
    console.log(res);
  }, [res]);

  return (
    <div className="App">
      <Paper elevation={3} sx={{ m: 1 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
          {[...Array(total).keys()].map(_i => <Fact updateResult={updateResult} allowEdits={allowEdits} />)}
        </Box>
        <Box sx={{ fontSize: '2rem' }}>{res} / {total}</Box>
        <Button variant="contained" color='warning' onClick={() => setAllowEdits(true)} sx={{ m: 2 }}>Try Again</Button>
        <Button variant="contained" onClick={() => window.location.reload()} sx={{ m: 2 }}>Try More</Button>
      </Paper>
    </div>
  );
}

export default App;
