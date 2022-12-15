import React, {useState, useEffect} from "react"
import ReactDOM from 'react-dom/client';
import './index.css';
import Loader from './Loader.js';


// getPromise()
// .then(result => {
//   console.log(result)
// })
// .catch(error => {
//   console.log(error)
// })


const queue = time => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true)
      }, time)
    })
  }
  
  console.log(queue(500).then(() => {
    console.log("Ожидание завершено")
  }))

fetch("https://api.kanye.rest/")
.then(response => response.json())
.then(data => {
  console.log(data)
})


function getRate() {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then(response => response.json())
    .then(data => {
      console.log(data.bpi.USD.rate)
    })
}

getRate()


// function getFilms() {
//     fetch("https://ghibliapi.herokuapp.com/films")
//     .then(response => response.json())
//     .then(data => {
//       console.log(data.map(film => film.original_title))
//     })
//   }

// getFilms()

function App() {
    const [quote, setQuote] = useState()

    useEffect(() => {
      fetch("https://api.kanye.rest/")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setQuote(data)
      })
    }, [])
  
    return null
  }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

function Kanye() {
    const [quote, setQuote] = useState()
    useEffect(() => {
        fetch("https://api.kanye.rest/")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setQuote(data)
        })
      }, [])
  
    return null
  }
  
  const root1 = ReactDOM.createRoot(document.getElementById('root1'));
  root1.render(
      <Kanye />)


      
      function Chuck() {
        const [joke, setJoke] = useState()
      
        useEffect(() => {
          fetch("https://api.chucknorris.io/jokes/random")
          .then(response => response.json())
          .then(data => setJoke(data.value))
        }, [])
        console.log(joke)
      }
      const root2 = ReactDOM.createRoot(document.getElementById('root2'));
      root2.render(
          <Chuck />)


        //   function App1() {
        //     const [films, setFilms] = useState()
          
        //     useEffect(() => {
        //       fetch("https://ghibliapi.herokuapp.com/films")
        //       .then(response => response.json())
        //       .then(data => setFilms(data)) 
        //     }, [])

        //     if (!films) {
        //         return null
        //       }
          
        //     return <h1>Студия Ghibli сняла {films.length} фильмов</h1>
        //   }

        //   const root3 = ReactDOM.createRoot(document.getElementById('root3'));
        //   root3.render(
        //       < App1 />)


    // function Ghibli() {
    // const [species, setSpecies] = useState()
    
    // useEffect(() => {
    //     fetch("https://ghibliapi.herokuapp.com/species")
    //     .then(response => response.json())
    //     .then(data => {
    //     console.log(data)
    //     setSpecies(data)
    //     })
    // }, [])
    
    // if (!species) {
    //     return null
    // }
    
    // return <>
    //     <h1>{species.length} видов существ:</h1>
    //     <ul>
    //     {species.map(kind => <li key={kind.id}>{kind.name}</li>)}
    //     </ul>
    // </> 
    // }
    

    // const root4 = ReactDOM.createRoot(document.getElementById('root4'));
    // root4.render(
    //     < Ghibli />)


    function Card() {
        const [card, setCard] = useState()
      
        useEffect(() => {
          fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
          .then(response => response.json())
          .then(data => {
            console.log("Card")
            console.log(data)
            setCard(data.cards[0])
          })
        },[])

        if (!card) {
        return null
        }
        
        return <>
          <p>Карта: {card.value} of {card.suit}</p>
        </> 
      }

    const root3 = ReactDOM.createRoot(document.getElementById('root3'));
    root3.render(< Card />)

    function Cards() {
        const [cards, setCards] = useState()
      
        useEffect(() => {
          fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=6")
          .then(response => response.json())
          .then(data => {
            setCards(data.cards)
          })
        }, [])
        
        return <>
          <h1>Карты: </h1>
          <ul>
            {cards&&cards.map(card => <li key={card.code}>{card.value} of {card.suit}</li>)}
          </ul>
        </> 
      }

      const root4 = ReactDOM.createRoot(document.getElementById('root4'));
      root4.render(< Cards />)
    //   function Request() {
    //     const [stuff, setStuff] = useState()

    //     useEffect(() => {
    //       fetch("https://some.api/endpoint.json")
    //       .then(response => response.json())
    //       .then(data => {
    //         if (data && !data.error) {
    //           setStuff(data)
    //         }
    //       })
    //     }, [])
    // }



    // function Request() {
    //     const [stuff, setStuff] = useState()

    //     useEffect(() => {
    //         fetch("https://some.api/endpoint.json")
    //         .then(response => response.json())
    //         .then(data => {
    //           console.log(data)
    //         })
    //         .catch(error => {
    //           console.error(error)
    //         })
    //     }, [])
    // }
        // const root5 = ReactDOM.createRoot(document.getElementById('root5'));
        // root5.render(< Request />)


function Kanye1() {
    const [loader, setLoader] = useState(true)
    
    useEffect(() => {
        setLoader(true)
        fetch("https://api.kanye.rest/")
        .then(response => response.json())
        .then(data => {
            setLoader(false)
            console.log(data)
            console.log(loader)
          })
          .catch(error => {
            setLoader(false)
            console.log(loader)
            console.error(error)
          })
        }, [])
        console.log(loader)
    
    return null
    }

const root5 = ReactDOM.createRoot(document.getElementById('root5'));
root5.render(< Kanye1 />)


