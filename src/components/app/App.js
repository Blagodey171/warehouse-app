import {useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
    useEffect(async () => {
        
        let data = await axios.get('/posts')
        console.log(data)
    }, [])

    return (
        <div className="App">
            <p>hello world</p>
        </div>
    );
}

export default App;
