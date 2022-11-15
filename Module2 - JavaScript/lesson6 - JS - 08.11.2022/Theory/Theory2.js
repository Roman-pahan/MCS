// let address = undefined
// if (dao.members && dao.members.founder && dao.members.founder.address)
// {
//   address = dao.members.founder.address
// }
const dao = {
    members: {
      founder: {
        address: "0xaf45b3"
      }
    },
    treasury: null
  }
  
  console.log(dao.members?.founder?.address) // "0xaf45b3"
  console.log(dao.treasury?.value) // undefined
  console.log(dao.proposals?.template) // undefined
  console.log(dao.members?.staff?.count) // undefined
//   Опциональная цепочка позволяет читать глубокие свойства объектов без риска получить ошибку, если одно из свойств будет отсутствовать



const getBalance = wallet => {

    console.log(wallet.ethereum?.balance)
}

// Примеры использования
getBalance({ethereum: {balance: "0.2 ETH"}}) // "0.2 ETH"
getBalance({ethereum: null}) // undefined
getBalance({}) // undefined


const getNonce = tx => {
    // if (tx.receipt && tx.receipt.details && tx.receipt.details.nonce) {
    //   return tx.receipt.details.nonce
    // }
    // return undefined

    return console.log(tx.receipt?.details?.nonce)

  }
  
  // Примеры использования
  getNonce({hash: 0x54b7ad, success: false}) // undefined
  getNonce({hash: 0xa8fe4b, success: true, receipt: {details: {nonce: 12}}}) // 12


  const data = {
    gasFees: [20, 45, 67, 33]
  }
  

    const firstValue = data.gasFees?.[0] //firstValue = data.gasFees[0]
    console.log(firstValue)


  const tx3 ={
    receipt:{
        calls: [20, 45, 67, 33]
    }
}
  const getFirstCall = tx3 => {
    return tx3.receipt?.calls?.[3]
  }

  console.log(getFirstCall(tx3))

  

//   const upperCasedStatus = tx.status?.toUpperCase()
//   console.log(upperCasedStatus)

// }

