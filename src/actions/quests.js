export const addQuest = (quest) => {
  return {
    type: "ADD_QUEST",
    quest,
  };
};

export const fetchQuests = (quests) => {
  return {
    type: "FETCH_QUESTS",
    quests,
  };
};

export const editQuest = (quest) => {
  return {
    type: "EDIT_QUEST",
    quest,
  };
};

export const removeQuest = (id) => {
  return (dispatch) => {
    dispatch({ type: "REMOVE_QUEST", id });
    const reqObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    };
    fetch(`http://localhost:3000/quests/${id}`, reqObj);
  };
};
