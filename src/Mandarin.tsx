import { useCallback, useState } from 'react';
import { Box, Button, Paper } from '@mui/material';
import FlashCard from './FlashCard';
import React from 'react';

function Mandarin() {
  const initData = [...Array(9).keys()].map(i => { return { image: `img${i+1}.png`, answer: `ans${i+1}.png`, showAnswer: false }; });
  const [data, setData] = useState(initData);
  const renderFlashCard = useCallback((i: { image: string; answer: string; showAnswer: boolean; }) => {
    const index = data.indexOf(i);
    const showAnswer = () => setData([...data.slice(0, index), { ...i, showAnswer: true }, ...data.slice(index + 1)]);
    return <FlashCard data={i} onClick={showAnswer} />;
  }, [data]);
  return (
    <Paper elevation={3} sx={{ m: 1 }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px,1fr))', justifyItems: 'center' }}>
        {data.map(renderFlashCard)}
      </Box>
      <Button variant="contained" onClick={() => setData(initData)} sx={{ m: 2 }}>Try Again</Button>
    </Paper>
  );
}

export default Mandarin;
