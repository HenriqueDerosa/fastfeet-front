import styled from 'styled-components'
import { darken } from 'polished'

export const Wrapper = styled.div`
  height: 100%;
  background: #7d40e7 0% 0% no-repeat padding-box;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 10px #00000033;
  border-radius: 4px;

  img {
    width: 100%;
    padding: 50px 50px 24px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 16px 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #444444;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);

        color: #999999;
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    p {
      padding: 8px 0;
      font-size: 14px;
      text-align: left;
      font-weight: 500;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #7d40e7 0% 0% no-repeat padding-box;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#3b9eff')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`
