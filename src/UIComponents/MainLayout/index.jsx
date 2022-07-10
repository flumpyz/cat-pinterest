import React from 'react';
import Header from "../../Components/Header";
import Loader from "../Loader";
import Gallery from "../../Components/Gallery";

const Index = (props) => {
    return (
        <div>
            <Header isActive={props.isActive}/>
            {props.isLoading &&
                <Loader/>
            }
            <Gallery catValues={props.catValues} onChangeCatValuesHandler={props.onChangeCatValuesHandler}/>
        </div>
    );
};

export default Index;