import React from 'react';
import * as SC from './styles';
import * as WC from '../../UIComponents/Wrapper/wrappers';
import LikeButton from "../../UIComponents/LikeButton";
import {GalleryCardLikeButton} from "./styles";

const Index = (props) => {
    return (
        <SC.GalleryCard>
            <SC.GalleryCardImage src={props.src}/>
            <SC.GalleryCardLikeButton />
        </SC.GalleryCard>
    );
};

export default Index;