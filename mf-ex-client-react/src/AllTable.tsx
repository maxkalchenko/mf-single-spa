import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './App.css';
import { httpGet } from '@maxkalchenko/utils';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme();

function App() {
  const [drivers, setDrivers] = React.useState([]);

  useEffect(() => {
    httpGet('react').then(setDrivers);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <h2>All Users</h2>
      <TableContainer component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align='right'>License</TableCell>
              <TableCell align='right'>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {drivers.map(row => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component='th' scope='row'>
                  {row.driverName}
                </TableCell>
                <TableCell align='right'>{row.licensePlate}</TableCell>
                <TableCell align='right' style={{ color: row.status === 'Available' ? 'green' : 'gray' }}>
                  {row.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}

export default App;
