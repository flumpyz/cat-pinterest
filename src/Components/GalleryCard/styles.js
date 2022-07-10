import styled from "styled-components";
import LikeButton from "../../UIComponents/LikeButton";

export const GalleryCard = styled.div`
  position: relative;
  
  width: 225px;
  height: 225px;

  transition: 0.35s ease-in;
  
  & button {
  }

  &:hover {
    transform: scale(1.14);

    box-shadow: 0 6px 5px rgba(0, 0, 0, 0.24), 0 9px 18px rgba(0, 0, 0, 0.18);
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