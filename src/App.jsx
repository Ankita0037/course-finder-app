// src/App.jsx
import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SearchBar from './components/SearchBar';
import CourseList from './components/CourseList';
import { courses, categories } from './data/courses';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter courses
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section with Stats - Full Width */}
      <HeroSection />
      
      {/* Course Finder Section - Assignment Requirement */}
      <main className="px-4 lg:px-[50px] py-6 lg:py-8">
        <section className="mt-8 lg:mt-16 mb-8 lg:mb-16">
          <h2 className="font-roboto-flex font-semibold text-3xl lg:text-5xl text-dark-400 mb-2 text-center">
            Course Finder
          </h2>
          <p className="font-roboto-flex text-base lg:text-xl text-dark-300 mb-8 lg:mb-12 text-center max-w-3xl mx-auto px-4">
            Browse our catalog of professional courses. Use the search to find exactly what you need.
          </p>
          
          <SearchBar 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories}
          />
          
          <div className="mb-6 lg:mb-8 flex items-center justify-between">
            <p className="font-barlow text-sm lg:text-base text-dark-300">
              Showing <span className="font-semibold text-primary">{filteredCourses.length}</span> of <span className="font-semibold">{courses.length}</span> courses
            </p>
          </div>
          
          {filteredCourses.length > 0 ? (
            <CourseList courses={filteredCourses} />
          ) : (
            <div className="text-center py-12 lg:py-16 bg-dark-100 rounded-[20px]">
              <h3 className="font-roboto-flex font-semibold text-xl lg:text-2xl text-dark-400 mb-4">
                No courses found
              </h3>
              <p className="font-roboto-flex text-sm lg:text-base text-dark-300">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-dark-100 py-6 lg:py-8 mt-8 lg:mt-16">
        <div className="px-4 lg:px-[50px] text-center">
          <p className="font-barlow text-sm lg:text-base text-dark-300">
            © {new Date().getFullYear()} NextGen Digital Solutions. Assignment for Marketing Mojito.
          </p>
          <p className="font-roboto-mono text-xs lg:text-sm text-dark-200 mt-2">
            React App with API Integration • Responsive Design • Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;