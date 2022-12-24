 export const initialState = {
    isLoading:false,
    isError:false,
    product:[],
    Category:[],
    Title:[]
};


const reducer = (state,action)=>{
    // if (action.type === "SET_LOADING") {
    //         return {
    //             ... state,
    //             isLoading:True
    //         };
    //     }

    
    
        switch (action.type) {           //shortcut
            case "SET_LOADING":
                return {
                            ... state,
                            isLoading:true
                        };
        case "MY_API_DATA":
            const  category = new Set(action.payload.map((element) => {
                return element.category
            }))
            const title = new Set(action.payload.map((element) => {
                return element.title
            }))

                    return {
                        ... state,
                        isLoading:false,
                        product:action.payload,
                        Category:['All',...category],
                        Title:title
                    };
            case "API_ERROR":
                return {
                    ... state,
                    isLoading:false,
                    isError:true
                };
        
        
            default:
                return state
        }
        }

export default reducer;