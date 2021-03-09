export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_QUESTS":
      console.log(action.quests)
      return [...action.quests];

    case "ADD_QUEST":
      return [...state, { ...action.quest }];

    case "REMOVE_QUEST": 
    return state.filter((quest) => quest.id !== action.id);

    case "EDIT_QUEST":
      return state.map((questObj) => {
        if (questObj.id === action.quest.id) {
          return {
            ...state,
            content: action.quest.content,
            location: action.quest.location,
          };
        } else return questObj;
      });

    default:
      return state;
  }
};

//
