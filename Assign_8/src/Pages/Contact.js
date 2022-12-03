import React from 'react'
import Card from './Components/Card'

function Contact() {
  return (
    <div>
      <Card src="https://f.hubspotusercontent00.net/hubfs/399351/contact-us.png"
        title="Please fill the below form to contact us."
      />
      <form>
  <label class="ms-5 mt-5">
    Name:
    <input type="text" name="name" />
  </label>
  <br></br>
  <label class="ms-5 mt-2">
    Email:
    <input type="email" name="email" />
  </label>
  <br></br>
  <label class="ms-5 mt-2">
    Phone:
    <input type="number" name="phnNumber" />
  </label>
  <br></br>
  <input type="submit" value="Submit" class="ms-5 mt-2"/>
</form>
    </div>
    
  )
}

export default Contact
