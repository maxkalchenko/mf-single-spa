import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AllTableApp from './AllTable';
import TopTableApp from './TopTable';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Router>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
            <Tab label='All drivers' {...a11yProps(0)} component={Link} to={'/react/'} />
            <Tab label='Top drivers' {...a11yProps(1)} component={Link} to={'/react/top'} />
          </Tabs>
        </Box>

        <Routes>
          <Route path='/react' Component={AllTableApp} />
          <Route path='/react/top' Component={TopTableApp} />
        </Routes>
      </Box>
    </Router>
  );
}
