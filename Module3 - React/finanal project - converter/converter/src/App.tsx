import React from 'react';
import { useEffect} from 'react'
import axios from 'axios'

import { Container } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';


import {TCoin} from './types'
import {CryptoTable,ConverterBlock} from './components'


const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Main = styled(Container)(({ theme }) => ({
  padding: theme.spacing(10)
}));




function App() {
  // const [allCoins, setAllCoins] = React.useState<TCoin[]>([]);

  const items: TCoin[]=[];

  // useEffect(() => {
  //   axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=20&tsym=USD')
  //     .then(({ data }) => {
  //       const coins: TCoin[] = data.Data.map((coin: any) => {
  //         if (coin.CoinInfo && coin.CoinInfo.ImageUrl && coin.RAW && coin.RAW.USD) {
  //           const obj: TCoin = {
  //             name: coin.CoinInfo.Name,
  //             fullName: coin.CoinInfo.FullName,
  //             imageURL: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
  //             price: coin.RAW.USD.PRICE.toFixed(2),
  //             volume24Hour: parseInt(coin.RAW.USD.VOLUME24HOUR)
  //           };
  //           return obj;
  //         } else {
  //           return {};
  //         }
  //       });

  //       setAllCoins(coins);
  //     });
  // }, []);


  console.log(allCoins)

  return (
    <Main  maxWidth="lg">
    <Grid container spacing={2}>
      <Grid item xs={8}>
          <Item  elevation={2}>
            <CryptoTable classes={classes}/>
            {/* items={allCoins} */}
          </Item >
      </Grid>
      <Grid   item xs={4}>
          <Item   elevation={2}>
            <ConverterBlock classes={classes}/>
          </Item >
      </Grid>
    </Grid>
    </Main>
  );
}

export default App;
