import React from 'react';
import { Divider, Segment } from 'semantic-ui-react';
import SearchSection from './SearchSection';
import TableContent from './TableContent/TableContent'; 

import {connect} from 'react-redux'; 
import {loadDataTableAction} from '../store/actions';





class TableDemo extends React.Component {
  
  
    componentDidMount(){

    this.props.loadDataTableAction()   

    }

    


  render() {
    const {data} = this.props
    return (
      <>
     
        <Segment> 
        <SearchSection/>
        <Divider />
        <h2>Table</h2>
        <TableContent  columns={this.props.columns} />
      </Segment>
      </>
      
    );
  }
}; 

const mapStateToProps = (state)=>{
  return{
    
    columns:state.table.columns,
    data:state.table.data
  }
}

export default connect(mapStateToProps, {loadDataTableAction})(TableDemo) ;
