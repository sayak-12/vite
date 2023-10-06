import {useState, useEffect} from 'react'
const useFetch = (url) => {
    const [Blogs, setBlogs] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
    useEffect(()=>{
        fetch(url)
        .then((res)=>{
          if(!res.ok){
            throw Error('Could not fetch that resource');
          }
          return res.json();})
          .then((data)=>{
            console.log(data);
            setBlogs(data);
            setLoading(false);
          })
          .catch((e)=>{
            setLoading(false);
            setError(e.message);
          })
        
      }, [url]);
      return {Blogs, loading, error}
}
 
export default useFetch;