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
    'name name name name name'
    'address address address  number address2'
    'city city city state zipcode ';
  grid-column-gap: 12px;
  padding: 40px 28px;
  background: ${colors.white};
  border-radius: 4px;

  p {
    font-weight: bold;
    font-size: 14px;
    margin: 8px 0;
  }

  .name {
    grid-area: name;
  }
  .address {
    grid-area: address;
  }
  .address2 {
    grid-area: address2;
  }
  .number {
    grid-area: number;
  }
  .state {
    grid-area: state;
  }
  .city {
    grid-area: city;
  }
  .zipcode {
    grid-area: zipcode;
  }
`
