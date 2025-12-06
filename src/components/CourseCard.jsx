// src/components/CourseCard.jsx

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-[20px] overflow-hidden border-2 border-[#EFEFEF] hover:shadow-xl transition-all duration-300 group">
      {/* Image Container */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={course.image}
          alt={course.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        
        {/* Level Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-4 py-1.5 rounded-full text-sm font-roboto-mono font-medium ${
            course.level === 'Beginner' 
              ? 'bg-[#22C55E] text-white' 
              : course.level === 'Intermediate'
              ? 'bg-[#F59E0B] text-white'
              : 'bg-[#EF4444] text-white'
          }`}>
            {course.level}
          </span>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-4 py-1.5 rounded-full text-sm font-roboto-mono font-medium bg-primary text-white">
            {course.category}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6">
        {/* Title */}
        <h3 className="font-roboto-flex font-semibold text-xl text-[#1F1F1F] mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
          {course.name}
        </h3>
        
        {/* Description */}
        <p className="font-roboto-flex text-[16px] text-[#666666] mb-5 line-clamp-2 leading-relaxed">
          {course.description}
        </p>

        {/* Instructor */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-[#EFEFEF] rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-[#666666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <span className="font-roboto-flex text-[15px] text-[#0F0F0F]">{course.instructor}</span>
        </div>

        {/* Meta Info */}
        <div className="flex items-center justify-between py-4 border-t border-[#EFEFEF]">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-roboto-mono text-sm text-[#666666]">{course.duration}</span>
          </div>
          <div className="font-roboto-flex font-bold text-primary text-2xl">
            ${course.price}
          </div>
        </div>

        {/* Enroll Button */}
        <button className="w-full mt-4 py-4 bg-primary text-white font-roboto-flex font-medium text-[16px] rounded-[14px] hover:bg-[#5c2fd6] transition-all duration-300 flex items-center justify-center gap-3 group/btn">
          <span>Enroll Now</span>
          <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
