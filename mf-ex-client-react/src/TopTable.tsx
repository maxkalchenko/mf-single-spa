import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import './App.css';
import { httpGet } from '@maxkalchenko/utils';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'; // makeStyles

const theme = createMuiTheme();
// @emotion/react @emotion/styled @material-ui/core @mui/icons-material @mui/material

function App() {
  const [drivers, setDrivers] = React.useState([]);

  useEffect(() => {
    httpGet('taxi/best').then(setDrivers);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <h2>Top Drivers</h2>
      <TableContainer component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align='right'>License plate</TableCell>
              <TableCell align='right'>Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {drivers.map(row => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component='th' scope='row'>
                  {row.driverName}
                </TableCell>
                <TableCell align='right'>{row.licensePlate}</TableCell>
                <TableCell align='right'>
                  <Rating name='half-rating-read' defaultValue={row.score} precision={0.1} readOnly />
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
