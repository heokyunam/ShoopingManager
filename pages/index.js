import Head from 'next/head'
import Calendar from './components/Calendar';
import TopMenu from './components/TopMenu';
import FoodList from './components/FoodList';
import {format} from "./util";

export default function CalendarPage({weeks}) {
  return (
    <div>
      <Head>
        <title>Shopping Cat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopMenu />
      <Calendar weeks={weeks}/>
      <FoodList />
    </div>
  )
}

export async function getServerSideProps() {
    const now = new Date();

    const res = await fetch(`http://localhost:3000/api/request_food/get?year=${now.getFullYear()}&month=${now.getMonth()+1}`);
    const data = await res.json();

    return {props: {weeks: getWeeks(data)}};
}

const getWeeks = (data) => {
  let weeks = [];
  console.log(data);

  const now = new Date();
  const monthStart = new Date(format(now, "yyyy-MM-01"));
  const weekStart = monthStart.getDay();

  for(let i = 0; i < 5; i++) {
      let days = [];

      for(let j = 0; j < 7; j++) {
          let dayValue = i * 7 + j - weekStart;
          let day = new Date(monthStart.getTime());
          day.setDate(day.getDate() + dayValue);
          
          const dateText = format(day, "yyyy-MM-dd");

          const requests = data.rows
            .filter(value => value.date == dateText)
            .map(value => {
              return {
                "type": "blue",
                "text": value.text
              }
            });

          days.push({
              "date": dateText,
              "month": day.getMonth(),
              "day": day.getDate(),
              "menu": requests
          })
      }

      weeks.push(days);
  }

  return weeks;
}