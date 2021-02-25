import Head from 'next/head'
import CalendarPage from './components/Calendar';
import TopMenu from './components/TopMenu';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shopping Cat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopMenu />
      <CalendarPage />
    </div>
  )
}
