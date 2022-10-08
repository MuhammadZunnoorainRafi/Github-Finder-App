import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import Alert from './Components/Layout/Alert';
import Home from './Pages/Home';
import About from './Pages/About';
import User from './Pages/User';
import NotFound from './Pages/NotFound';
import Footer from './Components/Layout/Footer';
import { GithubProvider } from './Context/github/GithubContext';
import { AlertProvider } from './Context/alert/AlertContext';

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />

            <main className="container mx-auto">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
