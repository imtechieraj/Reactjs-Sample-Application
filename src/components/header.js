import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavMenu = (props) => {
    console.log("this is memo")
    const { NavLink, NavbarBrand } = props.navMenuData;
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">{NavbarBrand}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {NavLink.map((item, i) => {
                            return <Link to={"/" + item} key={i}>{item}</Link>
                        })}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default React.memo(NavMenu);
// export default NavMenu;