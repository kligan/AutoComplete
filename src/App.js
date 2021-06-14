import {useState, useEffect} from 'react'
import './App.css';
import Search from './components/search/Search';
import Places from './components/places/Places';
import Fetch from './components/Fetch';
import Title from './components/title/Title';

function App() {
    const [value , setValue] = useState('');// value of the input field
    const [list, setList] = useState([]);// array to store the list of countries
    const [search, setSearch] = useState([]);// array to store the filtered list of countries

    const updateInput = async (input) => {
        let match = [];
        // if the input value is not empty 
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

    useEffect(()=>{
        Fetch('https://restcountries.eu/rest/v2/all')
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
