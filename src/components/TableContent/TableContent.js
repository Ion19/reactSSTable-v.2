import React from 'react';
import { Table, Pagination } from 'semantic-ui-react';

import TableHeader  from './TableHeader.js';
import TableContentRow from './TableContentRow';

import {connect} from 'react-redux'; 

const TableContent = props => {
  
  const {data , filterdata , sorteddata , querysearch , sortedkey} = props;

//   const renderRowData =()=>{
    
//     if (((sortedkey === "" && querysearch ===  ""))) {
//       return (data.map((row)=><TableContentRow key={row.id} rowData={row}/>), console.log(data))
//     }

//     if (((sortedkey === "" && querysearch !==  ""))) {
//       return filterdata.map((row)=><TableContentRow key={row.id} rowData={row}/>)
//     }

//     if (((sortedkey !== "" && querysearch ===  ""))) {
//       return sorteddata.map((row)=><TableContentRow key={row.id} rowData={row}/>)
    
//   }
   
// }


 
  return (
    <>
     
        <Table celled selectable sortable>

        <TableHeader />

        <Table.Body>
          
             
          
          
            {(data.map((row)=><TableContentRow key={row.id} rowData={row}/>))}
           
        

        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="8">
              <Pagination
                totalPages={20}
                activePage={5}
                
              />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </>
  );
};


const mapStateToPropos =(state)=>{
  return {
    data:state.table.data,
    filterdata:state.table.filterdata, 
    sorteddata:state.table.sorteddata, 
    querysearch:state.table.querysearch, 
    sortedkey:state.table.sortedkey
  }
}

export default connect(mapStateToPropos)(TableContent);

