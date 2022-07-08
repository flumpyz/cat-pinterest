import styled from "styled-components";

export const LikeButton = styled.button`
  border: none;
  background: rgba(255, 255, 255, 0);
  position: absolute;
  bottom: 24px;
  right: 24px;
  display: none;

  transition: all 1s;
  
  &:hover svg {
    cursor: pointer;
    
    transition: 3s ease;
    
    & path {
      d: path("M21.4366 39.6903L21.4359 39.6896C16.2758 35.0105 12.0332 31.1632 9.07453 27.5459C6.12162 23.9357 4.5 20.6158 4.5 17C4.5 11.1161 9.11614 6.5 15 6.5C18.3286 6.5 21.5311 8.05197 23.6193 10.5042L24 10.9512L24.3807 10.5042C26.4689 8.05197 29.6714 6.5 33 6.5C38.8839 6.5 43.5 11.1161 43.5 17C43.5 20.6158 41.8784 23.9358 38.9254 27.5486C35.9767 31.1561 31.7528 34.9945 26.6165 39.6621L26.5648 39.709L26.5637 39.71L24.0013 42.025L21.4366 39.6903Z");
    }
  }
`;