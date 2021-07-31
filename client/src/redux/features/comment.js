const initialState = {
  loading: false,
  items: [],
  content: "",
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "comment/load":
      return {
        ...state,
        loading: true,
        items: action.payload,
      };

    case "comment/post/pending":
      return {
        ...state,
        loading: true,
      };

    case "reports/post/fulfilled":
      return {
        ...state,
        items: [...state.items, action.payload],
        loading: false,
      };
    case "get/content":
      return {
        ...state,
        content: action.payload,
      };


    case "comment/remove/fulfilled":
      return {
        ...state,
        loading: false,
        items: state.items.filter((item) => item._id !== action.payload)
      };

    default:
      return state;
  }
};

export const loadComments = (id) => {
  return async (dispatch) => {
    dispatch({ type: "comment/load/pending" });

    const res = await fetch(`http://localhost:5001/clients/${id}/comments`);
    const json = await res.json();

    dispatch({ type: "comment/load", payload: json });
  };
};

export const addCommentClient = (id, data) => {
  return async (dispatch) => {
    dispatch({ type: "comment/post/pending" });
    const response = await fetch(
      `http://localhost:5001/comments/${id}/comments`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const json = await response.json();
    dispatch({
      type: "reports/post/fulfilled",
      payload: json,
    });
  };
};

export const removeComment = (id) => {
  return async (dispatch) => {
    dispatch({ type: "comment/remove/pending" });
    const response = await fetch(`http://localhost:5001/comments/${id}`, {
      method: "DELETE",
    });

    const json = await response.json();

    dispatch({ type: "comment/remove/fulfilled", payload: id, });
  };
};
