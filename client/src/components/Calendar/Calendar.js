// ES6 destructuring
import React, { Component, PureComponent, PropTypes } from 'react';

import './Calendar.css';

const daysWeek = ['M', 'Tu', 'W', 'Th', 'Fr', 'Sa', 'Su'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const NOTES = [
  {
    id: '1',
    description: 'Job Fair at NYU',
    date: '10/3/2017'
  }, 
  {
    id: '2',
    description: 'Hackathon at CUNY Grad Center',
    date: '21/3/2017'
  },
  {
    id: '3',
    description: 'CUNYCodes Demo Night',
    date: '27/4/2017'
  },
  {
    id: '4',
    description: 'CUNY Hackathon',
    date: '28/4/2017'
  }
];

// Calendar
class Calendar extends React.Component {

  constructor(...args) {
    super(...args)

    this.state = {
      date: new Date(),
      notes: NOTES,
      todoDate: `${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`
    }

    this.handleDate = this.handleDate.bind(this)
    this.handleDay = this.handleDay.bind(this)
    this.handleNoteKeyPress = this.handleNoteKeyPress.bind(this)
    this.handleCompleted = this.handleCompleted.bind(this)
  }

  handleDate({
    target
  }) {
    let action = target.classList.contains('next') ? 1 : -1
    let updateDate = new Date(this.state.date.getTime())
    updateDate.setMonth(updateDate.getMonth() + action)

    this.setState({
      date: updateDate
    })
  }

  handleDay({
    target
  }) {
    let todoDate = target.getAttribute('value')

    this.setState({
      todoDate: todoDate
    })
  }

  handleNoteKeyPress({target,key}) {
    if (key === 'Enter' && target.value !== '') {
      let date = this.state.todoDate
      const notes = this.state.notes.slice()

      notes.push({
        description: target.value,
        date: date
      })

      this.setState({
        notes
      })
      target.value = ''
    }
  }
  
  handleCompleted ({target}) {
    const notes = this.state.notes.slice()
    let updatedNotes = notes.filter( note => note.id !== target.id)
       
    setTimeout(() => 
      this.setState({
        notes: updatedNotes
      })        
     , 2000); 
  }

  render() {

    const style = {
      margin: 10
    }

    return (
      <div style={style} >
        <TodoDay todoDate={this.state.todoDate} handleNoteKeyPress={this.handleNoteKeyPress} notes={this.state.notes} handleCompleted={this.handleCompleted} />
        <div className='calendarContainer'>
          <ChangeMonth handleDate={this.handleDate} month={months[this.state.date.getMonth()]} year={this.state.date.getFullYear()} />
            <div className='fullCalendar'>
              <CalendarTable date={this.state.date} notes={this.state.notes} handleDay={this.handleDay} />
            </div>
        </div>
      </div>
    )
  }
}

// CalendarTable
const CalendarTable = ({
  date,
  handleDay,
  notes
}) => {

  date: PropTypes.object.isRequired
  handleDay: PropTypes.func.isRequired
  notes: PropTypes.array.isRequired

  return (
    <div>
      <DaysWeek />
      <DaysMonths date={date} handleDay={handleDay} notes={notes} />
    </div>
  )
}

// ChangeMonth
const ChangeMonth = ({
  handleDate,
  month,
  year
}) => {

  handleDate: PropTypes.func.isRequired
  month: PropTypes.string.isRequired
  year: PropTypes.number.isRequired

    return (
    <div>
      <i onClick={handleDate} className='material-icons arrow prev'>Prev</i>
        <div id='actualDate'>{month} {year}</div>
      <i onClick={handleDate} className='material-icons arrow next'>Next</i>
    </div>
  )
}

// DaysMonths
const sameDate = (date1, date2) => (
  date1.getDate() === date2.getDate() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getFullYear() === date2.getFullYear()
)

const DaysMonths = ({
  date,
  handleDay,
  notes
}) => {

  date: PropTypes.object.isRequired
  handleDay: PropTypes.func.isRequired
  notes: PropTypes.array.isRequired

    let actualDate = new Date(date.getTime())
  actualDate.setDate(1)

  let noteMonth = date
  let actualMonth = actualDate.getMonth()
  let calendar = []

  let firstDayOfMonth = (actualDate.getDay() === 0) ? 7 : actualDate.getDay()

  for (let i = 1; i < firstDayOfMonth; i++) {
    calendar.push({
      'dayClass': 'day',
      'number': ''
    })
  }

  while (actualDate.getMonth() === actualMonth) {
    let dayClass = 'day'
    if (sameDate(actualDate, new Date())) {
      dayClass += ' today'
    }
    if (actualDate.getDay() === 1) {
      dayClass += ' clear'
    }
    if (notes.find((note) => note.date === `${actualDate.getDate()}/${actualDate.getMonth() + 1}/${actualDate.getFullYear()}`)) {
      dayClass += ' note'
    }
    calendar.push({
      'dayClass': dayClass,
      'number': actualDate.getDate()
    })
    actualDate.setDate(actualDate.getDate() + 1)
  }

  if (actualDate.getDay() === 0) {
    for (let i = 7, j = calendar.length % 7; i > j; i--) {
      calendar.push({
        'dayClass': 'day',
        'number': ''
      })
    }
  }

  return (
    <div className='dayContainer'>
      {calendar.map((day, index) => {
        let notesDay = `${day.number}/${noteMonth.getMonth() + 1}/${noteMonth.getFullYear()}`
        return (
          <div
            key={index}
            onClick={handleDay}
            value={notesDay}
            className={day.dayClass}
          >
            {day.number}
          </div>
        )
      })}
    </div>
  )
}

// DaysWeek
const DaysWeek = () => (
  <div className='dayContainer'>
    {daysWeek.map((day, index) => <div className='day daysWeek' key={index}>{day}</div>)}
  </div>
)

// TodoDay
const TodoDay = ({
  todoDate,
  handleNoteKeyPress,
  notes,
  handleCompleted
}) => {

  todoDate: PropTypes.string
  handleNoteKeyPress: PropTypes.func.isRequired
  notes: PropTypes.array.isRequired

  let infoToday = todoDate.split('/')
  let noteDate = `${months[infoToday[1]-1]} ${infoToday[0]}, ${infoToday[2]}`
  let placeholderInsertNote = todoDate ? `${todoDate}: Introdueix una nota` : `Selecciona una data`
  let searchNote = notes.map(note => note.date === todoDate ? note : ' ')
  searchNote = searchNote.filter(note => /\S/.test(note))

  return (
    <div className='todoDay z-depth-4'>
      <h5>{noteDate}</h5>
        {searchNote.length > 0 ?
          <div id='style-5' className='scrollbar'> 
            {searchNote.map((note, index) => (
              <p key={note.id} >
                <label htmlFor={note.id}>{note.description}</label>
              </p>
            ))}
          </div>
        : ''}
    </div>
  )
}


export default Calendar;
