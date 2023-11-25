/**
 *
 *
 */

const CartShipping = ({ shippingInfo, setShippingInfo, handleInputChange }) => {
  return (
    <section>
      <div className='checkout__wrap'>
        <h2>Informações de Envio</h2>
        <form className='shipping-form'>
          <div className='form-group'>
            <label htmlFor='fullName'>Nome Completo</label>
            <input
              type='text'
              id='fullName'
              name='fullName'
              value={shippingInfo.fullName}
              onChange={(e) => handleInputChange(e, setShippingInfo)}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='address'>Endereço</label>
            <input
              type='text'
              id='address'
              name='address'
              value={shippingInfo.address}
              onChange={(e) => handleInputChange(e, setShippingInfo)}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='city'>Cidade</label>
            <input
              type='text'
              id='city'
              name='city'
              value={shippingInfo.city}
              onChange={(e) => handleInputChange(e, setShippingInfo)}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='state'>Estado</label>
            <input
              type='text'
              id='state'
              name='state'
              value={shippingInfo.state}
              onChange={(e) => handleInputChange(e, setShippingInfo)}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='zipCode'>CEP</label>
            <input
              type='text'
              id='zipCode'
              name='zipCode'
              value={shippingInfo.zipCode}
              onChange={(e) => handleInputChange(e, setShippingInfo)}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='country'>País</label>
            <input
              type='text'
              id='country'
              name='country'
              value={shippingInfo.country}
              onChange={(e) => handleInputChange(e, setShippingInfo)}
              required
            />
          </div>
        </form>
      </div>
    </section>
  )
}

export default CartShipping
