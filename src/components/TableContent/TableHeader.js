import { Table } from 'semantic-ui-react';
import React from 'react';

import {connect} from 'react-redux';
import {sortColumnAction} from '../../store/actions';

const TableHeader =(props) => {

  const handleSort =(columnkey)=>{
   
    let order="null";

    if (props.order==="null") {
      order= "asc"
    }; 
    if (props.order==="asc") {
      order= "dsc"
    }; 

    if (props.order==="dsc") {
      order= "null"
    }; 

    
   props.sortColumnAction(columnkey , order)


  };
    
    
  return (
    <Table.Header>
      <Table.Row>
        {props.columns.map((column)=>
        <Table.HeaderCell key={column} onClick={()=>handleSort(column)}>
          
          {column}   {props.sortedkey===column ? <span>{props.order}</span> : <span></span>   }
        </Table.HeaderCell>
        )}
        
      </Table.Row>
    </Table.Header>
  );
}; 


const mapStateToProps =(state)=>{
    return {
        columns:state.table.columns,
        data:state.table.data,
        sortedkey:state.table.sortedkey, 
        order: state.table.order
    }
}

export default connect(mapStateToProps,{sortColumnAction})(TableHeader)
