import React from 'react'

function AboutPage() {
  return (
    <>
    <>
  <title>Bootstrap Example</title>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    /* Set height of the grid so .sidenav can be 100% (adjust as needed) */\n    .row.content {height: 550px}\n    \n    /* Set gray background color and 100% height */\n    .sidenav {\n      background-color: #f1f1f1;\n      height: 100%;\n    }\n        \n    /* On small screens, set height to 'auto' for the grid */\n    @media screen and (max-width: 767px) {\n      .row.content {height: auto;} \n    }\n  "
    }}
  />
  <nav className="navbar navbar-inverse visible-xs">
    <div className="container-fluid">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target="#myNavbar"
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a className="navbar-brand" href="#">
          Logo
        </a>
      </div>
      <div className="collapse navbar-collapse" id="myNavbar">
        <ul className="nav navbar-nav">
          <li className="active">
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Age</a>
          </li>
          <li>
            <a href="#">Gender</a>
          </li>
          <li>
            <a href="#">Geo</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div className="container-fluid">
    <div className="row content">
      <div className="col-sm-3 sidenav hidden-xs">
        <h2>Logo</h2>
        <ul className="nav nav-pills nav-stacked">
          <li className="active">
            <a href="#section1">Dashboard</a>
          </li>
          <li>
            <a href="#section2">Age</a>
          </li>
          <li>
            <a href="#section3">Gender</a>
          </li>
          <li>
            <a href="#section3">Geo</a>
          </li>
        </ul>
        <br />
      </div>
      <br />
      <div className="col-sm-9">
        <div className="well">
          <h4>Dashboard</h4>
          <p>Some text..</p>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <div className="well">
              <h4>Users</h4>
              <p>1 Million</p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="well">
              <h4>Pages</h4>
              <p>100 Million</p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="well">
              <h4>Sessions</h4>
              <p>10 Million</p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="well">
              <h4>Bounce</h4>
              <p>30%</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="well">
              <p>Text</p>
              <p>Text</p>
              <p>Text</p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="well">
              <p>Text</p>
              <p>Text</p>
              <p>Text</p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="well">
              <p>Text</p>
              <p>Text</p>
              <p>Text</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8">
            <div className="well">
              <p>Text</p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="well">
              <p>Text</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    </>
    
  )
}

export default AboutPage