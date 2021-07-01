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
          <button className="input-group-text border-0" onClick={handleSearch}><small>Get Album Photos By Id</small></button>
        </div>
      </div>
      <div className="row">
        {posts.length != 0 ? 
          posts?.map((post, key) => (
            <div key={key} className="col-lg-4 my-2">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <div className="media align-items-center">
                    <div className="img-box">
                      <img src={post.thumbnailUrl} className="img-fluid" alt="" />
                    </div>
                    <div className="media-body ml-2">
                      <h4><small className="text-black-50">{post.title}</small></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        : (
          <div className="d-flex justify-content-center">
            <h2 className="font-bold text-black-20">No Post Yet!!</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
