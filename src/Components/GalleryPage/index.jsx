import React from 'react';
import Header from "../Header";
import Loader from "../../UIComponents/Loader";
import Gallery from "../Gallery";
import {useEffect, useState} from "react";
import {getData} from "../../Services/APIFetchService";
import {API} from "../../Constants/API";
import MainLayout from "../../UIComponents/MainLayout";

const url = `${API}/images/search?limit=15&order=RANDOM`;

const Index = (props) => {
    const [catValues, setCatValues] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getData(url).then((response) => {
            setCatValues(response);
            console.log(response);
        }).catch((error) => {
            setIsError(true);
        }).finally(() => {
            setIsLoading(false);
        })
    }, [])

    return (
        <MainLayout isActive={[true, false]} isLoading={isLoading} catValues={catValues}/>
    );
};

export default Index;