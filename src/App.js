import { useState } from "react";
import SearchBox from "./searchBox";

const apiUrl = 'https://jsonplaceholder.typicode.com/albums';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState([]);

  const handleChange = (query) => {
    setSearchQuery(query);
  }

  const handleSearch = async () => {
    console.log(searchQuery);
    const data = await (await fetch(`${apiUrl}/${searchQuery}/photos`)).json()
    
    setPosts(data);
    setSearchQuery('')
  }

  return (
    <div className="container">
      <div className="input-group mt-5">
        <SearchBox value={searchQuery} onChange={handleChange} />
        <div className="input-group-append">
          <button className="input-group-text" onClick={handleSearch}><small>Get Album Photos By Id</small></button>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm">
            <div className="media">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
