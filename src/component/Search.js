import React, { useRef } from 'react';
import {InputGroup ,InputGroupText ,Input} from 'reactstrap';
import { searchEmp } from '../redux/slices/employeeSlice';
import {useDispatch} from 'react-redux';
const Search = () => {

    const inputRef = useRef('');
    const dispatch = useDispatch();
    const handleSearchChange =(e)=>{
        inputRef.current = e.target.value;
        dispatch(searchEmp(inputRef.current));

    }





    return (
        <div className='mt-1'>
            <InputGroup className='mt-2'>
            <InputGroupText>
                <i className='fa fa-search' role='button' ></i>
            </InputGroupText>
            <Input
            placeholder="Search By Name.."
            name='search'
            type='search'
            ref={inputRef}
            onChange={handleSearchChange}
            />
            </InputGroup>
        </div>
    )
}

export default Search
