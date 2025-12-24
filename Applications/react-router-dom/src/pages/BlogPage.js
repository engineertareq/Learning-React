import axios from 'axios'
import React, { use, useEffect, useState } from 'react'

function BlogPage() {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost/TAREQ/api/simple%20php%20api/blog/')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
      });
  }, []);

  return (
    <>
    <div className="container-fluid bg-light">
      <div className="container py-4">
        <h1 className="mb-4">Blog List</h1>
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr>
                <td>{blog.id}</td>
                <td>{blog.title}</td>
                <td>{blog.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

<div className="container-fluid bg-light" margin="200px">
  <div>
  </div>Suuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu</div>

    
    </>
  )
}

export default BlogPage