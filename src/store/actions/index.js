import {
    POST_SEARCH_QUERY,
    SORT_COLUMN ,
    FETCHING_DATA,
    FAILED_FETCHING_DATA, 
    FAILED_POST_SEARCHQUERY, 
    REMOVE_ROW, 
    FAILED_SORT
    } from './types'; 

import axios from 'axios'; 


export const loadDataTableAction =()=>dispatch=>{


   
    axios
        .get('./data.json')
           
        
        .then (res=> dispatch ({
            type:FETCHING_DATA, 
            payload:res.data,
            }))
       

        .catch (err=> dispatch ({
            type:FAILED_FETCHING_DATA, 
            payload:err
        })) 
    
   

};

export const postSearchAction=(query)=>dispatch=>{


    if (query==="") {
        dispatch(loadDataTableAction())
    }


    axios
        .get('dataFiltered.json',{
            params:{query}
        }   
        )
        .then (res=> dispatch ({
            type:POST_SEARCH_QUERY, 
            payload:{res , query}
        }))
        .catch (err=> dispatch ({
            type:FAILED_POST_SEARCHQUERY, 
            payload:{err , query}
        })) 

};

export const sortColumnAction=(sortedkey,order)=>dispatch=>{


    axios
        .get('dataSorted.json',{
            params:{sortedkey , order}
        }
        )
               
        .then (res=> dispatch ({
            type:SORT_COLUMN, 
            payload:{res , sortedkey , order}
        }))
        .catch (err=> dispatch ({
            type:FAILED_SORT, 
            payload:{err , sortedkey}
        })) 
        

};

export const removeRowAction=(removedRowID)=>{

   
        return({
            type:REMOVE_ROW, 
            payload:removedRowID
        })
        

};


