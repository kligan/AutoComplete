import {useState, useEffect} from 'react'
import './App.css';
import Search from './components/search/Search';
import Places from './components/places/Places';
import Fetch from './components/Fetch';
import Title from './components/title/Title'

function App() {
    const [value , setValue] = useState('');
    const [list, setList] = useState([]);
    const [search, setSearch] = useState([]);

    const updateInput = async (input) => {
        let match = []
        if(input.length > 0){
            match = list.filter(item =>{
                const filterItem = new RegExp(`${input}`, "gi");
                return item.name.match(filterItem);
            })
        }
        setSearch(match);
        setValue(input);
    }

    const select = (value) =>{
        setValue(value);
        setSearch([]);
    }

    useEffect(()=>{ Fetch('https://restcountries.eu/rest/v2/all')
        .then(data =>{setList([...data])
    })},[])

  return (
    <div className="App">
        <Title />
        <Search value={value} setSearch={updateInput}/>
        <Places places={search} select={select}/>
    </div>
  );
}

export default App;
