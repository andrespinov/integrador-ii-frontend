import styled from 'styled-components'

const MaterialsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 30px;
  .content {
    width: 100%;
    max-width: 1000px;
  }
  .header {
    display: flex;
    justify-content: space-between;
  }
`
const MaterialActions = styled.div`
  display: flex;
  justify-content: center;
`

export {
  MaterialsContainer,
  MaterialActions
}