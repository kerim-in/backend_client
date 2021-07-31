const initialState = {
  loading: false,
  items: [],
};

export const statusesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "status/load":
      return {
        ...state,
        loading: true,
        items: action.payload,
      };
    default:
      return state;
  }
};

export const loadStatus = () => {
  return async (dispatch) => {
    dispatch({ type: "status/load/pending" });

    const res = await fetch("http://localhost:5001/status");
    const json = await res.json();

    dispatch({ type: "status/load", payload: json });
  };
};
