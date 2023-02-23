import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../Container/Container';
import style from './navigation.module.css';
import { changeCategory, fetchNavCategories } from '../../store/category/categorySlice';
import { API_URI } from '../../const';
import { useEffect } from 'react';


export const Navigation = () => {

  const { category, activeCategory } = useSelector((state) => state.category);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchNavCategories())
  }, [])

  return (
    <nav className={style.navigation}>
      <Container className={style.container}>
          <ul className={style.list}>
            {category.map((item, index) => 
              <li key={item.title} className={style.item}>
                <button 
                  className={classNames(
                    style.button, 
                    activeCategory === index ? style.button_active : '')}
                  style={{backgroundImage: `url(${API_URI}/${item.image})`}}
                  onClick={() => {
                    dispatch(changeCategory({indexCategory: index}))
                  }}
                >
                  {item.rus}
                </button>
              </li>
            )}
            
          </ul>
      </Container>
    </nav>
  );
};