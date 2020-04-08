import styled from 'styled-components'
import colors from '~/styles/colors'

export const Container = styled.section`
  max-width: 1200px;
  margin: 34px auto 50px;
  padding: 16px;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    margin: 27px 0;
    flex-direction: row;
    justify-content: space-between;

    h1 {
      font-size: 24px;
      font-weight: bold;
    }

    div {
      display: flex;
      flex-direction: row;

      &:first-child {
        margin-right: 16px;
      }
    }
  }
`
export const Content = styled.section`
  display: flex;
  flex-direction: column;
  padding: 40px 28px;

  background: ${colors.white};
  border-radius: 4px;

  p {
    font-weight: bold;
    font-size: 14px;
    margin: 8px 0;
  }

  input[type='file'] {
    display: none;
  }
`
export const Image = styled.label`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px dashed ${colors.alto};
  border-radius: 50%;
  color: ${colors.alto};
  width: 150px;
  height: 150px;
  cursor: pointer;
  overflow: hidden;

  > img {
    width: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`
