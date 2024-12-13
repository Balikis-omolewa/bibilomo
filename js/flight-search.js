const flights = [
    { from: "New York", to: "Los Angeles", date: "2024-12-13", coach: "economy" },
    { from: "Chicago", to: "Miami", date: "2024-12-14", coach: "business" },
    { from: "San Francisco", to: "Seattle", date: "2024-12-15", coach: "economy" },
];

document.getElementById('searchFlights').addEventListener('click', () => {
const flyingFrom = document.getElementById('flyingFrom').value;
const flyingTo = document.getElementById('flyingTo').value;
const departureDate = document.getElementById('departureDate').value;
const passengers = document.getElementById('passengers').value;
const coach = document.getElementById('coach').value;

const searchParams = new URLSearchParams({
from: flyingFrom,
to: flyingTo,
date: departureDate,
passengers: passengers,
coach: coach,
});

window.location.href = `flight_search.html?${searchParams.toString()}`;
});
