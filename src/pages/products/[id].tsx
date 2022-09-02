import { GetServerSideProps, NextPage } from 'next'
import { ProductResult, productsApi } from 'domains/Product/store/Product.services'
import ProductPage from 'domains/Product'
import { store } from 'store'

interface ProductsProps {
  product: ProductResult
}


const Products: NextPage<ProductsProps> = ({ product }) => {
  return (
    <ProductPage product={product}></ProductPage>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query

  const { data: product } = await store.dispatch(productsApi.endpoints.getProductById.initiate({ id: Number(id || 0) }))

  return {
    props: {
      product,
    }
  }
}

export default Products