import React from 'react';
import { Nav, NavItem, Navbar, Button, Form, FormGroup, FormControl } from 'react-bootstrap';
import style from '../style/header.css';
import { Link } from 'react-router-dom'

const submitHandler = (e) => {
  e.preventDefault()
  console.log("test");
}

//This span nonsense on line 33 is necessary to work with React Link

const Header = (props) => {
    return (
        <Navbar className={style.header} style={{ backgroundColor: "#CAEBF2" }} fixedTop collapseOnSelect={true}>
            <Navbar.Header>
                <Navbar.Brand href="/">
                    <Link to='/'>CIVIC IDEA HUB</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>

            <Navbar.Collapse>
                <Navbar.Form pullLeft>
                    <div class="input-group">
                        <FormControl type="text" class="form-control" />
                        <span class="input-group-btn">
                            <button class="btn btn-default" type="button" onClick={submitHandler}>Search</button>
                        </span>
                    </div>
                </Navbar.Form>

                <Nav pullRight>
                    <NavItem><a href="ideaForm">Add your idea</a></NavItem>
                    <NavItem href="#">
                        {
                            props.userId != "" ?
                            <span onClick={props.logOut}> Log Out {props.userDisplayName} </span>
                            :<span className={style.login}>Login</span>
                          }
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
