import React from 'react';
import * as SC from './styles';

const Index = (props) => {
    return (
        <SC.GalleryCard>
            <SC.GalleryCardImage src={props.src}/>
            <SC.GalleryCardLikeButton />
        </SC.GalleryCard>
    );
};

export default Index;