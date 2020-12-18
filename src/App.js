import React from 'react'
import './App.css';
import About from './about';
import Clocking from './clock'
import Clock24 from './clock24';
import Analog from './analog';
import Sidebar from './sidebar';
import Menu from './menu';
import Contact from './contact';
import './nav.css'
import { FormControl, Navbar, Button, Form, NavItem, Nav } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import {
  BrowserRouter,
  Switch,
  Link,
  Route
} from 'react-router-dom';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="row">
            <div><Sidebar /></div>
          </div>
          <div className="row">
            <div id="nav" className="col-12"><Navbar bg="dark" variant="dark">
              <Navbar.Brand href="">
                <Image src="attachment.png" rounded width="50" height="50" />Restaurant</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="about">About</Nav.Link>
                <Nav.Link href="contact">Contact</Nav.Link>
                <Nav.Link href="menu">Menu</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar>
            </div>
          </div>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/sidebar">
              <Sidebar />
            </Route>
            <Route path="/clock" exact={true}>
              <Clocking />
            </Route>
            <Route path="/menu">
              <Menu />
            </Route>
            <Route path="/clock24">
              <Clock24 />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/analog">
              <Analog />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );

  }
}

export default App;
