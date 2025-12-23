import React from 'react'

function NewsPage() {
  return (
    <>
      <>
  <meta charSet="UTF-8" />
  <title>Demo News Page</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    body {\n      font-family: Arial, sans-serif;\n      margin: 0;\n      background: #f4f4f4;\n    }\n    header {\n      background: #333;\n      color: #fff;\n      padding: 15px;\n      text-align: center;\n    }\n    nav {\n      background: #444;\n      padding: 10px;\n    }\n    nav a {\n      color: #fff;\n      margin: 0 10px;\n      text-decoration: none;\n    }\n    nav a:hover {\n      text-decoration: underline;\n    }\n    .container {\n      display: flex;\n      margin: 20px;\n    }\n    .main {\n      flex: 3;\n      padding: 20px;\n      background: #fff;\n      margin-right: 20px;\n    }\n    .sidebar {\n      flex: 1;\n      padding: 20px;\n      background: #fff;\n    }\n    article {\n      margin-bottom: 20px;\n    }\n    article h2 {\n      margin-bottom: 10px;\n      color: #333;\n    }\n    footer {\n      background: #333;\n      color: #fff;\n      text-align: center;\n      padding: 15px;\n      margin-top: 20px;\n    }\n  "
    }}
  />
  <header>
    <h1>Daily Demo News</h1>
  </header>
  <nav>
    <a href="#">Home</a>
    <a href="#">World</a>
    <a href="#">Technology</a>
    <a href="#">Sports</a>
    <a href="#">Entertainment</a>
  </nav>
  <div className="container">
    <div className="main">
      <article>
        <h2>Breaking: Demo Headline</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          justo nec nulla facilisis.
        </p>
      </article>
      <article>
        <h2>Technology Update</h2>
        <p>
          Aliquam erat volutpat. Integer non risus at magna fermentum tincidunt.
          Curabitur vel sapien.
        </p>
      </article>
    </div>
    <aside className="sidebar">
      <h3>Latest Updates</h3>
      <ul>
        <li>Market trends rising</li>
        <li>New smartphone released</li>
        <li>Sports team wins championship</li>
      </ul>
    </aside>
  </div>
  <footer>
    <p>© 2025 Demo News. All rights reserved.</p>
  </footer>
</>

    </>
  )
}

export default NewsPage