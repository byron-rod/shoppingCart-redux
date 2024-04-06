import React from 'react'
import { clearCart } from '../features/cart/cartSlice'
import { closeModal } from '../features/modal/modalSlice'
import { useDispatch } from 'react-redux'



function Modal() {
  const dispatch = useDispatch()
  return (
    <aside className='modal-container'>
        <div className='modal'>
            <h4 className='modal-text'>Remove all items from your shopping cart?</h4>
            <div className='btn-container'>
                <button className='btn-modal cancel-btn' onClick={() => {
                  dispatch(clearCart())
                  dispatch(closeModal())
                }}>Confirm</button>
                <button className='btn clear-btn' onClick={() => {
                  dispatch(closeModal())
                }}>Cancel</button>
            </div>
        </div>
    </aside>
  )
}

export default Modal