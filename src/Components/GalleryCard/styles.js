import styled from "styled-components";
import LikeButton from "../../UIComponents/LikeButton";

export const GalleryCard = styled.div`
  position: relative;

  transition: 0.35s ease-in;
  
  & button {
  }

  &:hover {
    transform: scale(1.14);
  }
  
  &:hover button {
    display: block;
  }
`;

export const GalleryCardImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

export const GalleryCardLikeButton = styled(LikeButton)`
  position: absolute;
  
  top: 50%;
  left: 50%;
  
  transform: translate(-50%, -50%);
`;