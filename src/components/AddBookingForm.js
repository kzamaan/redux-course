import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBooking } from './../redux/booking/actions';

export default function AddBookingForm() {
	// store methods
	const dispatch = useDispatch();
	const bookingList = useSelector((state) => state);

	// State
	const [destinationFrom, setDestinationFrom] = useState('');
	const [destinationTo, setDestinationTo] = useState('');
	const [journeyDate, setJourneyDate] = useState('');
	const [guests, setGuests] = useState('');
	const [ticketClass, setTicketClass] = useState('');

	// Data
	const destinationList = ['Dhaka', 'Sylhet', 'Saidpur', "Cox's Bazar"];
	const ticketClassList = ['Business', 'Economy'];

	// Filter destination list
	const destinationToList = destinationList.filter((destination) => destination !== destinationFrom);

	// Handle form submit
	function handleBookingSubmit(e) {
		e.preventDefault();

		// Check if the booking already exists
		const isBookingExists = bookingList.find((item) => {
			if (
				item.destination_from === destinationFrom &&
				item.destination_to === destinationTo &&
				item.journey_date === journeyDate
			) {
				return true;
			} else {
				return false;
			}
		});

		if (bookingList.length > 2) {
			alert('You can not book more than 3 tickets at a time.');
			return;
		} else if (isBookingExists) {
			alert('You have already booked this ticket.');
			return;
		}

		// check if journey date is valid
		const today = new Date(new Date().toDateString()).getTime();
		const journeyDateObj = new Date(new Date(journeyDate).toDateString()).getTime();

		console.log(journeyDateObj, today);
		if (journeyDateObj < today) {
			alert('Please select a valid journey date.');
			return;
		}

		// Create booking object
		const bookingObject = {
			destination_from: destinationFrom,
			destination_to: destinationTo,
			journey_date: journeyDate,
			guests: guests,
			flight_class: ticketClass,
		};

		// Dispatch action
		dispatch(addBooking(bookingObject));
	}

	return (
		<div className="mt-[160px] mx-4 md:mt-[160px] relative">
			<div className="bg-white rounded-md max-w-6xl w-full mx-auto">
				<form className="first-hero lws-inputform" onSubmit={handleBookingSubmit}>
					<div className="des-from">
						<p>Destination From</p>
						<div className="flex flex-row">
							<img src="/img/icons/Frame.svg" alt="Destination" />
							<select
								className="outline-none px-2 py-2 w-full"
								value={destinationFrom}
								name="from"
								id="lws-from"
								required
								onChange={(e) => setDestinationFrom(e.target.value)}>
								<option value="" hidden>
									Please Select
								</option>
								{destinationList.map((destination) => (
									<option key={Math.random()} value={destination}>
										{destination}
									</option>
								))}
							</select>
						</div>
					</div>

					<div className="des-from">
						<p>Destination To</p>
						<div className="flex flex-row">
							<img src="/img/icons/Frame.svg" alt="Destination" />
							<select
								className="outline-none px-2 py-2 w-full"
								value={destinationTo}
								name="to"
								id="lws-to"
								required
								onChange={(e) => setDestinationTo(e.target.value)}>
								<option value="" hidden>
									Please Select
								</option>
								{destinationToList.map((destination) => (
									<option value={destination} key={Math.random()}>
										{destination}
									</option>
								))}
							</select>
						</div>
					</div>

					<div className="des-from">
						<p>Journey Date</p>
						<input
							type="date"
							className="outline-none px-2 py-2 w-full date"
							name="date"
							id="lws-date"
							onChange={(e) => setJourneyDate(e.target.value)}
							required
						/>
					</div>

					<div className="des-from">
						<p>Guests</p>
						<div className="flex flex-row">
							<img src="./img/icons/Vector (1).svg" alt="" />
							<select
								className="outline-none px-2 py-2 w-full"
								value={guests}
								name="guests"
								id="lws-guests"
								required
								onChange={(e) => setGuests(e.target.value)}>
								<option value="" hidden>
									Please Select
								</option>
								{Array.from({ length: 4 }, (v, i) => i + 1).map((number) => (
									<option key={Math.random()} value={number}>
										{number} Person
									</option>
								))}
							</select>
						</div>
					</div>

					<div className="des-from !border-r-0">
						<p>Class</p>
						<div className="flex flex-row">
							<img src="./img/icons/Vector (3).svg" alt="" />
							<select
								className="outline-none px-2 py-2 w-full"
								value={ticketClass}
								name="ticketClass"
								id="lws-ticketClass"
								required
								onChange={(e) => setTicketClass(e.target.value)}>
								<option value="" hidden>
									Please Select
								</option>

								{ticketClassList.map((ticketClass) => (
									<option value={ticketClass} key={Math.random()}>
										{ticketClass}
									</option>
								))}
							</select>
						</div>
					</div>

					<button
						className={`addCity ${bookingList.length > 2 ? 'disabled' : ''}`}
						type="submit"
						id="lws-addCity"
						disabled={bookingList.length > 2}>
						<svg
							width="15px"
							height="15px"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="2"
							stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
						</svg>
						<span className="text-sm">Book</span>
					</button>
				</form>
			</div>
		</div>
	);
}
