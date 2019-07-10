import database from '../firebase/firebase'

export const addItem = item => ({
  type: 'ADD_ITEM',
  item
})

export const startAddItem = (itemData = {}) => dispatch => {
  const uid = getState().auth.uid

  const {
    description = '',
    amount = 0
  } = itemData

  const item = { description, amount }

  return database
    .ref(`users/${ uid }/expenses`)
    .push(item)
    .then(ref => dispatch(addItem({
      id: ref.key,
      ...item
    })))
}