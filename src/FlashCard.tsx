import { Box } from '@mui/material';
import React from 'react';

type Props = { data: { image: string; answer: string; showAnswer: boolean; }, onClick: () => void };

export default function FlashCard({ data, onClick }: Props) {
  return <Box onClick={onClick} sx={{
    width: 250,
    border: 1,
    m: 1
  }} component='img' src={require("./assets/mandarin_weather_words/" + (data.showAnswer === true ? data.answer : data.image))} />;
}
