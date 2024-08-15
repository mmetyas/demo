const INITIAL_VALUE = {

    isLoader : true ,
}

export default function loaderReducer  (state=INITIAL_VALUE , action  ){

    switch(action.type){
        case "Loader" :
            return {
                ...state ,
                loader : action.payload
            }
            default :
            return state
    }
}