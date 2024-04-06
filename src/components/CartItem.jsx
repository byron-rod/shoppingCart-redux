import React from 'react'
import { ChevronUp, ChevronDown } from '../icons';
import { useDispatch } from 'react-redux';
import { removeItem, increaseItem, decreaseItem } from '../features/cart/cartSlice';

function CartItem({ id, title, price, amount, img}) {
  const dispatch = useDispatch();
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        <button className='remove-btn' onClick={()=>{
          dispatch(removeItem(id))
        }}>remove</button>
      </div>
      <div>
        <button className='amount-btn' onClick={() =>{
          dispatch(increaseItem({id}))
        }}>
          <ChevronUp />
        </button>
        <p className='amount'>{amount}</p>
        <button className='amount-btn' onClick={() =>{
          if (amount === 1) {
            return dispatch(removeItem(id))
          }
          dispatch(decreaseItem({id}))
        }}>
          <ChevronDown />
        </button>
      </div>
    </article>
  )
}

export default CartItem