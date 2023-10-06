import { useState } from "react";
import "./App.css";
import Handleclick from "./handleclick";
import Bloglist from "./Bloglist";
import ErrorComp from "./error.jsx";
import useFetch from "../hooks/useFetch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./notFound";
import Navbar from "./Navbar";
import Blog from "./Blog";

function App() {
  const url = "http://localhost:8000/blogs";
  const [count, setCount] = useState(0);
  const [name, setName] = useState("sayak");
  const [randNo, setRandNo] = useState(0);
  const { Blogs, loading, error } = useFetch(url);

  return (
    <>
    <Router>
    <Navbar />
      <Handleclick name={name} />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setName(() => "raha")}>{name}</button>
        <button onClick={() => setRandNo(() => Math.floor(Math.random() * 10))}>
          {randNo}
        </button>
      </div>
      {loading && <div>loading blogs...</div>}
      {error && <ErrorComp errmsg={error} />}
      
        <Switch>
          <Route exact path="/">
            {Blogs && <Bloglist blogs={Blogs} title="All blogs" />}
            {Blogs && (
              <Bloglist
                blogs={Blogs.filter((blog) => blog.author == "sayak")}
                title="Sayak's Blogs"
              />
            )}
          </Route>
          <Route path="/create">
            <div className="h4">Create some new blogs</div>
          </Route>
          <Route path="/blogs/:id">
            <Blog />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
