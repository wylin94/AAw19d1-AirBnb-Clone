const LOAD_BOOKINGS = 'bookings/LOAD_BOOKINGS';
const ADD_BOOKING = 'bookings/ADD_BOOKING';
const EDIT_BOOKING = 'bookings/EDIt_BOOKING';

const loadBookings = (list) => ({
  type: LOAD_BOOKINGS,
  list
})

const addBooking = (booking) => ({
  type: ADD_BOOKING,
  booking
})

const editBooking = (booking) => ({
  type: EDIT_BOOKING,
  booking
})

export const getBookings = () => async dispatch => {
  const response = await fetch('/api/bookings/my-reservations');

  if (response.ok) {
    const list = await response.json();
    dispatch(loadBookings(list))
  }
}

export const createBooking = (booking) => async dispatch => {
  const response = await fetch(`/api/bookings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(booking),

  });

  if (response.ok) {
    const newBooking = await response.json();
    dispatch(addBooking(newBooking));
    return newBooking;
  }

}

export const updateBooking = (data) => async dispatch => {
  const response = await fetch(`/api/bookings/${data.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (response.ok) {
    const booking = await response.json();
    dispatch(editBooking(booking));
    return booking;
  }
}



export const

const bookingReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_BOOKINGS:
      return { ...state, ...action.list };

    case ADD_BOOKING:
      return { ...state, [action.booking.id]: action.booking };

    default:
      return state
  }


}

export default bookingReducer
