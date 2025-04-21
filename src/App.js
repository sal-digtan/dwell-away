import './App.css';
import Navigation from './components/Navigation';
import TopBar from './components/TopBar';
import Hero from './components/Hero'
import Residence from './components/Residence';
import Special from './components/Special';
import HolidayListing from './components/HolidayListing';
import Testimonial from './components/Testimonial';
import LatestBlog from './components/LatestBlog';
import Partners from './components/Partners';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutHero from './components/AboutHero';
import AboutIntro from './components/AboutIntro';
import AboutFounder from './components/AboutFounder';
import { useLocation } from 'react-router-dom'
import ContactForm from './components/ContactForm';
import Listing from './components/Listing';
import ListingDetail from './components/ListingDetail';
import ListingDetailForm from './components/ListingDetailForm';
import ListingDetailFeatures from './components/ListingDetailFeatures';
import ListingDetailBrowse from './components/ListingDetailBrowse';
import Preview from './components/Preview';
import Checkout from './components/Checkout';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {

  const location = useLocation()
  console.log(location);

  return (
    <div className="App">
      {/* <Router> */}
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<div>
          <TopBar />
          <Navigation />
          <Hero />
          <Residence />
          <Special />
          <HolidayListing />
          <Testimonial />
          <LatestBlog />
          <Partners />
          <Newsletter />
          <Footer />
        </div>}>
        </Route>
        <Route path='/about' element={<div>
          <TopBar />
          <Navigation />
          <AboutHero />
          <AboutIntro />
          <AboutFounder />
          <Footer />
        </div>}>
        </Route>
        <Route path='/contact' element={<div>
          <TopBar />
          <Navigation />
          <AboutHero />
          <ContactForm />
          <Footer />
        </div>}>
        </Route>
        <Route path='/listing' element={<div>
          <TopBar />
          <Navigation />
          <AboutHero />
          <Listing />
          <Footer />
        </div>}>
        </Route>
        <Route path='/listing-detail' element={<div>
          <TopBar />
          <Navigation />
          <ListingDetail />
          <ListingDetailForm />
          <ListingDetailFeatures />
          <ListingDetailBrowse />
          <Footer />
        </div>}>
        </Route>
        <Route path='/preview' element={<div>
          <TopBar />
          <Navigation />
          <Preview />
          <Footer />
        </div>}>
        </Route>
        <Route path='/checkout' element={<div>
          <TopBar />
          <Navigation />
          <Checkout />
          <Footer />
        </div>}>
        </Route>
        <Route path='/blog' element={<div>
          <TopBar />
          <Navigation />
          <Blog />
          <Footer />
        </div>}>
        </Route>
        <Route path='/blog-detail' element={<div>
          <TopBar />
          <Navigation />
          <BlogDetail />
          <Footer />
        </div>}>
        </Route>
        <Route path='/dashboard' element={<div>
          <TopBar />
          <Navigation />
          <Dashboard />
          <Footer />
        </div>}>
        </Route>
        <Route path='/login' element={<div>
          <Login />
        </div>}>
        </Route>
        <Route path='/signup' element={<div>
          <Signup />
        </div>}>
        </Route>
      </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
