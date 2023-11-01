import React from 'react';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

interface ICryptoBlock {
  classes: {
    cryptoInputBox: string;
    currencyInput:string;
    currencyType: string;
    label: string;
  };
}

const classes = {
  cryptoInputBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '20px',
    marginBottom: '20px',
  },
  currencyInput: {
    minWidth: 'calc(70% - 10px)', // Добавлен пробел в выражении
    marginRight: '10px',
  },
  currencyType: {
    minWidth: '30%',
  },
  label: {
    marginTop: '-7px',
  },
};



const ConverterBlock: React.FC<ICryptoBlock> = ({ classes }) => {
  return (
    <>
      <Paper className={classes.cryptoInputBox}>
        <FormControl className={classes.currencyInput} fullWidth>
          <TextField label="Сумма" />
        </FormControl>
        <FormControl className={classes.currencyType}>
          <InputLabel className={classes.label}>Валюта</InputLabel>
          <Select value={10}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Paper>
      <Paper className={classes.cryptoInputBox}>
        <FormControl className={classes.currencyInput} fullWidth>
          <TextField label="Сумма" />
        </FormControl>
        <FormControl className={classes.currencyType}>
          <InputLabel className={classes.label}>Валюта</InputLabel>
          <Select value={10}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Paper>
    </>
  );
};

export default ConverterBlock;