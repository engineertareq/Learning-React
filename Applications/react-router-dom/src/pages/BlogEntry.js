import axios from 'axios';
import React, { useState } from 'react';

function BlogEntry() {

    const [inputs, setInputs] = useState({});
    
    // 1. Handle form updates
    function handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    // 2. Handle form submission (POST)
    function handleSubmit(e) {
        e.preventDefault();
        
        // Correct Axios POST request
        axios.post('http://localhost/TAREQ/api/simple%20php%20api/addBlog.php', inputs)
            .then(function(response){
                alert("Blog Submitted Successfully!");
                console.log(response);
                // Optional: Clear form after submit
                setInputs({});
            })
            .catch(function(error){
                console.log(error);
                alert("Error submitting blog");
            });
    }

    return (
        <div className='container'>
            <h2>Add New Blog Entry</h2>
            <form className='text' onSubmit={handleSubmit}>
                <div className="form-group">
                    <input 
                        type="text" 
                        className='form-control' 
                        onChange={handleChange} 
                        value={inputs.title || ""} 
                        placeholder="Blog Title" 
                        name="title" 
                    />
                </div>
                
                <div className="form-group">
                    <textarea 
                        className='form-control' 
                        rows={10} 
                        onChange={handleChange} 
                        value={inputs.content || ""} 
                        placeholder="Blog Content" 
                        name="content" 
                    />
                </div>

                <input type="submit" className='btn btn-primary' value="Submit Blog" />
            </form>
        </div>
    )
}

export default BlogEntry;