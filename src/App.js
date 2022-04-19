import './App.css';
import { useCallback, useState } from 'react';
import { Box, Button, Paper } from '@mui/material';
import Fact from './Fact';

function App() {
  const total = 12;
  const [numberCorrect, setNumberCorrect] = useState(0);
  const [numberDone, setNumberDone] = useState(0);
  const [allowEdits, setAllowEdits] = useState(false);
  const updateResult = useCallback((correct, done) => {
    setNumberCorrect(numberCorrect + correct);
    setNumberDone(numberDone + done);
  }, [numberCorrect, numberDone]);

  return (
    <div className="App">
      <Paper elevation={3} sx={{ m: 1 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px,1fr))' }}>
          {[...Array(total).keys()].map(_i => <Fact updateResult={updateResult} allowEdits={allowEdits} />)}
        </Box>
        <Box sx={{ fontSize: '2rem' }}>{numberCorrect} / {total}</Box>
        {(numberDone === total) && <Button variant="contained" disabled={allowEdits} color='warning' onClick={() => setAllowEdits(true)} sx={{ m: 2 }}>Try Again</Button>}
        <Button variant="contained" onClick={() => window.location.reload()} sx={{ m: 2 }}>Try More</Button>
      </Paper>
    </div>
  );
}

export default App;
