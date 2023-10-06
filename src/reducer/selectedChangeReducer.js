export default function selectedChangeReducer(state, action) {
  return state.map((item, idx) => ({
    ...item,
    isSelected: idx === action.selectedIdx
  }))
}