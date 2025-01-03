import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Scheduler2.css'; // Import the CSS file

const localizer = momentLocalizer(moment);

const classSchedules = {
  1: [ // Monday
    { key: 'muay-thai', title: 'Muay Thai Class', start: [10, 0], end: [11, 15] },
    { key: 'taekwondo', title: 'Taekwondo Class', start: [17, 0], end: [18, 0] }
  ],
  2: [ // Tuesday
    { key: 'wrestling', title: 'Wrestling Class', start: [18, 0], end: [19, 0] },
    { key: 'muay-thai', title: 'Muay Thai Class', start: [19, 0], end: [20, 0] }
  ],
  3: [ // Wednesday
    { key: 'muay-thai', title: 'Muay Thai Class', start: [10, 0], end: [11, 15] },
    { key: 'taekwondo', title: 'Taekwondo Class', start: [17, 0], end: [18, 0] },
    { key: 'taekwondo2', title: 'Taekwondo Class', start: [18, 0], end: [20, 0] },
  ],
  4: [ // Thursday
    { key: 'wrestling', title: 'Wrestling Class', start: [18, 0], end: [19, 0] },
    { key: 'muay-thai', title: 'Muay Thai Class', start: [19, 0], end: [20, 0] }
  ],
  5: [ // Friday
    { key: 'muay-thai', title: 'Muay Thai Class', start: [10, 0], end: [11, 15] },
    { key: 'taekwondo', title: 'Taekwondo Class', start: [17, 0], end: [18, 0] }
  ],
  6: [ // Saturday
    { key: 'jiu-jitsu', title: 'Jiu Jitsu Class', start: [12, 0], end: [13, 0] },
    { key: 'muay-thai', title: 'Muay Thai Class', start: [13, 0], end: [14, 0] }
  ],
  0: [ // Sunday
    { key: 'muay-thai', title: 'Muay Thai Class', start: [12, 0], end: [13, 0] }
  ]
};

// Generate events for a range of dates
const generateEvents = (startDate, endDate) => {
  const events = [];
  let currentDate = moment(startDate);

  while (currentDate.isBefore(endDate)) {
    const dayOfWeek = currentDate.day();
    const schedules = classSchedules[dayOfWeek] || [];

    schedules.forEach(schedule => {
      const start = currentDate.clone().set({ hour: schedule.start[0], minute: schedule.start[1] }).toDate();
      const end = currentDate.clone().set({ hour: schedule.end[0], minute: schedule.end[1] }).toDate();
      events.push({ title: schedule.title, start, end });
    });

    currentDate.add(1, 'day');
  }

  return events;
};

const events = generateEvents(new Date(2023, 0, 1), new Date(2040, 11, 31));

const Scheduler2 = () => {
  return (
    <div className="container scheduler-container">
      <h1>Class Schedule</h1>
      <p>Schedule subject to change. Holidays, special events, and unforeseen circumstances may not be accounted for.</p>
      <br />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default Scheduler2;