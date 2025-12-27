import { Link } from "react-router-dom"
import React from 'react'

function NavBar() {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
            />
            
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                        ul {
                            list-style-type: none;
                            margin: 0;
                            padding: 0;
                            overflow: hidden; /* Essential for containing floated elements */
                            background-color: #f1f1f1;
                        }

                        li {
                            float: left; /* This makes them horizontal */
                        }

                        li a {
                            display: block;
                            color: black;
                            text-align: center;
                            padding: 14px 16px;
                            text-decoration: none;
                        }

                        /* Change the link color to #111 (black) on hover */
                        li a:hover {
                            background-color: #555555;
                            color: white;
                            text-decoration: none; /* Removes bootstrap default underline */
                        }
                    `
                }}
            />
            
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/blog/new">Add Blog</Link></li>
            </ul>
        </>
    )
}

export default NavBar