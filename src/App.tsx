import './App.css';
import { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import Facts from './Facts';
import Mandarin from './Mandarin';
import Houses from './Houses';
import CalculateIcon from '@mui/icons-material/Calculate';
import TranslateIcon from '@mui/icons-material/Translate';
import Home from '@mui/icons-material/Home';
import React from 'react';
import QRCodes from './QRCodes';

function App() {
  return (
    <QRCodes />
  );
}

// function App() {
//   const [page, setPage] = useState('Facts');

//   return (
//     <div className="App" style={{ paddingBottom: '56px' }}>
//       {page === 'Facts' && <Facts />}
//       {page === 'Mandarin' && <Mandarin />}
//       {/* {page === 'Houses' && <Houses />} */}
//       <BottomNavigation
//         showLabels
//         value={page}
//         onChange={(event, newValue) => {
//           setPage(newValue);
//         }}
//         sx={{ width: '100%', position: 'fixed', bottom: 0 }}
//       >
//         <BottomNavigationAction label="Math Facts" value="Facts" icon={<CalculateIcon />} />
//         <BottomNavigationAction label="Mandarin" value="Mandarin" icon={<TranslateIcon />} />
//         {/* <BottomNavigationAction label="Houses" value="Houses" icon={<Home />} /> */}
//       </BottomNavigation>
//     </div>
//   );
// }

export default App;
