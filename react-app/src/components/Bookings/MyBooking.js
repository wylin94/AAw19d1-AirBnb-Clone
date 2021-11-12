import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBookings } from "../../store/booking";
import { NavLink } from "react-router-dom";
import EditBookingForm from "./EditBooking";
import DeleteBookingForm from "./DeleteBooking";
import EditBookingFormModal from "./EditIndex";

function ShowAllBookings() {
  const dispatch = useDispatch();
  const bookings = useSelector(state => state.booking)

  useEffect(() => {
    dispatch(getBookings())
  },[dispatch])


  return (
    <div>
      <h1>My reservations</h1>
        {Object.keys(bookings).map(booking =>
          <div key={bookings[booking].id}>
            Spot ID:{bookings[booking].spotId}. Start Date:{bookings[booking].startDate}. End Date: {bookings[booking].endDate}.
            {/* <EditBookingForm booking={bookings[booking]} /> */}
            <EditBookingFormModal booking={bookings[booking]} />
            <DeleteBookingForm booking={bookings[booking]} />
          </div>
      )}
      {/* {Object.keys(bookings).map(booking =>
        <div key={bookings[booking].id}>
          <NavLink to={`/my-reservations/${bookings[booking].id}`}>Edit</NavLink>
        </div>
      )} */}
    </div>

  )


}

export default ShowAllBookings
