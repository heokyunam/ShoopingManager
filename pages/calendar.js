import Head from 'next/head'
import Calendar from './components/Calendar';
import TopMenu from './components/TopMenu';
import FoodList from './components/FoodList';

export default function CalendarPage() {
  return (
    <div>
      <Head>
        <title>Shopping Cat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopMenu />
      <Calendar />
      <FoodList />
    </div>
  )
}
