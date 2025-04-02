import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Scheduler.css'; // Import the CSS file

const classSchedules = {
  '10:00am - 12:00pm': {
    Monday: 'Muay Thai - All Levels',
    Wednesday: 'Muay Thai - All Levels',
    Friday: 'Muay Thai - All Levels'
  },
  '12:00pm - 1:00pm': {
    Saturday: 'Jiu Jitsu - All Levels',
  },
  '1:00pm - 3:00pm': {
    Saturday: 'Muay Thai - Advance',
    Sunday: 'Muay Thai - Advance'
  },
  '5:00pm - 6:00pm': {
    Monday: 'Taekwondo - Mixed Belts',
    Wednesday: 'Taekwondo - Mixed Belts',
    Friday: 'Taekwondo - Mixed Belts'
  },
  '6:00pm - 7:00pm': {
    Monday: 'Muay Thai - Children',
    Tuesday: 'Wrestling - All Level',
    Wednesday: 'Muay Thai - Children',
    Thursday: 'Wrestling - All Level',
    Friday: 'Muay Thai - Children'
  },
  '7:00pm - 8:00pm': {
    Monday: 'Muay Thai - Intermediate',
    Tuesday: 'Muay Thai - Advance',
    Wednesday: 'Muay Thai - Intermediate',
    Thursday: 'Muay Thai - Advance',
    Friday: 'Muay Thai - Intermediate '
  }
};

const classTypes = ['All', 'Muay Thai', 'Taekwondo', 'Wrestling', 'Jiu Jitsu'];

const Scheduler = () => {
  const [selectedClass, setSelectedClass] = useState('All');
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const timesOfDay = ['10:00am - 12:00pm', '12:00pm - 1:00pm', '1:00pm - 3:00pm', '5:00pm - 6:00pm', '6:00pm - 7:00pm', '7:00pm - 8:00pm'];

  const filteredSchedules = Object.keys(classSchedules).reduce((acc, time) => {
    acc[time] = Object.keys(classSchedules[time]).reduce((innerAcc, day) => {
      if (selectedClass === 'All' || classSchedules[time][day].includes(selectedClass)) {
        innerAcc[day] = classSchedules[time][day];
      }
      return innerAcc;
    }, {});
    return acc;
  }, {});

  const formatClassDescription = (description) => {
    const [classType, ...rest] = description.split(' - ');
    return (
      <span>
        <strong>{classType}</strong><br /> {rest.join('-')}
      </span>
    );
  };

  return (
    <div className="container scheduler-container">
      <h1 className="text-center my-4">Class Schedule</h1>
      <div className="class-links text-center mb-4">
        {classTypes.map((classType) => (
          <button
            key={classType}
            className={`btn btn-link ${selectedClass === classType ? 'active' : ''}`}
            onClick={() => setSelectedClass(classType)}
            style={{ color: 'black' }}
          >
            {classType}
          </button>
        ))}
      </div>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="header-cell">Time</th>
              {daysOfWeek.map(day => (
                <th key={day} className="header-cell">{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timesOfDay.map(time => (
              <tr key={time}>
                <td className="header-cell">{time}</td>
                {daysOfWeek.map(day => (
                  <td key={day} className="table-cell">
                    {filteredSchedules[time][day] ? formatClassDescription(filteredSchedules[time][day]) : ''}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Scheduler;