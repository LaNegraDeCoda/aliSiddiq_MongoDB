const form = document.getElementById('eventForm');
const eventsContainer = document.getElementById('eventsContainer');

async function fetchEvents() {
  try {
    const res = await fetch('/api/events');
    const events = await res.json();

    eventsContainer.innerHTML = '';

    events.forEach(event => {
      const div = document.createElement('div');
      div.innerHTML = `
        <p>
          <strong>${event.date}</strong> | ${event.time} | ${event.city} | ${event.venue} |
          <a href="${event.ticket_url}" target="_blank">Ticket Link</a>
          <button onclick="deleteEvent('${event._id}')">Delete</button>
        </p>
      `;
      eventsContainer.appendChild(div);
    });
  } catch (error) {
    console.error('Error fetching events:', error);
  }
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const eventData = {
    date: form.date.value,
    time: form.time.value,
    city: form.city.value,
    venue: form.venue.value,
    ticket_url: form.ticket_url.value
  };

  try {
    await fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(eventData)
    });

    form.reset();
    fetchEvents();
  } catch (error) {
    console.error('Error adding event:', error);
  }
});

async function deleteEvent(id) {
  try {
    await fetch(`/api/events/${id}`, {
      method: 'DELETE'
    });
    fetchEvents();
  } catch (error) {
    console.error('Error deleting event:', error);
  }
}

// Initial load
fetchEvents();
