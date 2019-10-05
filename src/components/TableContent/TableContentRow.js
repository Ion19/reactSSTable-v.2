import React from 'react';
import { Table } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {removeRowAction} from '../../store/actions';

const TableContentRow = props=> {

const {id} = props.rowData

const handleRowClick=()=>{

  props.removeRowAction(id)
}


return(

<Table.Row onClick={handleRowClick}>
    <Table.Cell>{props.rowData.id}</Table.Cell>
    <Table.Cell>{props.rowData.make}</Table.Cell>
    <Table.Cell>{props.rowData.model}</Table.Cell>
    <Table.Cell>{props.rowData.year}</Table.Cell>
    <Table.Cell>{props.rowData.package}</Table.Cell>
    <Table.Cell>{props.rowData.fuelType}</Table.Cell>
    <Table.Cell>{props.rowData.transmission}</Table.Cell>
    
  </Table.Row>
  );
 

  
  };

  const mapStateToProps =(state)=>{
    return {
      columns:state.table.columns
    }
  }

export default connect(mapStateToProps , {removeRowAction})(TableContentRow);  