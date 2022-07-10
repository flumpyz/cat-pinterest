import React, {useState} from 'react';
import MainLayout from "../../UIComponents/MainLayout";
import {getFavoriteCatValues} from "../../Services/localStorageService";

const Index = () => {
    const [catValues, setCatValues] = useState(getFavoriteCatValues() ?? []);

    const setCatValuesHandler = (catValues) => {
        setCatValues(catValues);
    }

    return (
        <MainLayout isActive={[false, true]} isLoading={false} catValues={catValues} onChangeCatValuesHandler={setCatValuesHandler}/>
    );
};

export default Index;