import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import App2 from './App2';
import App3 from './App3';
import Footer2 from "./Footer2.js";
import Hero2 from './Hero2.js';
import Button from './Button';
import Link2 from './Link2.js';
import GreetUser from './GreetUser.js';
import Navbar3 from './Navbar3.js';
import element12 from './Navbar4';
import Button2 from './Button2.js';
import Button4 from './Distruction.js';
import {render} from "react-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(<App2 />);
const root3 = ReactDOM.createRoot(document.getElementById('root3'));
root3.render(<App3 />);
// const root4 = document.querySelector("#root4");
// render(React.createElement("h1", {}, "Без посредников!"), root4);
/* <App /> - загрузка сторонннего посредника + import App from './App'; */
const element = React.createElement("h1", {
    className: "zag"
  }, "Без посредников!");
  const root4 = document.querySelector("#root4");
  
  render(element, root4); // Элемент + маршрут (реакт-элемент и контейнер)


  const banner = React.createElement("h1", {}, "Отправка с index.js");
  const root5 = document.querySelector("#root5")
  render(banner, root5)

  const paragraph = React.createElement("p", {}, "All tracks are stylized in all caps");
  const app_root = document.querySelector("#app_root")
  render(paragraph, app_root)

  const welcome = React.createElement("h1", {}, "Welcome to Astroworld");
  const react_app = document.querySelector("#react-app")
  render(welcome, react_app)

//   const title = <h1>Hello World</h1>
// const title = React.createElement("h1", {}, "Hello World");
const root7 = document.querySelector("#root7");
render(<h1>Hello World</h1>, root7);

const root8 = document.querySelector("#root8")
render(<p>I saw the tiger, and the tiger saw a man</p>, root8)

// const link = <li id="home">🏠</li>;
// const link = React.createElement("li", {id: "home"}, "🏠");
// const link = <li id="home" className="default">🏠</li>;

const replic = <p className="exotic" tabindex = "2">People don't come to see the tigers, they come to see me.</p>
const tiger = document.querySelector("#tiger")
render(replic, tiger)

const para = <p>Команда A.D.E.D. состоит из {2 + 3} человек.</p>;
const th = document.querySelector("#th")
render(para,th)

{/* <li className="home">🏠</li> */}
// =
// {
//     type: "li",
//     props: {
//       className: "home",
//       children: "🏠"
//     }
//   }

// function getSubtitle() { 
//     // const things = React.createElement("h2", {className: "sub"}, "Things can get a little crazy out here")
//     // const func = document.querySelector("#func")
//     // return render(things, func)
//     return <h2 className='sub'>Things can get a little crazy out here</h2>
// }


// const func = document.querySelector("#func")
// render(getSubtitle(), func)




