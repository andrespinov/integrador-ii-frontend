import styled from 'styled-components'

const LoginFormContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .form {
    width: 100%;
    max-width: 300px;
  }
  .header {
    margin-bottom: 30px;
  }
  .error-message {
    color: red;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .login-button {
    width: 100%;
  }
`

export {
  LoginFormContainer
}