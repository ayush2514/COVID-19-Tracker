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
          <td>{data.lastupdatedtime}</td>
        </tr>
        </tbody>
    )
})
return(
    <div className="col-md-3">
    <Form>
  <Form.Group controlId="formState">
    <Form.Control size="sm"  type="text" 
    onChange={ e => 
       { setSearched(e.target.value)
        }
        }
    placeholder="Search any state" />
  </Form.Group>
  </Form>
 <Table responsive='sm'>
 <thead>
   <tr>
    <th>STATE/UT</th>
     <th>CONFIRMED</th>
     <th>ACTIVE</th>
     <th>DECEASED</th>
     <th>RECOVERED</th>
     <th>AS ON</th>
   </tr>
 </thead>
 {tabledata}
 </Table>
 </div>
  )
}
