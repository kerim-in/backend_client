const initialState = {
  loading: false,
  myId: "",
  items: [],
};

export const clientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "client/load":
      return {
        ...state,
        loading: true,
        items: action.payload,
      };
    case "client/load/pending":
      return {
        ...state,
        loading: true,
      };
    case "remove/client/fulfilled":
      return {
        ...state,
        loading: false,
        items: state.items.filter((item) => item._id !== action.payload)
      };
    default:
      return state;
  }
};

export const loadClient = () => {
  return async (dispatch) => {
    dispatch({ type: "client/load/pending" });

    const res = await fetch("http://localhost:5001/clients");
    const json = await res.json();

    dispatch({ type: "client/load", payload: json });
  };
};

export const remuveClients = (id) => {
  return async (dispatch) => {
    dispatch({ type: "remove/client/pending" });

    const res = await fetch(`http://localhost:5001/clients/${id}`, {
      method: "DELETE"
    });

    const json = await res.json();

    dispatch({ type: "remove/client/fulfilled", payload: id });
  };
};
