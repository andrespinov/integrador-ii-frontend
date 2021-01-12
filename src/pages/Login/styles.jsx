import styled from 'styled-components'

const LoginContainer = styled.div`
  height: 100vh;
  
  .content {
    height: 100%;
  }

  .panel {
    position: relative;
    background: linear-gradient(45deg,  #FFF,  #3F51B5, pink);
    background-size: 400% 400%;
    animation: gradient 6s infinite alternate;
  }

  .building {
    width: 100%;
    position: absolute;
    bottom: 0;
  }

  @keyframes gradient{
    0%{
      background-position: 0%;
    }
    50%{
      background-position:100%;
    }
    100%{
      background-position:0%;
    }
  }
`

export {
  LoginContainer
}