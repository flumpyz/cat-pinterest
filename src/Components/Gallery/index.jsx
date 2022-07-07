import React from 'react';
import * as SC from './styles';
import * as WC from '../../UIComponents/Wrapper/wrappers';
import GalleryCard from "../GalleryCard";

const Index = () => {
    return (
        <SC.Gallery>
            <WC.MainWrapper>
                <WC.GalleryWrapper>
                    <GalleryCard />
                    <GalleryCard />
                    <GalleryCard />
                    <GalleryCard />
                    <GalleryCard />
                    <GalleryCard />
                </WC.GalleryWrapper>
            </WC.MainWrapper>
        </SC.Gallery>
    );
};

export default Index;