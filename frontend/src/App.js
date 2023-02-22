import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/footer';
import Home from './components/home';
import NavBar from './components/navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
