/* eslint-disable react/jsx-key */
import ErrorComp from "./error.jsx";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../hooks/useFetch";

/* eslint-disable react/prop-types */
const Blog = () => {
    const {id} = useParams()
    const {Blogs, loading, error} = useFetch(`http://localhost:8000/blogs/${id}`)
    return ( 
        <div className="blogwrapper d-flex justify-between">
        <ul className="list" style={{
            listStyle: "none"
        }}>
            {loading && <div>loading blogs...</div>}
            {error && <ErrorComp errmsg={error} />}
            <h3>{`Blog with id - ${id}`}</h3>
            {Blogs && <div>
                    <div className="h5">{Blogs.title}</div>
                    <p className="text">{Blogs.author}</p>
                    <article className="text">{Blogs.desc}</article>
                </div>}
        </ul>
        
        </div>
     );
}
 
export default Blog;