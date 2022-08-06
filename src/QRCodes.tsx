import { Box, Button, Modal, Paper } from "@mui/material";
import { useState } from "react";
import React from 'react';

function QRCodes() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [code, setCode] = useState<string>('1楼');

  const arr = ["开门", "关门", "B1楼", ...[...Array.from(Array(38).keys())].map(i => (i + 1).toString() + '楼')];
  return (
    <div>
      {arr.map(i => (
        <Button
          key={i}
          variant="outlined"
          onClick={() => { setShowModal(true); setCode(i); }}
          sx={{ m: 1, width: '80px' }}
          size='large'>
          {i}
        </Button>
      ))}
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <Paper sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          p: 4,
        }}>
          <Box sx={{ display: 'grid', gridTemplateRows: 'auto auto', justifyItems: 'center' }}>
            <Box fontSize={30}>{code}</Box>
            <Box component='img' src={require(`./assets/qr_codes/${code}.png`)} />
          </Box>
        </Paper>
      </Modal>
    </div>
  );
}

export default QRCodes;
