import React, { useState } from 'react'
import {Form,FormGroup,Col,Label,Input ,Row ,Button ,Breadcrumb ,BreadcrumbItem} from 'reactstrap'
import nextId from "react-id-generator";
import {useDispatch} from 'react-redux'
import { startUser, sucssesUser } from '../redux/slices/employeeSlice';
import { useNavigate,Link } from 'react-router-dom';
const AddEmp = () => {

  const [name , setName] = useState('');
  const [email , setEmail] = useState('')
  const [phone , setPhone] = useState('')
  const [birthdate , setBirthdate] = useState('')
  const [jobtitle , setJobtitile] = useState('')
  const [salary , setSalary] = useState('')


  const dispatch = useDispatch();

  const navigate = useNavigate()

  const handleAddUser =(e)=>{
    const id = nextId();
    e.preventDefault();
    dispatch(startUser());
    navigate('/employeemanagement')
    setTimeout(()=>{
      dispatch(sucssesUser({id,name,email,phone,birthdate,jobtitle,salary}))
    },3000)

  }

  return (
    <div className='container div_form'>

        <Breadcrumb className='bread mb-4'>
          <BreadcrumbItem >
            <Link to='/employeemanagement'>Employee List</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            Add Employee
          </BreadcrumbItem>
        </Breadcrumb>
        <Form onSubmit={handleAddUser} className='form'>

          <FormGroup row >
              <Label htmlFor='name' sm={2}>Name</Label>
              <Col>
                <Input
                name='name'
                id='name'
                type='text'
                placeholder='Full Name'
                sm={10}
                onChange={(e)=>setName(e.target.value)}
                />
              </Col>
          </FormGroup>

          <FormGroup row >
              <Label htmlFor='email' sm={2}>Email</Label>
              <Col>
                <Input
                name='email'
                id='email'
                type='email'
                placeholder='Email'
                sm={10}
                onChange={(e)=>setEmail(e.target.value)}

                />
              </Col>
          </FormGroup>


          <FormGroup row >
              <Label htmlFor='phone' sm={2}>Phone</Label>
              <Col>
                <Input
                name='phone'
                id='phone'
                type='el'
                placeholder='Phone Number'
                sm={10}
                onChange={(e)=>setPhone(e.target.value)}

                />
              </Col>
          </FormGroup>

          <FormGroup row >
              <Label htmlFor='birthdate' sm={2}>BirthDate</Label>
              <Col>
                <Input
                name='birthdate'
                id='birthdate'
                type='date'
                sm={10}
                onChange={(e)=>setBirthdate(e.target.value)}

                />
              </Col>
          </FormGroup>


          

          <FormGroup row >
              <Label htmlFor='jobtitle' sm={2}>JobTitle</Label>
              <Col>
                <Input
                name='jobtitle'
                id='jobtitle'
                type='text'
                placeholder='Job Title'
                sm={10}
                onChange={(e)=>setJobtitile(e.target.value)}

                />
              </Col>
          </FormGroup>

          <FormGroup row >
              <Label htmlFor='salary' sm={2}>Salary</Label>
              <Col>
                <Input
                name='salary'
                id='salary'
                type='number'
                placeholder='Salary'
                sm={10}
                onChange={(e)=>setSalary(e.target.value)}

                />
              </Col>
          </FormGroup>
          <Row>
            <Button color='success'>
            <i className="fa fa-plus me-1"></i>
            Add Employee
            </Button>
          </Row>
        </Form>
    </div>
  )
}

export default AddEmp;
