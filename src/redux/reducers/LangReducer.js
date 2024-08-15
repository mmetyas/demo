const INITIAL_VALUE = {

    lang : "EN" ,
   
}

export default function LangReducer  (state=INITIAL_VALUE , action  ){

    switch(action.type){
        case "CHANGE_LAN" :
            return {
                ...state ,
                lang : action.payload
            }
            default :
            return state
    }

}