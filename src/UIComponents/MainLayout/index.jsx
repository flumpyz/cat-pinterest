import React from 'react';
import * as SC from './styles';
import Header from "../../Components/Header";
import Loader from "../Loader";
import Gallery from "../../Components/Gallery";

const Index = (props) => {
    return (
        <SC.MainLayout>
            <Header isActive={props.isActive}/>
            <Gallery catValues={props.catValues}
                     onChangeCatValuesHandler={props.onChangeCatValuesHandler}
                     loadMoreData={props.loadMoreData}
                     isGalleryPage={props.isGalleryPage}/>
            {props.isLoading &&
                <Loader/>
            }
        </SC.MainLayout>
    );
};

export default Index;