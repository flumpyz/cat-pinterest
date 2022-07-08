import './App.css';
import Header from "./Components/Header";
import Gallery from "./Components/Gallery";
import {API} from "./Constants/API";
import {useEffect, useState} from "react";
import Loader from "./UIComponents/Loader";
import {getData} from "./Services/APIFetchService";

const url = `${API}/images/search?limit=15&order=RANDOM`;

function App() {
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
