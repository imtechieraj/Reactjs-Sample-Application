import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const NavMenu = (props) => {
    console.log("i am menu")
    const { NavLink, NavbarBrand } = props.navMenuData;
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">{NavbarBrand}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {NavLink.map((item, i) => {
                            return <Nav.Link href="#" key={i}>{item}</Nav.Link>
                        })}
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default React.memo(NavMenu);