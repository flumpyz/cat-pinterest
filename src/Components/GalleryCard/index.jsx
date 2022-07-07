import React from 'react';
import * as SC from './styles';
import * as WC from '../../UIComponents/Wrapper/wrappers';

const Index = (props) => {
    return (
        <SC.GalleryCard>
            <SC.GalleryCardImage src={props.src}/>
        </SC.GalleryCard>
    );
};

export default Index;