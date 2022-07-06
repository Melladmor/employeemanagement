import React from 'react';
import { useSelector } from 'react-redux/';
import {Table ,Placeholder} from 'reactstrap';
import { Link } from 'react-router-dom';
import { startDelete,successDelete } from '../redux/slices/employeeSlice';
import {useDispatch} from 'react-redux';
import Search from './Search';

const Employee = ({filterDataToUpdate}) => {
  const emp = useSelector(state=>state.employee.empData);

  const {loading} = useSelector(state=>state.employee);
  const {lodaingUpdate} = useSelector(state=>state.employee);

  const {empFilter} = useSelector(state=>state.employee);






  const dispatch = useDispatch();








  const empList = emp.filter((el)=>{
    if(empFilter === ''){
      return el;
    }else if(el.name.includes(empFilter)){
      return el;
    }
  }).map((el)=>{

    return(
      <tr key={el.id}>
        <td>{el.id}</td>
        <td>{el.name}</td>
        <td>{el.email}</td>
        <td>{el.phone}</td>
        <td>{el.birthdate}</td>
        <td>{el.jobtitle}</td>
        <td>{el.salary} $</td>
        <td>
          <Link to='/update'><i className='fa fa-pencil edit' role='button' onClick={()=>filterDataToUpdate(el.id)}></i></Link>
          <i className='fa fa-trash delete' role='button' onClick={()=>{
                  dispatch(startDelete());
                  setTimeout(()=>{
                      dispatch(successDelete({id:el.id}))
                  },500)
          }}></i>
        </td>
      </tr>
    )
  });


  const load = emp.map((el)=>{
    return(
      <tr key={el.id}>
            <td>
              <Placeholder animation='glow' tag='p'>
                <Placeholder xs={12} />
              </Placeholder> 
            </td>

            <td>
              <Placeholder animation='glow' tag='p'>
                <Placeholder xs={12} />
              </Placeholder> 
            </td>

            <td>
              <Placeholder animation='glow' tag='p'>
                <Placeholder xs={12} />
              </Placeholder> 
            </td>

            <td>
              <Placeholder animation='glow' tag='p'>
                <Placeholder xs={12} />
              </Placeholder> 
            </td>

            <td>
              <Placeholder animation='glow' tag='p'>
                <Placeholder xs={12} />
              </Placeholder> 
            </td>

            <td>
              <Placeholder animation='glow' tag='p'>
                <Placeholder xs={12} />
              </Placeholder> 
            </td>

            <td>
              <Placeholder animation='glow' tag='p'>
                <Placeholder xs={12} />
              </Placeholder> 
            </td>

            <td>
              <Placeholder animation='glow' tag='p'>
                <Placeholder xs={12} />
              </Placeholder> 
            </td>
            </tr>
    )
  })


  return (
    <div className='container table_container'>
      <Search/>
      <Table responsive className='mt-3'>
        <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Birthdate</th>
          <th>JobTitle</th>
          <th>Salary</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
          {loading || lodaingUpdate?
            load
          :empList}
        </tbody>
      </Table>
    </div>
  )
}

export default Employee;
