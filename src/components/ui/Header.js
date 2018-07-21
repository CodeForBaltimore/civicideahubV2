import React from 'react';
import { Nav, NavItem, Navbar, Button, FormGroup, FormControl } from 'react-bootstrap';
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
                <Navbar.Brand>
                    <Link to='/'>CIVIC IDEA HUB</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Navbar.Form pullLeft>
                    <FormGroup >
                        <FormControl type="text" placeholder="Search" />
                    </FormGroup>
                    <Button type="submit" onClick={submitHandler}>
                        submit
                    </Button>
                </Navbar.Form>
s     
                <Nav pullRight>                
                    <NavItem componentClass="span"> 
                        <Link to='ideaForm'>
                            <h5 className={style.add}>Add your idea</h5>
                        </Link>
                    </NavItem>
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
