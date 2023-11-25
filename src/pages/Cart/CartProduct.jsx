import { BsTrash } from 'react-icons/bs'

/**
 *
 *
 */

const CartProduct = ({ cartItems, setCartItems, total, totalPrice }) => {
  const handleRemoveQuantity = (item) => {
    const updatedCart = cartItems.map((cartItem) => {
      if (cartItem.id === item.id && cartItem.quantity > 0) {
        return { ...cartItem, quantity: cartItem.quantity - 1 }
      }
      return cartItem
    })
    setCartItems(updatedCart)
  }

  const handleAddQuantity = (item) => {
    const updatedCart = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 }
      }
      return cartItem
    })
    setCartItems(updatedCart)
  }

  const handleRemoveItem = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id)
    setCartItems(updatedCart)
  }

  return (
    <section>
      <div className='checkout__wrap'>
        <p>Seus produtos</p>
        <ul className='checkout__list'>
          {cartItems.map((item) => (
            <li className='checkout__item' key={item.id}>
              <img
                className='checkout__item-image'
                src={item.image}
                alt={item.name}
              />
              <div className='checkout__item-details'>
                <h3 className='checkout__item-name'>
                  {item.name}
                  <span className='checkout__item-price'>${item.price}</span>
                </h3>
                <div className='checkout__item-quantity'>
                  <button
                    onClick={() => handleRemoveQuantity(item)}
                    className='checkout__quantity--less'
                  >
                    -
                  </button>
                  <input
                    type='number'
                    value={item.quantity}
                    className='checkout__amount'
                    onChange={(e) => {
                      if (e.target.value >= 0) {
                        const updatedCart = cartItems.map((cartItem) => {
                          if (cartItem.id === item.id) {
                            return {
                              ...cartItem,
                              quantity: parseInt(e.target.value)
                            }
                          }
                          return cartItem
                        })
                        setCartItems(updatedCart)
                      }
                    }}
                  />
                  <button
                    onClick={() => handleAddQuantity(item)}
                    className='checkout__quantity--add'
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleRemoveItem(item)}
                  className='checkout__quantity--remove'
                >
                  <BsTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className='checkout__total'>
        <div className='checkout__wrap'>
          Total Items: {total} | R$ {totalPrice}
        </div>
      </div>
    </section>
  )
}

export default CartProduct
