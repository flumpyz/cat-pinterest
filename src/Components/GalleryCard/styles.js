import styled from "styled-components";

export const GalleryCard = styled.div`
  transition: 0.35s ease-in;
  
  &:hover {
    transform: scale(1.1);
  }
`

export const GalleryCardImage = styled.img`
  width: 100%;
  height: 100%;
  
  object-fit: cover;
`