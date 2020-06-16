export const addQuest = quest => {
  return {
    type: 'ADD_QUEST',
    quest
  };
};

export const fetchQuests = quests => {
  return {
    type: 'FETCH_QUESTS',
    quests
  }
}