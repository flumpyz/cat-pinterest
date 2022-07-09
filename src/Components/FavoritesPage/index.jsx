import React from 'react';
import MainLayout from "../../UIComponents/MainLayout";
import {useDispatch, useSelector} from "react-redux";

const Index = () => {
    const dispatch = useDispatch();
    const catValues = useSelector(state => state.catsInfo);

    return (
        <MainLayout isLoading={false} catValues={catValues}/>
    );
};

export default Index;