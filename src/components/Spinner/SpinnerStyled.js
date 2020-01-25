import styled from "styled-components";

const SpinnerStyled = styled.div`
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  border: 2px solid rgba(0, 0, 0, 0.1);
  border-left-color: #fff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
`;

export default SpinnerStyled;
