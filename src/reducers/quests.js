export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_QUESTS":
      return [...state, ...action.quests];

    case "ADD_QUEST":
      return [...state, { ...action.quest }];

    case "REMOVE_QUEST":
      return state.filter((quest) => quest.id !== action.questId);

    default:
      return state;
  }
};
