import React from 'react'
import {Navbar, Container, Button} from 'react-bootstrap'

const Navbarr = () => {
  return (
    <div><Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>
      LFSR
      </Navbar.Brand>
      <Button onClick={()=>{window.location.href = "http://127.0.0.1:5501/my-bsk-app/src/components/strona1.html";}}>Kryptografia</Button>
    </Container>
  </Navbar></div>
  )
}

export default Navbarr