import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Scheduler.css'; // Import the CSS file

const classSchedules = {
  1: [ // Monday
    { key: 'muay-thai', title: 'Muay Thai Class', levels: [{ level: 'All Levels', time: '10:00am - 11:15am' }, { level: 'Children Level', time: '6:00pm - 7:00pm' }, { level: 'Level 2 - Intermediate', time: '7:00pm' }] },
    { key: 'taekwondo', title: 'Taekwondo Class', levels: [{ level: 'Mix Belts', time: '5:00pm - 6:00pm' }] }
  ],
  3: [ // Wednesday
    { key: 'muay-thai', title: 'Muay Thai Class', levels: [{ level: 'All Levels', time: '10:00am - 11:15am' }, { level: 'Children Level', time: '6:00pm - 7:00pm' }, { level: 'Level 2 - Intermediate', time: '7:00pm' }] },
    { key: 'taekwondo', title: 'Taekwondo Class', levels: [{ level: 'Mix Belts', time: '5:00pm - 6:00pm' }] }
  ],
  5: [ // Friday
    { key: 'muay-thai', title: 'Muay Thai Class', levels: [{ level: 'All Levels', time: '10:00am - 11:15am' }, { level: 'Children Level', time: '6:00pm - 7:00pm' }, { level: 'Level 2 - Intermediate', time: '7:00pm' }] },
    { key: 'taekwondo', title: 'Taekwondo Class', levels: [{ level: 'Mix Belts', time: '5:00pm - 6:00pm' }] }
  ],
  2: [ // Tuesday
    { key: 'wrestling', title: 'Wrestling Class', levels: [{ level: 'All Level', time: '6:00pm - 7:00pm' }] },
    { key: 'muay-thai', title: 'Muay Thai Class', levels: [{ level: 'Level 3 - Advance', time: '7:00pm - 8:00pm' }] }
  ],
  4: [ // Thursday
    { key: 'wrestling', title: 'Wrestling Class', levels: [{ level: 'All Level', time: '6:00pm - 7:00pm' }] },
    { key: 'muay-thai', title: 'Muay Thai Class', levels: [{ level: 'Level 3 - Advance', time: '7:00pm - 8:00pm' }] }
  ],
  6: [ // Saturday
    { key: 'jiu-jitsu', title: 'Jiu Jitsu Class', levels: [{ level: 'All levels', time: '12:00pm' }] },
    { key: 'muay-thai', title: 'Muay Thai Class', levels: [{ level: 'Level 3 - Advance', time: '1:00pm' }] }
  ],
  0: [ // Sunday
    { key: 'muay-thai', title: 'Muay Thai Class', levels: [{ level: 'All Levels', time: '12:00pm' }] }
  ]
};

const Scheduler = () => {
  const [date, setDate] = useState(new Date());

  const renderClassSchedule = (date) => {
    const day = date.getDay();
    const schedules = classSchedules[day] || [];

    return schedules.length > 0 ? schedules.map(schedule => (
      <div key={schedule.key}>
        <h3>{schedule.title}</h3>
        <table className="table table-dark table-sm">
          <thead>
            <tr>
              <th scope="col">Class Level</th>
              <th scope="col">Time</th>
            </tr>
          </thead>
          <tbody>
            {schedule.levels.map((level, index) => (
              <tr key={index}>
                <th scope="row">{level.level}</th>
                <th scope="row">{level.time}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )) : <p>No classes scheduled for this day.</p>;
  };

  return (
    <div className="container scheduler-container">
      <h1>Class Schedule</h1>
      <p>Schedule subject to change. Holidays, special events, and unforeseen circumstances may not be accounted for.</p>
      <br></br>
      <div className="row">
        <div className="col-md-6 calendar-container">
          <Calendar onChange={setDate} value={date} />
        </div>
        <div className="col-md-6">
          <div className="class-schedule">
            {renderClassSchedule(date)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scheduler;