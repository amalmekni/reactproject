import {BiChevronRightCircle, BiLinkAlt} from 'react-icons/bi'
import Button from 'react-bootstrap/Button';
import {Route,Switch} from 'react-router-dom';
import { Nav }from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {AiFillDelete,AiFillEdit,AiOutlineSearch}from'react-icons/ai';


export default function DataTable({data}){
    const columns = data[0]&&Object.keys(data[0]);
    
    
return (<>
<table cellPadding={20} cellSpacing={20}>
<thead>
<tr>{data[0]&&columns.map((heading)=><th>{heading}</th>)}<th>action</th></tr>


</thead>

<tbody>
   {data.map(row  => <tr>        

       {columns.map(column =><td>{row[column]}</td> )}<td>
       <Button variant="danger"><AiFillDelete/></Button>{' '}
       
       <Button variant="warning"><AiFillEdit/></Button></td>
       </tr> 
    )} 
    
</tbody>

</table>

</>
    
)


}