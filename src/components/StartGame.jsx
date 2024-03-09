import styled from 'styled-components';
import { Button } from '../styled/Button';

function StartGame({ toggle }) {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="" />
      </div>

      <div className='content'>
        <h1>DICE GAME</h1>
        <div className='content_btn'>
          <Button onClick={toggle}>Play Now</Button>
        </div>
      </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;

  .content {

    h1 {
      font-size: 96px;
      white-space: nowrap;
    }

    .content_btn {
      display: flex;
      justify-content: end;
    }

  }
`