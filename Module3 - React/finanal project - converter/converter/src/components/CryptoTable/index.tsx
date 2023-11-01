import React from 'react'
import {observer,inject} from "mobx-react"
import CurrenciesStore from '../../stores/currenciesStore'

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import Avatar from '@mui/material/Avatar';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {TCoin} from '../../types'


styled(Table)(({ theme }) => ({
  minWidth: '650px',
}));

styled(Avatar)(({ theme }) => ({
  height: '18px',
  width: '18px',
  borderRadius: 30,
}));



type ICryptoTable = {
  classes: {
    tableLeft: string;
    currencyIcon: string;
  };

  currenciesStore?: CurrenciesStore;
}


const CryptoTable = () => inject('CurrenciesStore')(observer(({classes, currenciesStore}: ICryptoTable) => {
  const items: TCoin[]=[]
  
  return(
    <TableContainer component={Paper}>
    <Table className={classes.tableLeft} sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell align="left">FullName</TableCell>
          <TableCell align="left">Name</TableCell>
          <TableCell align="left">Price</TableCell>
          <TableCell align="left">Volume24Hour</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {!items ? "Loading..." : items.map((coin, index) => {
        if (index < 7 || index >= 8) {
          return (
          <TableRow key={index}>
            <TableCell align="left"><Avatar className={classes.currencyIcon} src={coin.imageURL} alt="Coin icon" /></TableCell>
            <TableCell align="left">{coin.name}</TableCell>
            <TableCell align="left">{coin.fullName}</TableCell>
            <TableCell align="left">${coin.price}</TableCell>
            <TableCell align="left">${coin.volume24Hour}</TableCell>
            </TableRow>
    );
  } else {
    return null; // Пропускаем восьмой элемент
  }
})}
      </TableBody>
    </Table>
  </TableContainer>
  )
}))

export default CryptoTable;