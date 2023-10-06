/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
const Bloglist = (props) => {
    return ( 
        <div className="blogwrapper d-flex justify-between">
        <ul className="list" style={{
            listStyle: "none"
        }}>
            <h3>{props.title}</h3>
            <li>
                {props.blogs.map((blog)=>(
                    <div className="blog-preview mb-4 p-4" style={{border: "1px solid black"}}>
                        <div className="h4">{blog.title}</div>
                        <p className="author">{blog.author}</p>
                        <div className="text">
                            {blog.desc}
                        </div>
                        <button className="w-100 p-2 btn btn-danger" onClick={()=>props.handleDelete(blog.id)}>Delete Blog</button>
                    </div>
                ))}
            </li>
        </ul>
        
        </div>
     );
}
 
export default Bloglist;