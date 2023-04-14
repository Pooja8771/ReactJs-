import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
//   const [posts, setPosts] = useState([]);
const [post, setPost] = useState({});
  const [id ,setId] = useState(1)

  useEffect(() => {
    axios
      .get(`"https://jsonplaceholder.typicode.com/posts/${id}`)
      //get request return promise
      .then(response=> {
        console.log(response);
        setPost(response.data);
      })
      .catch(err=> {
        console.log(err)
      });
  } ,[id]);
  return (
    <div>
        <input  type ="text" value ={id}  onChange ={e =>setId(e.target.value)}
        />
        <div>{post.title}</div>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default DataFetching;
