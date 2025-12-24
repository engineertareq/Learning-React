import React from 'react'

function Footer() {
  return (
    <>
      <footer classname="container-fluid text-center">
  <p>Online Store Copyright</p>
  <form classname="form-inline">
    Get deals:
    <input type="email" classname="form-control" size="{50}" placeholder="Email Address" />
    <button type="button" classname="btn btn-danger">
      Sign Up
    </button>
  </form>
</footer>

    </>
  )
}

export default Footer