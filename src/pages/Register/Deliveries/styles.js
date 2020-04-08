import styled from 'styled-components'
import colors from '~/styles/colors'

export const Container = styled.section`
  max-width: 1200px;
  margin: 34px auto 50px;
  padding: 16px;
  display: flex;
  flex-direction: column;
`
export const Content = styled.section`
  display: grid;
  grid-template-areas:
    'recipient deliveryman'
    'product product';
  grid-column-gap: 30px;
  padding: 40px 28px;
  background: ${colors.white};
  border-radius: 4px;

  p {
    font-weight: bold;
    font-size: 14px;
    margin: 8px 0;
  }

  .recipient {
    grid-area: recipient;
  }
  .deliveryman {
    grid-area: deliveryman;
  }
  .product {
    grid-area: product;
  }
`
