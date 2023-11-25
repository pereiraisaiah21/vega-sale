import Questions from './Questions'

/**
 *
 * @param {*} param0
 * @returns
 */

const ProductQuestionAds = ({ data }) => {
  console.log('__', data)

  return (
    <div className='product__sidetoside'>
      <Questions data={data?.list} />
      <section className='product__allinfo product__allinfo--products'>
        <h3 className='product__section'>
          {' '}
          Conheça todos detalhes do seu próximo fone{' '}
        </h3>
        <div className='product__'></div>
      </section>
    </div>
  )
}

export default ProductQuestionAds
