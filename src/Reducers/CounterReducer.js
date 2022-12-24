// const reducer = (state,action)=>{
//     switch (action.type) {           //shortcut
//         case "Increment":
//             return {
//                         counter :counter+1
//                     };
//     case "Decrement":
//                 return {
//                     counter :counter+1
//                 };

//         default:
//             return state
//     }
//     }

const CountReducer = (state,action) => {
    if (action.type=="Increment") {
      state = state +1
      console.log(state,action)
      return state
    }
    if (action.type=="Decrement" && state>0) {
      state = state - 1
      console.log(state,action)
      return state
    }else{
      return state
    }
   
  }

    export default CountReducer;