import React, { useState, useEffect } from "react";
import Item from "./Item.js";
import styles from './Item.module.scss'

export default function Shop() {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://learn.guidedao.xyz/api/student/products"
        );
        const data = await response.json();
        console.log(data[0][0]);
        setItems(data[0][0]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoader(false);
      }
    })();
  }, []);

  if (!items) {
    return null;
  }


  return (
    <>
    {loader && <h3>Идет загрузка товаров. Подождите....</h3>}
      <div>
        <ul className={styles.main}>
          <li className={styles.component}>
            {items &&
              items.map((item) => (
                <div key={item.id}>
                  <Item info={item} />
                </div>
              ))}
          </li>
        </ul>
      </div>
    </>
  )
}

