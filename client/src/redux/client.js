const initialState = {
  loading: false,
  items: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "client/load":
      return {
        ...state,
        loading: true,
        items: action.payload,
      };
    default:
      return state;
  }
};

export const loadClient = () => {
  return async (dispatch) => {
    dispatch({ type: "client/load/pending" });

    const res = await fetch("http://localhost:5001");
    const json = await res.json();

    dispatch({ type: "client/load", payload: json });
    console.log(json)
  };
};
