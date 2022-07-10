import styled from "styled-components";

export const Gallery = styled.main`
  display: flex;
  justify-content: center;

  width: 100vw;
  height: calc(100vh - 64px - 52px);

  padding-top: 52px;

  background-color: #FFFFFF;
`;

export const LoadMoreBlock = styled.div`
  margin-top: 48px;
  padding-bottom: 31px;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.25px;
  color: #000000;
  text-align: center;

  cursor: pointer;
`;