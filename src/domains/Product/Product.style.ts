import styled from '@emotion/styled'

export const MainContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`

export const NotFound = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.pallete.primary.darkest};
  font-weight: 700;
  margin: 0 auto;
`

export const NotFoundContainer = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.pallete.primary.darkest};
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const ProductWapper = styled.div`
  display: flex;
  flex: 1;

  @media only screen and (min-width: 1200px) {
    border-radius: 32px;
    box-shadow: 0px 15px 20px 0px ${({ theme }) => theme.pallete.gray.main};
  }
`

export const ProductContainer = styled.div`
  flex: 3;
  padding: 40px;
`

export const ImageContainer = styled.div`
  flex: 1;
  padding: 16px;
  background: ${({ theme }) => theme.pallete.white};
  background: linear-gradient(0deg, #41c7ca 0%, #6afeca 100%);
  width: auto;
  height: auto;
  position: relative !important;

  span, img {
    position: relative !important;
  }

  span {
    display: initial !important;
  }

  img {
    object-fit: scale-down;
  }

  @media only screen and (min-width: 1200px) {
    border-top-left-radius: 32px;
    border-bottom-left-radius: 32px;
    box-shadow: 0px 13px 60px -12px #54e0ca;
  }
`

export const ProductHead = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;
`

export const TitleText = styled.p`
  color: ${({ theme }) => theme.pallete.black.main};
  font-size: 2.5rem;
  font-weight: bolder;
  line-height: 3rem;
`

export const PriceText = styled.p`
  color: ${({ theme }) => theme.pallete.primary.darkest};
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 16px;
`

export const DescriptionTitle = styled.p`
  color: ${({ theme }) => theme.pallete.black.main};
  text-transform: uppercase;
  font-weight: 700;
  margin-top: 60px;
  font-size: 1rem;
`

export const DescriptionText = styled.p`
  color: ${({ theme }) => theme.pallete.gray.main};
  margin-top: 16px;
  line-height: 1.8rem;
  font-size: 1rem;
`

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${p => p.theme.pallete.gray.main};
  margin-top: 60px;

  button {
    font-weight: 700;
  }
`

export const ShareIconWrapper = styled.span`
  width: 40px;
  height: 40px;
`

export const StarsContainer = styled.div`
  display: flex;
  color: ${({ theme }) => theme.pallete.gray.main};
  margin-left: 8px;

  .-active {
    color: ${({ theme }) => theme.pallete.primary.light};
  }

  .-deactive {
    color: ${({ theme }) => theme.pallete.gray.main};
  }
`

export const HalfStarContainer = styled.span`
  display: flex;
  position: relative;
  width: 24px;
  height: 24px;

  svg {
    position: absolute;
    z-index: 110;

    :nth-of-type(2) {
      z-index: 100;
    }
  }
`