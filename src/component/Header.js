import React, { useState } from 'react'
import {OffcanvasBody,OffcanvasHeader ,Offcanvas,Navbar ,NavbarBrand ,NavbarToggler ,Nav,NavItem} from 'reactstrap'
import {NavLink} from 'react-router-dom';
const Header = () => {

    const [toggle ,setToggle] = useState(false);

    const handleToggle = ()=>{
        setToggle(!toggle)
    }
    return (
        <div >
            <Navbar className='container header'>
                <NavbarBrand className='me-auto' >
                    Employee Management
                </NavbarBrand>
                <NavbarToggler className='me-2' onClick={handleToggle}/>

            </Navbar>

            <Offcanvas toggle={handleToggle} isOpen={toggle} className="offcanvas">
                <OffcanvasHeader toggle={handleToggle} >
                    <strong>Employee Management</strong>
                </OffcanvasHeader>

                <OffcanvasBody>
                    <Nav navbar>
                        <NavItem className='item_nav'>
                            <NavLink to='/employeemanagement' className='nav-link'>
                            <i className="fa fa-list me-1"></i>
                            Employee List
                            </NavLink>
                        </NavItem>

                        <NavItem className='item_nav'>
                            <NavLink to='/addEmp' className='nav-link'>
                            <i className="fa fa-plus me-1"></i>
                            Add Employee
                            </NavLink>
                        </NavItem>
                    </Nav> 
                </OffcanvasBody>
            </Offcanvas>
        </div>
    )
}

export default Header;



