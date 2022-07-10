import React, {useState} from 'react';
import MainLayout from "../../UIComponents/MainLayout";
import {useSelector} from "react-redux";

const Index = () => {
    const favoriteCatValues = useSelector(state => state.catsInfo);
    const [catValues, setCatValues] = useState(favoriteCatValues ?? []);

    const setCatValuesHandler = (catValues) => {
        setCatValues(catValues);
    }

    return (
        <MainLayout isActive={[false, true]}
                    isLoading={false}
                    catValues={catValues}
                    onChangeCatValuesHandler={setCatValuesHandler}/>
    );
};

export default Index;