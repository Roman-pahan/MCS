import React from "react";
import { render } from "react-dom";
import "./index.css";
import Container from "./Container.js";
import Button from "./Button.js";
import Link from "./Link.js";
import Input from "./Input.js";

function App() {
  return (
    <Container>
      <Input type="text" placeholder="ФИО" name="FIO" />
      <Button type="button" disabled="disabled">
        Регистрация
      </Button>
      <Link href="https://www.google.ru/">Выйти</Link>
    </Container>
  );
}

render(<App />, document.querySelector("#root"));
