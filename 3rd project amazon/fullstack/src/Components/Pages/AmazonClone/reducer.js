export const initialState = {
  basket: [],
};
export const AddTotalBasket = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
// *********REDUCE FUNCTION EXPLAINED DOWN**************/ */
//
//{
//   const array = [1, 5, 11, 2];
//   console.log(
//here ther start mean that initialize a value with zero e.g start=0
// and the Data means that it has accessed to the whole array and it will loop through that
//     array.reduce((start, Data) => {
//       return start + Data;
// the start+Data means 0+1,then start will be 1 and Data will be 5,then 1+5=6 and so on
//     })
//   );
// }
const reducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.id),
      };

    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };

    default:
      break;
  }
};

export default reducer;
