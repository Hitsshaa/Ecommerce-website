export const initialState = {
  isLoading: false,
  isError: false,
  product: [],
  Category: [],
  Title: [],
  searchItems: [],
  categoryType: "All",
  categoryItems: [],
  rangeItem: [],
  Value: 999,
};

const reducer = (state, action) => {
  // if (action.type === "SET_LOADING") {
  //         return {
  //             ... state,
  //             isLoading:True
  //         };
  //     }

  switch (
    action.type //shortcut
  ) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "MY_API_DATA":
      let maxValue = Math.max(
        ...action.payload.map((ele) => {
          return ele.price;
        })
      );
      const category = new Set(
        action.payload.map((element) => {
          return element.category;
        })
      );
      const title = new Set(
        action.payload.map((element) => {
          return element.title;
        })
      );
      return {
        ...state,
        isLoading: false,
        product: action.payload,
        Category: [...category, "All"],
        Title: title,
        Value: maxValue,
      };

    case "Search":
      let newValue = action.payload;
      let Searchitem = state.product.filter((ele) => {
        return (
          ele.title.toLowerCase().includes(newValue) ||
          ele.category.toLowerCase().includes(newValue)
        );
      });
      console.log(Searchitem);
      return {
        ...state,
        searchItems: Searchitem,
        categoryItems: [],
        rangeItem: [],
      };

    case "CategoricalProduct":
      let CategoryType = action.payload;
      let CategoryItems = state.product.filter((ele) => {
        return ele.category === CategoryType;
      });
      if (CategoryType == "All") {
        return {
          ...state,
          categoryType: CategoryType,
          categoryItems: state.product,
          rangeItem: [],
          searchItems: [],
        };
      } else {
        return {
          ...state,
          categoryType: CategoryType,
          categoryItems: CategoryItems,
          searchItems: [],
          rangeItem: [],
        };
      }

    case "Range":
      let price = action.payload;
      console.log(price);

      let RangeItem = state.product.filter((ele) => {
        if (state.categoryType != "All") {
          return ele.price < price && ele.category == state.categoryType;
        } else {
          return ele.price < price;
        }
      });

      console.log(RangeItem);
      return {
        ...state,
        rangeItem: RangeItem,
        categoryItems: [],
        searchItems: [],
        Value: price,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default reducer;
