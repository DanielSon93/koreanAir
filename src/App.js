import Header from './components/header/Header';
import Reservation from './components/reservation/Reservation';
import Convenience from './components/convenience/Convenience';
import Notice from './components/notice/Notice';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Event from './components/etc/Event';

function App() {
  return (
    <>
      <Header />
      <Event />
      <Reservation />
      <Convenience />
      <Notice />
      <Experience />
      <Footer />
    </>
  );
}

export default App;
