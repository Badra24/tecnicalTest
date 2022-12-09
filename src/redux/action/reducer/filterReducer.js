const initialState = {
  filter: "",
  order: "",
  orderby: "",
  datefrom: "",
  dateto: "",
  offset: 0,
};

const filterReducer = (state = initialState, action) => {
  if (action.type === "SET_FILTER") {
    return {
      filter: action.payload.filter,
      order: action.payload.order,
      orderby: action.payload.orderby,
      datefrom: action.payload.datefrom,
      dateto: action.payload.dateto,
      offset: action.payload.offset,
    };
  }
  if (action.type === "UNSET_FILTER") {
    return initialState;
  }
  return state;
};

export default filterReducer;
