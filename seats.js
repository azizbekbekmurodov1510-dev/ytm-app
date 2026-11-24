window.YtmSeats = {
  getRemaining(ev) {
    const total = Number(ev.seats || 30);
    const bookings = (window.state && Array.isArray(state.bookings)) ? state.bookings : [];
    const booked = bookings.filter(
      (b) => b.eventId === ev.id || b.eventTitle === ev.title
    ).length;
    return Math.max(0, total - booked);
  },
  addBooking(eventId, eventTitle) {
    if (!window.state) return;
    if (!Array.isArray(state.bookings)) state.bookings = [];
    state.bookings.push({ eventId, eventTitle });
    if (typeof saveState === "function") saveState();
  }
};
