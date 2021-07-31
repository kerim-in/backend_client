const initialsState = {
  clients: [],
  lastName: "",
  firstName: "",
  patronymic: "",
  img: "",
  addClient: false
};

export const addClients = (state = initialsState, action) => {
  switch (action.type) {
    case "load/client/add":
      return {
        ...state,
        clients: [...state.clients, action.payload],
      };

    case "get/firstName":
      return {
        ...state,
        firstName: action.payload,
      };

    case "get/lastName":
      return {
        ...state,
        lastName: action.payload,
      };

    case "get/patronymic":
      return {
        ...state,
        patronymic: action.payload,
      };

    case "get/img":
      return {
        ...state,
        img: action.payload,
      };
    case "client/post/pending":
      return {
        ...state,
        loading: true,
      };

    case "client/post/fulfilled":
      return {
        ...state,
        loading: false,
        items: [state.items, action.payload]
      };

    default:
      return state;
  }
};

export const addClient = (data) => {
  return async (dispatch) => {
    dispatch({ type: "client/post/pending" });

    const res = await fetch("http://localhost:5001/clients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const json = await res.json();
    dispatch({
      type: "client/post/fulfilled",
      payload: json,
    });
  };
};

export const getLastName = (lastName) => {
  return { type: "get/lastName", payload: lastName };
};

export const getFirstName = (firstName) => {
  return { type: "get/firstName", payload: firstName };
};

export const getPatronymic = (patronymic) => {
  return { type: "get/patronymic", payload: patronymic };
};

export const getImg = (img) => {
  return { type: "get/img", payload: img };
};
