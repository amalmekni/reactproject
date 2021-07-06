import React,{useState,useEffect} from 'react'
import { Table } from 'reactstrap';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import {AiFillDelete,AiFillEdit,AiOutlineSearch}from'react-icons/ai';
import Button from 'react-bootstrap/Button';
import './App.css';
import DataTable from './DataTable';

function Gere(){
  const [Bus,B]=useState([]);
  const[q,setQ]=useState("");
 

  useEffect(()=>{
   fetch("http://127.0.0.1:8000/Bus/").then(response=> response.json()).then(data=>B(data))
  
    

  },[]);
  
    
  function chercher(rows){

    return rows.filter(
      (row)=> row.immatriculation.toLowerCase().indexOf(q)>-1
      )
  }                         
      
       

          


  return (
 <>
    <Navbar bg="light" expand="lg">
   
    
    <Form className="d-flex">
      <input
        type="text"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
        
        value={q}
       onChange={(e)=>setQ(e.target.value)}        
      /><Button variant="info"><AiOutlineSearch/></Button>
    </Form>
    
    
      
    <Button variant="primary" className="create" >+Ajouter Bus</Button>
    
 </Navbar>

    <div>
      <DataTable data={chercher(Bus)}></DataTable>
    </div>
    
</>
  );
}


export default Gere;