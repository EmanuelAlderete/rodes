import styled from "styled-components";

const CarHistoryStyled = styled.section`
  article {
    background: #fff;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    font-size: 0.8em;
    margin-bottom: 20px;

    -webkit-box-shadow: -3px 3px 5px -1px rgba(0, 0, 0, 0.13);
    -moz-box-shadow: -3px 3px 5px -1px rgba(0, 0, 0, 0.13);
    box-shadow: -3px 3px 5px -1px rgba(0, 0, 0, 0.13);
  }

  img {
    vertical-align: middle;
    width: 24px;
  }

  p {
    vertical-align: middle;
  }

  article div:last-child {
    max-width: 50%;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
  }

  li {
    list-style: square;
    flex: 1 1 50%;
  }
`;

export default CarHistoryStyled;
