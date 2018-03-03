import React from 'react';
import {BrowserRouter,Route, Link} from 'react-router-dom';
import {Navbar,Nav, NavItem,NavDropdown,MenuItem} from 'react-bootstrap';

class NavBar extends React.Component{
    render(){
        return(
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
          <div className="container">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to='/'>home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/about'>about</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/photos'>Photos</Link>
              </li>
                              {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                  <a className="dropdown-item" href="#">Action</a>
                                  <a className="dropdown-item" href="#">Another action</a>
                                  <div className="dropdown-divider"></div>
                                  <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to='/todoapp'>Todo app</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/api-call'>API-call</Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
          </div>
        </nav>

        );
    }
}

export default NavBar;



// <nav className="navbar navbar-inverse">
// <div className="container-fluid">
//     <div className="navbar-header">
//         <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
//         <span className="icon-bar"></span>
//         <span className="icon-bar"></span>
//         <span className="icon-bar"></span>                        
//         </button>
//         <a className="navbar-brand" href="#">Logo</a>
//     </div>
//     <div className="collapse navbar-collapse" id="myNavbar">
//         <ul className="nav navbar-nav">
//             <li><Link to='/'>Home</Link></li>
//             <li><Link to='/about'>About</Link></li>
//             <li><Link to='/photos'>Photos</Link></li>
//             <li><Link to='/todoapp'>todo-app</Link></li>
//         </ul>
//         <ul className="nav navbar-nav navbar-right">
//         <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
//         </ul>
//     </div>
// </div>
// </nav>


// <Navbar inverse collapseOnSelect>
//             <Navbar.Header>
//               <Navbar.Brand>
//                 <a href="#">React-Bootstrap</a>
//               </Navbar.Brand>
//               <Navbar.Toggle />
//             </Navbar.Header>
//             <Navbar.Collapse>
//               <Nav>
//                 <NavItem eventKey={1} href="#">Link</NavItem>
//                 <NavItem eventKey={2} href="#">Link</NavItem>
//                 <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
//                   <MenuItem eventKey={3.1}>Action</MenuItem>
//                   <MenuItem eventKey={3.2}>Another action</MenuItem>
//                   <MenuItem eventKey={3.3}>Something else here</MenuItem>
//                   <MenuItem divider />
//                   <MenuItem eventKey={3.3}>Separated link</MenuItem>
//                 </NavDropdown>
//               </Nav>
//               <Nav pullRight>
//                 <NavItem eventKey={1} href="#">Link Right</NavItem>
//                 <NavItem eventKey={2} href="#">Link Right</NavItem>
//               </Nav>
//             </Navbar.Collapse>
//           </Navbar>
            



