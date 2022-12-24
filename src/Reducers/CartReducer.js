export const initialState = {
  cartItems: [],
};

const CartReducer = (state, action) => {
  switch (
    action.type //shortcut
  ) {
    case "ADD_TO_CART":
      let array = state.cartItems.map((element) => {
        return element.id;
      });
      console.log(array);
      if (!array.includes(action.payload.id))
      {let obj =action.payload;
                      obj.count = 1;
        return { ...state, cartItems: [...state.cartItems, obj] }}
        else {
          let increcount = state.cartItems.map((element) => {
                    if (element.id ===action.payload.id)
                    {
                      element.count = element.count +1;
                      return element;
                    }
                    else{
                      return element
                    }
                  });
                  return { ...state, cartItems:increcount }
        }
        

          case "IncrementCount":
            let IncrementCount = state.cartItems.map((element) => {
              if (element.id ===action.payload.id) 
              {
                element.count = element.count + 1;
                return element;
              }
              else{
                return element
              }
            });   
            return { ...state, cartItems:IncrementCount }
  
            case "DecrementCount":
              let DecrementCount = state.cartItems.map((element) => {
                if (element.id ===action.payload.id && element.count>=2  ) 
                {
                  element.count = element.count - 1;
                  return element;
                }
                else{
                  return element
                }
              });   
              return { ...state, cartItems:DecrementCount }
  

    case "DELETE_TO_CART":
      let updateCart = state.cartItems.filter((element) => {
        return element.id != action.payload;
      });
      return { ...state, cartItems: updateCart };
    case "ClearCart":
      return { ...state, cartItems: [] };
    default:
      return state;
  }
};

export default CartReducer;