function Kanye2() {
    const [loader, setLoader] = useState(true)
  
    useEffect(() => {
      fetch("https://api.kanye.rest")
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error))
      .finally(() => setLoader(false))
    }, [])

    if (loader) {
        return <p>Подкупаем стражу...</p>
      }
  
    return null
  }


  const root6 = ReactDOM.createRoot(document.getElementById('root6'));
root6.render(< Kanye2 />)

function Cards1() {
    const [cards, setCards] = useState()
    const [loader, setLoader] = useState(true)
  
    useEffect(() => {
      fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=3")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if (data) {
          setCards(data.cards)
        }
      })
      .catch(error => console.error(error))
      .finally(() => {
        setLoader(false)
      })
    }, [])

    if (loader) {
        return <Loader />
      }
    
    return <>
      <h1>Карты: </h1>
      <ul>
        {cards && cards.map(card => <li key={card.code}>{card.value} of {card.suit}</li>)}
      </ul>
    </> 
  }

  const root7 = ReactDOM.createRoot(document.getElementById('root7'));
  root7.render(< Cards1 />)


  function Cards2() {
    const [cards, setCards] = useState()
    const [loader, setLoader] = useState(true)
  
    useEffect(() => {
      fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=8")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if (data) {
          setCards(data.cards)
        }
      })
      .catch(error => console.error(error))
      .finally(() => {
        setLoader(false)
      })
    }, [])


    // if (loader) { //можно так
    //     return (
    //     <>
    //         <h1>Карты: </h1> 
    //         <Loader />
    //     </>)
    //   }
    
    return <>
      <h1>Карты: </h1>
      {loader && <Loader />}
      <ul>
        {cards && cards.map(card => <li key={card.code}>{card.value} of {card.suit}</li>)}
      </ul>
    </> 
  }

  const root8 = ReactDOM.createRoot(document.getElementById('root8'));
  root8.render(< Cards2 />)


  function App2() {
    const [cards, setCards] = useState()
    const [loader, setLoader] = useState(false)
    
  
    function handleButtonClick() {
      setLoader(true)
      fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=8")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if (data) {
          setCards(data.cards)
        }
      })
      .catch(error => console.error(error))
      .finally(() => {
        setLoader(false)
      })
    }

  
    return (
    <>
      <button onClick={handleButtonClick} disabled={loader}>Загрузить данные</button>
      <h1>Карты: </h1>
      {loader && <Loader />}
      <ul>
        {cards && cards.map(card => <li key={card.code}>{card.value} of {card.suit}</li>)}
      </ul>
    </> )
  }

  const root9 = ReactDOM.createRoot(document.getElementById('root9'));
  root9.render(< App2 />)


  function Crypto() {
    const [currency, setCurrency] = useState("")
    const [loader, setLoader] = useState(false)
    const [price,setPrice] =useState("")
  
    useEffect(() => {
      if(currency){
      
      setLoader(true)
      
      fetch(`https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`)
      .then(response => response.json())
      .then(data => {
        if (data) {
          setPrice(data.bpi[currency].rate)
        }
      })
      .catch(error => console.error(error))
      .finally(() => {
        setLoader(false)
      })
    }
    }, [currency])
  
    function handleCurrencyChange(e) {
      setCurrency(e.target.value)
    }
  
    return <>
    <h2>Курс биткоина</h2>
    <select onChange={handleCurrencyChange}  disabled={loader}>
      <option value="">Выберите валюту</option>
      <option value="USD">Доллар</option>
      <option value="EUR">Евро</option>
      <option value="RUB">Рубль</option>
    </select>
    <h3>{price}</h3>
  </> 
  }

  const root10 = ReactDOM.createRoot(document.getElementById('root10'));
  root10.render(< Crypto />)


  // function Ghibli() {
  //   const [films, setFilms] = useState()
    
  //   useEffect(() => {
  //     (async () => {
  //       const response = await fetch("https://ghibliapi.herokuapp.com/films")
  //       const data = await response.json()
  //       setFilms(data)
  //     })() 
  //   }, [])
  
  //   if (!films) {
  //     return null
  //   }
  
  //   return <>
  //     <h1>{films.length} фильм:</h1>
  //     <ul>
  //       {films.map(film => <li key="film.id">{film.title}</li>)}
  //     </ul>
  //   </>
  // }


  // function App() {
  //   const [films, setFilms] = useState()
  //   const [loader, setLoader] = useState(true)
  
  //   useEffect(() => {
  //     (async () => {
  //       try {
  //         const response = await fetch("https://ghibliapi.herokuapp.com/films")
  //         const data = await response.json()
  //         setFilms(data)
  //       } catch (error) {
  //         console.error(error)
  //       } finally {
  //         setLoader(false)
  //       }
  //     })()
  //   }, [])
  
  //   return null
  // }


  // function Ghibli() {
  //   const [films, setFilms] = useState()
  //   const [loader, setLoader] = useState(false)
  
  //   async function handleButtonClick() {
  //     setLoader(true)
  //     try {
  //       const response = await fetch("https://ghibliapi.herokuapp.com/films")
  //       const data = await response.json()
  //       if (data) {
  //         setFilms(data)
  //       }
  //     } catch (error) {
  //       console.error(error)
  //     } finally {
  //       setLoader(false)
  //     }
  //   }
  
  //   return (<>
  //     <button onClick={handleButtonClick} disabled={loader}>Загрузить список</button>
  //     <h1>Фильмы:</h1>
  //     <ul>
  //       {films && films.map(film => <li key="film.id">{film.title}</li>)}
  //     </ul>
  //   </>)
  // }
  