import {POST_SEARCH_QUERY, FETCHING_DATA, SORT_COLUMN, REMOVE_ROW , FAILED_FETCHING_DATA, FAILED_POST_SEARCHQUERY} from '../actions/types'; 


const initState = {
        data:[],
        columns:[], 
      
        filterdata:[],
        querysearch:"", 
        

        sorteddata:[],
        sortedkey:"",
        order:null, 
        

        activedata:[],
        activecolumns:[]        
        
}

 


export const tableReducer = (state=initState, action) =>{
    
        switch (action.type){

                case FETCHING_DATA : 
                return (
                        
                        {...state,

                        data:action.payload.dataTable.data, 
                        columns:action.payload.dataTable.columns,
                        sortedkey:""
                                                       
                }
                )

                case POST_SEARCH_QUERY : 
                return (
                        {...state,
                        data:action.payload.res.data.dataTable.data,
                        querysearch:action.payload.query      
                                                
                }
                        
                )

                case SORT_COLUMN :
                return (
                        {...state ,
                        
                        sortedkey:action.payload.sortedkey,
                        data:action.payload.res.data.dataTable.data,
                        order:action.payload.order  

                } 
                )
                
                
                case REMOVE_ROW : 
                return (
                        {...state , 
                        data:state.data.filter((row)=>(action.payload!== row.id))

                        }
                )


            default:
                return state
        }
    
}