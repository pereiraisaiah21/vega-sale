/**
 *
 *
 */

const CartPayment = ({ paymentInfo, setPaymentInfo, handleInputChange }) => {
  return (
    <section>
      <div className='checkout__wrap'>
        <p>Informações de Pagamento</p>
        <form className='payment-form'>
          <div className='form-group'>
            <label htmlFor='cardNumber'>Número do Cartão</label>
            <input
              type='text'
              id='cardNumber'
              name='cardNumber'
              value={paymentInfo.cardNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='cardHolder'>Titular do Cartão</label>
            <input
              type='text'
              id='cardHolder'
              name='cardHolder'
              value={paymentInfo.cardHolder}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='expirationDate'>Data de Expiração</label>
            <input
              type='text'
              id='expirationDate'
              name='expirationDate'
              value={paymentInfo.expirationDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='cvv'>CVV</label>
            <input
              type='text'
              id='cvv'
              name='cvv'
              value={paymentInfo.cvv}
              onChange={handleInputChange}
              required
            />
          </div>
        </form>
      </div>
    </section>
  )
}

export default CartPayment
