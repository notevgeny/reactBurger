import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../Container/Container';
import style from './navigation.module.css';
import { changeCategory } from '../../store/category/categorySlice';


export const Navigation = () => {

  const { category, activeCategory } = useSelector((state) => state.category);
  const dispatch = useDispatch()

  return (
    <nav className="navigation">
      <Container className={style.container}>
          <ul className={style.list}>
            {category.map((item, index) => 
              <li key={index} className={style.item}>
                <button 
                  className={classNames(
                    style.button, 
                    activeCategory === index ? style.button_active : '')}
                  style={{backgroundImage: `url(${item.image})`}}
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