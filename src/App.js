import './App.css';
import { CalendarPage } from './pages/Calendar';
import { TopMenu } from './pages/TopMenu';

function App() {
  return (
    <div className="App">
      <TopMenu />
      <CalendarPage />
    </div>
  );
}

export default App;
