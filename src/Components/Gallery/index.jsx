import React, {useEffect, useState} from 'react';
import * as SC from './styles';
import * as WC from '../../UIComponents/Wrapper/wrappers';
import GalleryCard from "../GalleryCard";

const Index = (props) => {
    const catCards = props.catValues.map((catValue) => (
        <GalleryCard src={catValue.url}>
        </GalleryCard>
    ))

    return (
        <SC.Gallery>
            <WC.MainWrapper>
                <WC.GalleryWrapper>
                    {catCards}
                </WC.GalleryWrapper>
            </WC.MainWrapper>
        </SC.Gallery>
    );
};

export default Index;