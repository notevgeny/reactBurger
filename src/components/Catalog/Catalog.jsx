import Container from "../Container/Container";
import { Order } from "../Order/Order";

import style from './catalog.module.css';
import { CatalogProduct } from "./CatalogProduct/CatalogProduct";

export const Catalog = () => {

  const goodsList = [
    { title: 'Мясная бомба' },
    { title: 'Супер сырный' },
    { title: 'Сытный' },
    { title: 'Итальянский' },
    { title: 'Вечная классика' },
    { title: 'Тяжелый удар' },
  ];

  return (
    <section className={style.catalog}>
      <Container className={style.container}>
        <Order/>
        <div className={style.wrapper}>
          <h2 className={style.title}>Бургеры</h2>

          <div className={style.wrap_list}>
            <ul className={style.list}>
              
                {
                  goodsList.map((good, index) => (
                    <li key={index} className={style.item}>
                      <CatalogProduct title={good.title}/>
                    </li>
                  ))
                }
              
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
