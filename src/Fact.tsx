import { useCallback, useMemo, useState } from 'react';
import * as React from "react";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { Box, Select, MenuItem } from '@mui/material';

type Props = { updateResult: (correct: number, done: number) => void, allowEdits: boolean, reload: boolean };

function Fact({ updateResult, allowEdits, reload }: Props) {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [res, setRes] = useState(null);

  const checkResult = useCallback((event: { target: { value: any; }; }) => {
    const newRes = event.target.value;
    const c = (newRes === (sign ? a + b : b - a)) ? true : false;
    let update = 0;
    if (c != null && (c !== isCorrect)) {
      update = 1;
    } else if (isCorrect && !c) {
      update = -1
    }
    updateResult(update, res === null ? 1 : 0);
    setRes(newRes);
    setIsCorrect(c);
  }, [sign, a, b, isCorrect, updateResult, res]);

  return (
    <Box sx={{ fontSize: '1.5rem' }}>
      {b} {sign ? "+" : "-"} {a} =
      <Select
        value={res}
        label="Answer"
        onChange={checkResult}
        sx={{ m: 1 }}
        disabled={(!allowEdits && (res !== null)) || isCorrect === true}
      >
        {[...Array(30).keys()].map(i =>
          <MenuItem value={i} sx={{ fontSize: '1.5rem' }} > {i}</MenuItem>)}
      </Select>
      {isCorrect === null ? null : isCorrect === true ? <CheckIcon color='success' /> : <ClearIcon color='error' />}
    </Box >
  );
}

export default React.memo(Fact);
