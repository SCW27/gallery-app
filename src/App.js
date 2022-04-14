import { useState } from "react";
import "./App.css";
import ImageItem from "./components/ImageItem";
import SearchPanel from "./components/SearchPanel";

const App = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom">Gallery App</h2>
        <SearchPanel setResults={setResults} setLoading={setLoading} />
        {!loading ? (
          <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            {results.map((item) => {
              return <ImageItem item={item} key={item.id} />;
            })}
          </div>
        ) : (
          <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            <div className="col-4 offset-4">
              <img src="/loading.png" alt="loading" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
