import {SearchContent} from '../Data';
import './Search.css';

function Search ({value, setSearch}){
    const {title, label, button} = SearchContent; //Object destructuring, assignment of values to SearchContent

  return (
      <>
          <div className="Search">
              <h2>{title}</h2>
              <p>{label}</p>
              <div className="group">
                  <input
                      placeholder="Search"
                      value={value}
                      onChange={(e)=>{setSearch(e.target.value)}}
                  />
                  <button>{button}</button>
              </div>
          </div>
      </>
  )
}

export default Search;