// src/components/CourseList.jsx
import CourseCard from './CourseCard';

const CourseList = ({ courses, searchTerm }) => {
  if (courses.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <div className="w-24 h-24 bg-bg-light rounded-full flex items-center justify-center mb-6">
          <svg className="w-12 h-12 text-text-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="font-roboto-flex font-semibold text-xl text-text-dark mb-2">No courses found</h3>
        <p className="font-roboto-flex text-text-gray text-center max-w-md">
          {searchTerm 
            ? `We couldn't find any courses matching "${searchTerm}". Try adjusting your search.`
            : "No courses available in this category. Please check back later."
          }
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseList;