import { useEffect, useState } from "react";

import "./App.css";
import ShowData from "./PostItem";
import FetchingWithUseEffect from "./FetchingWithUseEffect";
import FetchingWithReactQuery from "./FetchingWithReactQuery";

function App() {
  return (
    <div>
      <FetchingWithReactQuery />
    </div>
  );
}

export default App;

/*

 function fetchPosts {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/todos/${count}`);
    return data;
  };
  
    const { data, error, isLoading, isError } = useQuery(['posts'], fetchPosts);
*/
