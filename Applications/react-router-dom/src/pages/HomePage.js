import React from 'react'
import Footer from '../components/Footer'

function HomePage() {
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
        "\n    /* Remove the navbar's default rounded borders and increase the bottom margin */ \n    .navbar {\n      margin-bottom: 50px;\n      border-radius: 0;\n    }\n    \n    /* Remove the jumbotron's default bottom margin */ \n     .jumbotron {\n      margin-bottom: 0;\n    }\n   \n    /* Add a gray background color and some padding to the footer */\n    footer {\n      background-color: #f2f2f2;\n      padding: 25px;\n    }\n  "
    }}
  />
  <div className="jumbotron">
    <div className="container text-center">
      <h1>Online Store</h1>
      <p>Mission, Vission &amp; Values</p>
    </div>
  </div>
  <nav className="navbar navbar-inverse">
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
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Deals</a>
          </li>
          <li>
            <a href="#">Stores</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="#">
              <span className="glyphicon glyphicon-user" /> Your Account
            </a>
          </li>
          <li>
            <a href="#">
              <span className="glyphicon glyphicon-shopping-cart" /> Cart
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div className="container">
    <div className="row">
      <div className="col-sm-4">
        <div className="panel panel-primary">
          <div className="panel-heading">BLACK FRIDAY DEAL</div>
          <div className="panel-body">
            <img
              src="https://placehold.it/150x80?text=IMAGE"
              className="img-responsive"
              style={{ width: "100%" }}
              alt="Image"
            />
          </div>
          <div className="panel-footer">Buy 50 mobiles and get a gift card</div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-danger">
          <div className="panel-heading">BLACK FRIDAY DEAL</div>
          <div className="panel-body">
            <img
              src="https://placehold.it/150x80?text=IMAGE"
              className="img-responsive"
              style={{ width: "100%" }}
              alt="Image"
            />
          </div>
          <div className="panel-footer">Buy 50 mobiles and get a gift card</div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-success">
          <div className="panel-heading">BLACK FRIDAY DEAL</div>
          <div className="panel-body">
            <img
              src="https://placehold.it/150x80?text=IMAGE"
              className="img-responsive"
              style={{ width: "100%" }}
              alt="Image"
            />
          </div>
          <div className="panel-footer">Buy 50 mobiles and get a gift card</div>
        </div>
      </div>
    </div>
  </div>
  <br />
  <div className="container">
    <div className="row">
      <div className="col-sm-4">
        <div className="panel panel-primary">
          <div className="panel-heading">BLACK FRIDAY DEAL</div>
          <div className="panel-body">
            <img
              src="https://placehold.it/150x80?text=IMAGE"
              className="img-responsive"
              style={{ width: "100%" }}
              alt="Image"
            />
          </div>
          <div className="panel-footer">Buy 50 mobiles and get a gift card</div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-primary">
          <div className="panel-heading">BLACK FRIDAY DEAL</div>
          <div className="panel-body">
            <img
              src="https://placehold.it/150x80?text=IMAGE"
              className="img-responsive"
              style={{ width: "100%" }}
              alt="Image"
            />
          </div>
          <div className="panel-footer">Buy 50 mobiles and get a gift card</div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-primary">
          <div className="panel-heading">BLACK FRIDAY DEAL</div>
          <div className="panel-body">
            <img
              src="https://placehold.it/150x80?text=IMAGE"
              className="img-responsive"
              style={{ width: "100%" }}
              alt="Image"
            />
          </div>
          <div className="panel-footer">Buy 50 mobiles and get a gift card</div>
        </div>
      </div>
    </div>
  </div>
  <br />
  <br />
  <Footer />
</>

    </>
  )
}

export default HomePage