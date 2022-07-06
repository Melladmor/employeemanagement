import React,{useState} from 'react'
import {Form,FormGroup,Col,Label,Input ,Row ,Button ,Breadcrumb ,BreadcrumbItem} from 'reactstrap'
import {useDispatch} from 'react-redux'
import { startUpdate, successUpdate } from '../redux/slices/employeeSlice';
import {useNavigate ,Link} from 'react-router-dom';
const Update = ({dataToUpdate}) => {


  const [name , setName] = useState(dataToUpdate[0].name);
  const [email , setEmail] = useState(dataToUpdate[0].email);
  const [phone , setPhone] = useState(dataToUpdate[0].phone);
  const [birthdate , setBirthdate] = useState(dataToUpdate[0].birthdate);
  const [jobtitle , setJobtitile] = useState(dataToUpdate[0].jobtitle);
  const [salary , setSalary] = useState(dataToUpdate[0].salary);

  const dispatch = useDispatch();

  const id = dataToUpdate[0].id;
  const navigate =useNavigate();


  const handleUpdate =(e)=>{
    e.preventDefault();
    dispatch(startUpdate());
    navigate('/employeemanagement')
    setTimeout(()=>{
      dispatch(successUpdate({id,name,email,phone,birthdate,jobtitle,salary}));
    },3000)


  }

  return (
    <div className='container div_form' >
        <Breadcrumb className='bread mb-4'>
          <BreadcrumbItem >
            <Link to='/employeemanagement'>Employee List</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            Edit Employee
          </BreadcrumbItem>
        </Breadcrumb>

        <Form onSubmit={handleUpdate} className="form">

        <FormGroup row >
              <Label htmlFor='id' sm={2}>ID</Label>
              <Col>
                <Input
                name='id'
                id='id'
                type='text'
                sm={10}
                disabled
                value={id}
                />
              </Col>
          </FormGroup>

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
                value={name}

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
                value={email}


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
                value={phone}

                />
              </Col>
          </FormGroup>

          <FormGroup row >
              <Label htmlFor='birthdate' sm={2}>BirthDate</Label>
              <Col>
                <Input
                name='birthdate'
                id='birthdate'
                type='text'
                sm={10}
                onChange={(e)=>setBirthdate(e.target.value)}
                value={birthdate}

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
                value={jobtitle}

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
                value={salary}
                />
              </Col>
          </FormGroup>
          <Row>
            <Button color='primary'>
            <i className='fa fa-pencil me-1'></i>
            Edit Employee
            </Button>
          </Row>
        </Form>
    </div>
  )
}

export default Update
