export default (state = [], action) => {

  switch (action.type) {
    case 'FETCH_QUESTS':
      return [...state, ...action.quests]
    default:
      return state
  }
}