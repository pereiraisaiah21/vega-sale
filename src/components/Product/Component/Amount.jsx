import { useState } from 'react'
import { BsArrowDownShort } from 'react-icons/bs'

/**
 *
 * @returns
 */

const Amount = ({ amount, skus }) => {
  const [quantity, setQuantity] = useState(0)

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10)
    const limitedQuantity = Math.min(Math.max(newQuantity, 0), 100)

    setQuantity(parseInt(event.target.value, 10))
  }
  return (
    <div className='product__amount'>
      <span className='product__amount__title'>Quantidade</span>
      <input
        className='product__amount__select'
        type='number'
        value={quantity}
        onChange={handleQuantityChange}
        min='0'
        max={amount}
      />
      <button className='product__skus__button'>
        <a href='#description'>
          Ver detalhes <BsArrowDownShort className='product__skus__icon' />
        </a>
      </button>
    </div>
  )
}

export default Amount
