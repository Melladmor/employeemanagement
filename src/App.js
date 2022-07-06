import React,{useEffect, useState} from 'react';
import { useSelector } from 'react-redux/';
import './App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Employee from './component/Employee';
import AddEmp from './component/AddEmp';
import Update from './component/Update';
import Header from './component/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  const emp = useSelector(state=>state.employee.empData);

  const {loading} = useSelector(state=>state.employee);
  const {lodaingDelete} = useSelector(state=>state.employee);
  const {lodaingUpdate} = useSelector(state=>state.employee);



  const [dataToUpdate , setDataToUpdate] = useState();

  useEffect(()=>{
    if(loading){
      toast.success('Add Success',{autoClose:1000})
    }

    if(lodaingDelete){
      toast.warn('Dlete Success',{autoClose:1000})
    }

    if(lodaingUpdate){
      toast.success('Update Success',{autoClose:1000})
    }
  })

  const filterDataToUpdate =(id)=>{
      const updateFilteraton =emp.filter(el=> el.id === id);
      setDataToUpdate(updateFilteraton);
  }
  return (
    <Router>
      <Header/>
      <ToastContainer/>
      <Routes>
        <Route path='/employeemanagement/' element={<Employee filterDataToUpdate={filterDataToUpdate}/>}/>
        <Route path='/addEmp' element={<AddEmp/>}/>
        <Route path='/update' element={<Update dataToUpdate={dataToUpdate}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
