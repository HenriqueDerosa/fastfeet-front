import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  padding: 16px;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: left;
    align-items: center;
    margin-bottom: 34px;

    button {
      border: 0;
      background: none;
    }

    strong {
      color: #444444;
      font-size: 24px;
    }
  }

  section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const Time = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #fff;

  opacity: ${props => (props.past ? 0.6 : 1)};

  strong {
    display: block;
    color: ${props => (props.available ? '#999' : '#7159c1')};
    font-size: 20px;
    font-weight: normal;
  }

  span {
    display: block;
    margin-top: 3px;
    color: ${props => (props.available ? '#999' : '#666')};
  }
`
