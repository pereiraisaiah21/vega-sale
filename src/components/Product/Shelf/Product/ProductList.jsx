import ProductDetails from './ProductDetails'
import ProductImage from './ProductImage'

/**
 *
 * @param {*} param0
 * @returns
 */

const ProductList = ({ product }) => {
  return (
    <div className='product__item product__item--simple'>
      <ProductImage image={product.image} alt={product.name} />
      <ProductDetails
        price={product.price}
        name={product.name}
        description={product.description}
      />
    </div>
  )
}

export default ProductList
