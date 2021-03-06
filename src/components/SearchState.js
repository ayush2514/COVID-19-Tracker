import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'

export default function SearchState(props)
{
const statesTable=props.states;  
const [searched,setSearched]=useState("")
const filterState=statesTable.filter(data=>
    {
        return (searched!==""?(data.state.toUpperCase()).includes(searched.toUpperCase()):data)
    })
const tabledata = filterState.map((data,i)=>
{
    if(data.state!=="State Unassigned"&&data.state!=="Total")
    return(
        <tbody>
        <tr>
          <td>{data.state}</td>
          <td>{data.confirmed}</td>
          <td>{data.active}</td>
          <td>{data.deaths}</td>
          <td>{data.recovered}</td>
          
        </tr>
        </tbody>
    )
    else
    return(
      <tbody>
        
      </tbody>
    )
})
return(
    <div className="col-10">
       <h3>State-wise Count of Corona Cases</h3>
       <div style={{maxHeight:"500px",maxWidth: "1000px"}}>
    <Form>
  <Form.Group controlId="formState">
    <Form.Control  type="text" 
    onChange={ e => 
        setSearched(e.target.value)
        
        }
    placeholder="Search any state" />
  </Form.Group>
  </Form>
  </div>
  <div style={{ overflow:"auto",maxHeight:"500px",maxWidth: "1000px"}}>

 <Table responsive='sm' bordered hover>
 <thead >
   <tr>
    <th>STATE/UT</th>
     <th>CONFIRMED</th>
     <th>ACTIVE</th>
     <th>DECEASED</th>
     <th>RECOVERED</th>
    
   </tr>
 </thead>
  {tabledata}
 </Table>
 </div> 
 </div>
  )
}
