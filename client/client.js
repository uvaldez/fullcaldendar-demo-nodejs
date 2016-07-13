import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';


BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

const myEventsList = [
  {
    'title': 'All Day Event',
    'allDay': true,
    'start': new Date(2016, 6, 13),
    'end': new Date(2016, 6, 13)
  },
  {
    'title': 'Meeting',
    'start': new Date(2016, 6, 14, 10, 30, 0, 0),
    'end': new Date(2016, 6, 14, 12, 30, 0, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting'
    },
    {
      'title': 'Lunch',
      'start':new Date(2016, 6, 13, 12, 0, 0, 0),
      'end': new Date(2016, 6, 13, 13, 0, 0, 0),
      desc: 'Power lunch'
    }
]
const MyCalendar = props => (
  <div>
    <BigCalendar
      events={myEventsList}
      defaultView="week"
      defaultDate={new Date(2016, 6, 13)}
    />
  </div>
);

render(
  <MyCalendar/>,
  document.getElementById('app')
)
