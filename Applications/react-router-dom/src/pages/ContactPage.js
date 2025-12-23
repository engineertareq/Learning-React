import React from 'react'

function ContactPage() {
  return (
    <>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\nbody {font-family: Arial, Helvetica, sans-serif;}\n* {box-sizing: border-box;}\n\ninput[type=text], select, textarea {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  margin-top: 6px;\n  margin-bottom: 16px;\n  resize: vertical;\n}\n\ninput[type=submit] {\n  background-color: #04AA6D;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\ninput[type=submit]:hover {\n  background-color: #45a049;\n}\n\n.container {\n  border-radius: 5px;\n  background-color: #f2f2f2;\n  padding: 20px;\n}\n"
    }}
  />
  <h3>Contact Form</h3>
  <div className="container">
    <form action="/action_page.php">
      <label htmlFor="fname">First Name</label>
      <input
        type="text"
        id="fname"
        name="firstname"
        placeholder="Your name.."
      />
      <label htmlFor="lname">Last Name</label>
      <input
        type="text"
        id="lname"
        name="lastname"
        placeholder="Your last name.."
      />
      <label htmlFor="country">Country</label>
      <select id="country" name="country">
        <option value="australia">Australia</option>
        <option value="canada">Canada</option>
        <option value="usa">USA</option>
      </select>
      <label htmlFor="subject">Subject</label>
      <textarea
        id="subject"
        name="subject"
        placeholder="Write something.."
        style={{ height: 200 }}
        defaultValue={""}
      />
      <input type="submit" defaultValue="Submit" />
    </form>
  </div>
</>

  )
}

export default ContactPage