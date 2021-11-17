import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable(props) {
  const {rows} = props;

  console.log(rows)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>strikePrice</TableCell>
            <TableCell align="right">expiryDate</TableCell>
            <TableCell align="right">underlying</TableCell>
            <TableCell align="right">identifier</TableCell>
            <TableCell align="right">openInterest</TableCell>
            <TableCell align="right">changeinOpenInterest</TableCell>
            <TableCell align="right">pchangeinOpenInterest</TableCell>
            <TableCell align="right">totalTradedVolume</TableCell>
            <TableCell align="right">impliedVolatility</TableCell>
            <TableCell align="right">lastPrice</TableCell>
            <TableCell align="right">change</TableCell>
            <TableCell align="right">pChange</TableCell>
            <TableCell align="right">totalBuyQuantity</TableCell>
            <TableCell align="right">totalSellQuantity</TableCell>
            <TableCell align="right">bidQty</TableCell>
            <TableCell align="right">bidprice</TableCell>
            <TableCell align="right">askQty</TableCell>
            <TableCell align="right">askPrice</TableCell>
            <TableCell align="right">underlyingValue</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row[0]}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row[0]}
              </TableCell>
              <TableCell align="right">{row[1]}</TableCell>
              <TableCell align="right">{row[2]}</TableCell>
              <TableCell align="right">{row[3]}</TableCell>
              <TableCell align="right">{row[4]}</TableCell>
              <TableCell align="right">{row[5]}</TableCell>
              <TableCell align="right">{row[6]}</TableCell>
              <TableCell align="right">{row[7]}</TableCell>
              <TableCell align="right">{row[8]}</TableCell>
              <TableCell align="right">{row[9]}</TableCell>
              <TableCell align="right">{row[10]}</TableCell>
              <TableCell align="right">{row[11]}</TableCell>
              <TableCell align="right">{row[12]}</TableCell>
              <TableCell align="right">{row[13]}</TableCell>
              <TableCell align="right">{row[14]}</TableCell>
              <TableCell align="right">{row[15]}</TableCell>
              <TableCell align="right">{row[16]}</TableCell>
              <TableCell align="right">{row[17]}</TableCell>
              <TableCell align="right">{row[18]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
