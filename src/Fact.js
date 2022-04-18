import { useCallback, useMemo, useState } from 'react';
import * as React from "react";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { Box, Select, MenuItem } from '@mui/material';

function Fact({ updateResult, allowEdits }) {
  const [a, b, sign] = useMemo(() => {
    const sign = Math.random() > 0.5;
    let a, b;
    if (sign) {
      a = (Math.ceil(Math.random() * 10));
      b = (Math.ceil(Math.random() * 20));
    } else {
      a = Math.ceil(Math.random() * 10);
      b = Math.ceil(Math.random() * 10) + a;
    }
    return [a, b, sign];
  }, []);

  const [isCorrect, setIsCorrect] = useState(null);
  const [res, setRes] = useState(null);

  const checkResult = useCallback((event) => {
    const res = event.target.value;
    const c = (res === (sign ? a + b : b - a)) ? true : false;
    setRes(res);
    if (c && (c!==isCorrect)) {
      updateResult(1);
    } else if (isCorrect && !c) {
      updateResult(-1);
    }
    setIsCorrect(c);
  }, [sign, a, b, isCorrect, updateResult]);

  return (
    <Box elevation={3} sx={{ fontSize: '1.5rem' }}>
      {b} {sign ? "+" : "-"} {a} =
      <Select
        value={res}
        label="Answer"
        onChange={checkResult}
        sx={{ m: 1 }}
        disabled={!allowEdits && (res !== null)}
      >
        {[...Array(30).keys()].map(i =>
          <MenuItem value={i} sx={{ fontSize: '1.5rem' }} > {i}</MenuItem>)}
      </Select>
      {isCorrect === null ? null : isCorrect === true ? <CheckIcon color='success' /> : <ClearIcon color='error' />}
    </Box >
  );
}

export default React.memo(Fact);
