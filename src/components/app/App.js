import {useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
