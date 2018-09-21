import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Container, NavbarToggler, Collapse, Nav, NavItem, NavLink, DropdownToggle, DropdownMenu, DropdownItem } from './bootstrap';
import { UncontrolledDropdown } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { APP_URL } from '../constants/actionTypes';

const style = {
    lgDropDown: {
        minWidth: '50rem'
    }
}


const LoggedOutView = props => {
    if (!props.currentUser) {
        return (
            <Nav className="ml-auto align-items-center" navbar >
                <NavItem>
                    <NavLink href="tel:+1-416-751-6000">+1-416-751-6000</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav>
                        Recent Searches {' '} <FontAwesomeIcon icon={faAngleDown} size="xs" />
                    </DropdownToggle>
                    <DropdownMenu right style={style.lgDropDown}>
                        <DropdownItem>
                            Option 1
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav>
                        <img src={APP_URL+'/assets/images/flags/1x1/in.svg'} height="24" className="rounded-circle px-2" alt="india"/>
                        <FontAwesomeIcon icon={faAngleDown} size="xs" />
                    </DropdownToggle>
                    <DropdownMenu right style={style.lgDropDown}>
                        <DropdownItem>
                            Option 1
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav>
                        <span className="px-2"><FontAwesomeIcon icon={faRupeeSign} size="1x" /> </span> <FontAwesomeIcon icon={faAngleDown} size="xs" />
                    </DropdownToggle>
                    <DropdownMenu right style={style.lgDropDown}>
                        <DropdownItem>
                            Option 1
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav>
                        Your Trips <span className="px-1"><FontAwesomeIcon icon={faAngleDown} size="xs" /></span> <div className="profile-pic">G</div>
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            Option 1
                        </DropdownItem>
                        <DropdownItem>
                            Option 1
                        </DropdownItem>
                        <DropdownItem>
                            Option 1
                        </DropdownItem>
                        <DropdownItem>
                            Option 1
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
        );
    }
    return null;
};

const LoggedInView = props => {
    if (props.currentUser) {
        return (
            <ul className="nav navbar-nav pull-xs-right">

                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/editor" className="nav-link">
                        <i className="ion-compose"></i>&nbsp;New Post
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/settings" className="nav-link">
                        <i className="ion-gear-a"></i>&nbsp;Settings
                    </Link>
                </li>

                <li className="nav-item">
                    <Link
                        to={`/@${props.currentUser.username}`}
                        className="nav-link">
                        <img src={props.currentUser.image} className="user-pic" alt={props.currentUser.username} />
                        {props.currentUser.username}
                    </Link>
                </li>

            </ul>
        );
    }

    return null;
};

class Header extends React.Component {
    render() {
        return (
            <Navbar color="light" light expand="md" className="shadow-sm">
                <Container>
                    <Link to="/" className="font-weight-bold navbar-brand text-primary">
                        <span className="text-info">Trip</span>Zumi
                    </Link>
                    <NavbarToggler />
                    <Collapse isOpen={true} navbar>
                        <LoggedOutView currentUser={this.props.currentUser} />

                        <LoggedInView currentUser={this.props.currentUser} />

                    </Collapse>
                </Container>
            </Navbar>
            //   <div>

            //     <nav className="navbar navbar-light">
            //       <div className="container">

            //         <Link to="/" className="navbar-brand">
            //           {this.props.appName.toLowerCase()}
            //         </Link>

            //       </div>
            //     </nav>
            //   </div>
        );
    }
}

export default Header;
