import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Login from './pages/Login'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Chatbot from './components/Chatbot';
// Pages
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Registration from './pages/Registration';
import Contact from './pages/Contact';
import Batches from './pages/Batches';
// import Offers from './pages/Offers';
import Admin from './pages/Admin';
import AddCourse from './admin/AddCourse';
import AddBatch from './admin/AddBatch';
import AddOffer from './admin/AddOffer';
import AddTeacher from './admin/AddTeacher';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/batches" element={<Batches />} />
            {/* <Route path="/offers" element={<Offers />} /> */}
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/add-course" element={<AddCourse />} />
            <Route path="/admin/add-batch" element={<AddBatch />} />
            <Route path="/admin/add-offer" element={<AddOffer />} />
            <Route path="/admin/add-teacher" element={<AddTeacher />} />
            <Route path="/login" element={<Login />} /> {/* ✅ Add this line */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
         {/* ✅ Floating WhatsApp & Call buttons */}
        <FloatingButtons />
        <Chatbot />
        <Footer />
      </div>
    </Router>
  );
};

// Simple 404 page
const NotFound = () => (
  <div className="text-center py-20">
    <h1 className="text-4xl font-bold text-red-600 mb-4">404</h1>
    <p className="text-gray-700">Page Not Found</p>
  </div>
);

export default App;
