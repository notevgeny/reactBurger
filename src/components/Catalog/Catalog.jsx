import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/product/productSlice";
import Container from "../Container/Container";
import { Order } from "../Order/Order";

import style from './catalog.module.css';
import { CatalogProduct } from "./CatalogProduct/CatalogProduct";

export const Catalog = () => {

const { products } = useSelector(state => state.product);
const dispatch = useDispatch();
const { category, activeCategory } = useSelector(state => state.category)


useEffect(() => {
  if (category.length){
    dispatch(fetchProducts(category[activeCategory].title))
  }
}, [category, activeCategory])

  return (
    <section className={style.catalog}>
      <Container className={style.container}>
        <Order/>
        <div className={style.wrapper}>
          <h2 className={style.title}>{category[activeCategory]?.rus}</h2>

          <div className={style.wrap_list}>
            <ul className={style.list}>
              
                {
                  products.length ?
                  products.map(item => (
                    <li key={item.id} className={style.item}>
                      <CatalogProduct item={item}/>
                    </li>
                  ))
                  : 'К сожалению товаров данной категории нет'
                }
              
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
