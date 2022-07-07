import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import Gallery from "./Components/Gallery";
import {API} from "./Constants/API";
import {useEffect, useLayoutEffect, useState} from "react";
import useSWR from "swr";
import Loader from "./UIComponents/Loader";

const url = `${API}/images/search?limit=15&order=RANDOM`;

const getData = async () => {
    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Accept': '*/*',
            'x-api-key': 'ef0b8b33-7d53-4f79-adeb-f215176a5f84'
        }
    });
    return response.json();
};

function App() {
    const [catValues, setCatValues] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getData().then((response) => {
            setCatValues(response);
            console.log(response);
        }).catch((error) => {
            setIsError(true);
        }).finally(() => {
            setIsLoading(false);
        })
    }, [])

    return (
        <div className="App">
            <Header/>
            {isLoading &&
                <Loader/>
            }
            <Gallery catValues={catValues}/>
        </div>
    );
}

export default App;