const aded = [
    "Spacer",
    "Namer",
    "Juice",
    "Cozek",
    "Captek"
  ];
  
  const item = <li className="member">{aded[3]}</li>;
  const thx = document.querySelector("#thx")
  render(item,thx)

  let gimmeFive = () => "five";
    const greet = <em>High {gimmeFive()}!</em>
    const thxs = document.querySelector("#thxs")
    render(greet,thxs)

    function userStatus(login) {
        if (login){
          return <span>Вы залогинены</span>;
        }
        return <a href="/auth">Войти</a>;
      }
    const thxsz = document.querySelector("#thxsz")
    render (userStatus("login"), thxsz)


    function greetUser(user) { 
        return <div>Привет, {user.name}</div>
    }

    const thxszx = document.querySelector("#thxszx")
    render (greetUser({name: "Джо", age: 57}), thxszx)




 


    function showAlerts(alerts) { 
      return <p>Уведомлений: {alerts.length}</p>
    }
    const thxszxr = document.querySelector("#thxszxr")
    render(showAlerts([{id: 1, text: "Оплата получена"},
    {id: 2, text: "Заказ отправлен"}]), thxszxr)


    function greetUser1(user) { 
      return <div>Привет, {user.name} {user.last}!</div>
    }
    const thxszxrt = document.querySelector("#thxszxrt")
    render(greetUser1({name: "Джо", last: "Экзотик"}),thxszxrt)



    const count = 1;
    const element1 = <div tabIndex={count}>Harry Potter</div>; //tabIndex для порядка выделения с помощью таб
    const thxszxrt1 = document.querySelector("#thxszxrt1")
    render(element1,thxszxrt1 )

    // <li id="item-1"></li>
    // <li id="item-2"></li>
    // <li id="item-3"></li>

    // <li id={"item-" + count}></li>
    // <li id={`item-${count}`}></li>

    function payNow(user) {
      let name = "disabled";
      if (user.login) {
        if(user.id === 1){
          name = "active";
        }
      }
      return <button className={name}>Оплатить</button>
    }
    const thxszxrtc = document.querySelector("#thxszxrtc")
    render(payNow({id: 2, login: true}),thxszxrtc )


    // function paymentMethod(method) {
    // let option = "";
    // if(method==="visa"){
    //   return option === "option-visa"
    // }else if (method==="qiwi"){
    //   return option === "option-qiwi"
    // }

    //   return <li className={`payment-method ${option}`}></li>
    // }

    function paymentMethod(method) {
      return <li className={"payment-method option-" + method}>{method}</li>
    }

    const thxszxrtcr = document.querySelector("#thxszxrtcr")
    render(paymentMethod(),thxszxrtcr )

    // const list = <ul>
    //     <li>One</li>
    //     <li>Two</li>
    //     <li>Three</li>
    //   </ul>;

    function paymentMethods() {
      return (React.createElement("select",{className: "payment-methods"},
        React.createElement("option", {className: "payment-option"}, "Visa"),
        React.createElement("option", {className: "payment-option"}, "Qiwi"),
        React.createElement("option", {className: "payment-option"}, "Bitcoin")
      ))
    }

    // function paymentMethods() {
    //   return (<select className="payment-methods">
    //     <option className="payment-option">Visa</option>
    //     <option className= "payment-option">Qiwi</option>
    //     <option className= "payment-option">Bitcoin</option>
    //   </select>)
    // }
    const thxszxrtcre = document.querySelector("#thxszxrtcre")
    render(paymentMethods(),thxszxrtcre )




    function dropdownMenu() {
      return (
        <ul id='user-menu' className='dropdown'>
          <li>Профиль</li>
          <li>Заказы</li>
          <li className='logout'>Выйти</li>
        </ul>
      )
    }
    const thxszxrtcreq = document.querySelector("#thxszxrtcreq")
    render(dropdownMenu(),thxszxrtcreq )

    // const image = <img src="image.png" />
    // const image1 = document.querySelector("#image1")
    // render(image, image1)

    //В целях ихбежания большого количества дивов
    // function deliveryPopup() {
    //   return (
    //     <>
    //       <h1>Доставка продуктов</h1>
    //       <h2>Оформить заказ</h2>
    //     </>
    //   );
    // }

    function showAvatar(url) { 
      return (<img src={url} />)
    }

    const image2 = document.querySelector("#image2")
    render(showAvatar("image.png"), image2)

    function siteFooter() { 
      return(
        <>
      <h3>Официальный магазин Джо Экзотика</h3>
      <ul>
        <li>Написать Джо</li>
        <li>Условия доставки</li>
        <li>Поддержка</li>
      </ul>
      <p>ООО «Джо Экзотик»</p>
      </>
      )
    } 

    const footer = document.querySelector("#footer")
    render(siteFooter(), footer)

    function Footer() {
      return (
        <div>
          <h3>Moscow Coding School</h3>
          <p>Москва, ул. Тверская 7</p>
        </div>
      );
    }
    
    const root12 = document.querySelector("#root12");
    render(<Footer></Footer>, root12); //можно рендерить таким образом - пишется с больщойо буквы


    function Hero(){
      return(<>
      <h3>«Добро пожаловать на ранчо Джо Экзотика!»</h3>
      <p>«Вы должны быть старше 18, чтобы смотреть этот сайт»</p>
      </>)
    }
    render(<Hero></Hero>, document.querySelector("#root13"));

    // Главная разница между реакт-компонентом и реакт-элементом в том,
    //  что реакт-компонент — это функция, возвращающая реакт-элемент.

    // Реакт-приложение состоит из набора реакт-компонентов:
    //     <App>
    //   <Navbar>
    //     <Logo />
    //     <Title>Moscow Coding School</Title>
    //   </Navbar>
    //   <Screens>
    //     {/*...*/}
    //   </Screens>
    //   <Footer>
    //   </Footer>
    // </App>

    // Компонент <Footer> превратится в React.createElement(Footer, {})


function Navbar() { 
  return ( 
    <> 
      <h3>Магазин</h3> 
      <p>Мерч и книги</p> 
    </> 
  ); 
} 

const root14 = document.querySelector("#root14");
render(React.createElement(Navbar, {}), root14)
//введите свой код здесь

function App5() {
  return (
    <>
      <Footer2 /> 
      <Footer2 /> 
      <Footer2 /> 
    </>
  );
}

const root15 = document.querySelector("#root15"); 

render(<App5 />, root15);

const hero2 = document.querySelector("#hero2")
render(<Hero2 />,hero2)


function App6(){
  return(
    <>
      <Button  size="small"/>
      <Button  size="large"/>
      <Link2/>
    </>
  )
}

const root16 = document.querySelector("#root16")
render(<App6 />, root16)



function App7(){
  return(
    <>
      <GreetUser user="Дайнерис" />
    </>
  )
}

const root17 = document.querySelector("#root17")
render(<App7 />, root17)




let alerts = [{ 
  id: 1,
  text: "Оплата успешна"
}, {
  id: 2,
  text: "Заказ отправлен"
}];

const user = { 
  first_name: "Павел",
  last_name: "Топский"
};


const root19 = document.querySelector("#root19");

render(<Navbar3 alerts={alerts} user={user} />, root19);

const root20 = document.querySelector("#root20");
render(element12, root20);

const root22 = document.querySelector("#root22"); 
render(<Button2>Login</Button2>, root22);



const root25 = document.querySelector("#root25"); 
render(<Button4 className="primary">Включить</Button4>, root25);


