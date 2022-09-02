import type { FC } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import type { ProductResult } from './store/Product.services'
import Button from 'components/Button'
import {
  ActionContainer, DescriptionText, DescriptionTitle, HalfStarContainer, ImageContainer, MainContainer,
  NotFoundContainer, PriceText, ProductContainer, ProductHead, ProductWapper, ShareIconWrapper, StarsContainer,
  TitleText,
} from './Product.style'
import { ReactComponent as ShareIcon } from 'assets/images/svg/share.svg'
import { ReactComponent as CartIcon } from 'assets/images/svg/cart.svg'
import { ReactComponent as StarIcon } from 'assets/images/svg/star.svg'
import { ReactComponent as HalfStarIcon } from 'assets/images/svg/star-half.svg'


interface ProductPageProps {
  product: ProductResult;
}

const ProductPage: FC<ProductPageProps> = ({ product }) => {
  if (product == '') {
    return (
      <NotFoundContainer>
        <p>Prouct Not Found</p>
      </NotFoundContainer>
    )
  }


  return (
    <>
      <Head>
        <title>{product?.title}</title>
        <meta name='description' content={product?.description} />
      </Head>
      <MainContainer>

        {!!product &&
          <ProductWapper>

            <ImageContainer>
              <Image
                priority={true}
                layout='fill'
                alt={product.title}
                src={product.image}
              />
            </ImageContainer>

            <ProductContainer>
              <ProductHead>
                <TitleText>{product.title}</TitleText>

                <StarsContainer>
                  {Array(5).fill('').map((item, index) => (
                    <span key={index} className={Math.floor(product.rating.rate) >= index + 1 ? '-active' : ''}>
                      {
                        Math.floor(product.rating.rate) === index && product.rating.rate !== index ?
                          <HalfStarContainer className={Math.floor(product.rating.rate) >= index ? '-active' : ''}>
                            <HalfStarIcon width={24} height={24} />
                            <StarIcon className='-deactive' width={24} height={24} />
                          </HalfStarContainer>
                          :
                          <StarIcon width={24} height={24} />
                      }
                    </span>
                  ))}
                </StarsContainer>
              </ProductHead>

              <PriceText>${product.price}</PriceText>

              <div>
                <DescriptionTitle>description</DescriptionTitle>
                <DescriptionText>{product.description}</DescriptionText>
              </div>

              <ActionContainer>
                <Button
                  size='large'
                  startIcon={<CartIcon />}
                >
                  add to card
                </Button>

                <ShareIconWrapper>
                  <ShareIcon />
                </ShareIconWrapper>
              </ActionContainer>
            </ProductContainer>
          </ProductWapper>
        }
      </MainContainer>
    </>
  )
}

export default ProductPage