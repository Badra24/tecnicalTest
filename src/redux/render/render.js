const initialRender = {
  value: false,
};

const autoRender = (state = initialRender, action) => {
  if (action.type === "RENDER_DATA") {
    return {
      ...state,
      value: action.payload.value,
    };
  }
  return state;
};

export default autoRender;
