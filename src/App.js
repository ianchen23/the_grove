import './App.css';
import { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import Facts from './Facts';
import Mandarin from './Mandarin';
import CalculateIcon from '@mui/icons-material/Calculate';
import TranslateIcon from '@mui/icons-material/Translate';

function App() {
  const [page, setPage] = useState('Facts');

  return (
    <div className="App" style={{ paddingBottom: '56px' }}>
      {page === 'Facts' && <Facts />}
      {page === 'Mandarin' && <Mandarin />}
      <BottomNavigation
        showLabels
        value={page}
        onChange={(event, newValue) => {
          setPage(newValue);
        }}
        sx={{ width: '100%', position: 'fixed', bottom: 0 }}
      >
        <BottomNavigationAction label="Math Facts" value="Facts" icon={<CalculateIcon />} />
        <BottomNavigationAction label="Mandarin" value="Mandarin" icon={<TranslateIcon />} />
      </BottomNavigation>
    </div>
  );
}

export default App;
