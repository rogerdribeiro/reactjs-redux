const INITIAL_STATE = [
  {
    id: 1,
    text: 'Fazer Café',
  },
  {
    id: 2,
    text: 'Estudar ReactJS',
  },
];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
