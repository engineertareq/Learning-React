import { Link } from "react-router-dom"
import React from 'react'

function NavBar() {
    return (
        <>
        <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
  />
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
  />
  <style/>
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  width: 200px;\n  background-color: #f1f1f1;\n}\n\nli a {\n  display: block;\n  color: black;\n  padding: 8px 16px;\n  text-decoration: none;\n}\n\n/* Change the link and background color on hover */\nli a:hover {\n  background-color: #555555;\n  color: white;\n}\n"
                }}

            />
            <h2>Gray Vertical NavBar</h2>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/news">News</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </>
    )
}

export default NavBar