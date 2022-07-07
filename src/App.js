import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import Gallery from "./Components/Gallery";
import {API} from "./Constants/API";
import {useEffect, useState} from "react";
import useSWR from "swr";

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

    const {data, error} = useSWR(url, getData);

    useEffect(() => {
        if (data) {
            setCatValues(data);
            console.log(data);
        }
    }, [data, error])

    return (
        <div className="App">
            <Header/>
            {data &&
                <Gallery catValues={catValues}/>
            }
        </div>
    );
}

export default App;
