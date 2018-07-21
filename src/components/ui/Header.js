import React from 'react';
import { Nav, NavItem, Navbar, Button, FormGroup, FormControl } from 'react-bootstrap';
import style from '../style/header.css';
import { Link } from 'react-router-dom'

const submitHandler = (e) => {
  e.preventDefault()
  console.log("test");
}

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
                    <FormGroup >
                        <FormControl type="text" placeholder="Search" />
                    </FormGroup>
                    {' '}
                    <Button type="submit" onClick={submitHandler}>
                        submit
                    </Button>
                </Navbar.Form>

                <Nav pullRight>
                    <NavItem >
                        <Link to='ideaForm'>
                            <span className={style.add}>Add your idea</span>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to='about'>
                            <span className={style.add}>About</span>
                        </Link>
                    </NavItem>
                    <NavItem href="#">
                        {props.userId
                            ? <span onClick={props.logOut}>Log Out {props.userDisplayName}</span>
                            : <span className={style.login}>Login</span>
                        }
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
