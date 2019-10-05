import React from 'react';
import { Form } from 'semantic-ui-react';
import{connect} from 'react-redux';
import {postSearchAction , loadDataTableAction} from '../store/actions';



class SearchSection extends React.Component {
  
    state={
        querysearch:""
    }

handelChange=(e)=>{

this.setState({
    querysearch:e.target.value  
},() => {     
                     //callback
    this.state.querysearch!=="" ?   this.props.postSearchAction(this.state.querysearch) :this.props.loadDataTableAction(this.state.querysearch)  // post Search Action if there is a query  or fetching data if no query
  }
  )

}



  render() {
    
    

    return (
      <Form>
        <Form.Group>
          <Form.Field>
            
                <Form.Input
                  placeholder="Enter the filter."
                  name="querysearch"
                  onChange={this.handelChange}
                  label="Filter"
                  icon="search"
                  
                />
             
          </Form.Field>
        </Form.Group>
      </Form>
    );
  }
}

export default connect(null,{postSearchAction , loadDataTableAction})(SearchSection);

