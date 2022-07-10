import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 1317px;
  height: 100%;
`;

export const GalleryWrapper = styled.div`
  display: grid;
  gap: 48px;
  grid-template-columns: repeat(auto-fill, 225px);
  grid-template-rows: repeat(auto-fill, 225px);
  justify-content: center;
  
  width: 100%;

  margin-bottom: 48px;
`;