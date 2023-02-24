import { useDispatch } from 'react-redux';
import { addProduct, removeProduct } from '../../store/order/orderSlice';
import style from './count.module.css';

export const Count = ( { count, id }) => {
  const dispatch = useDispatch();

  const plusOne = () => {
    dispatch(addProduct( { id } ))
  }

  const minusOne = () => {
    dispatch(removeProduct( { id } ))
  }

  return (
    <div className={style.count}>
      <button 
        className={style.minus}
        onClick={minusOne}
      >-</button>
      <p className={style.amount}>{count}</p>
      <button 
        className={style.plus}
        onClick={plusOne}
      >+</button>
    </div>
  );
};