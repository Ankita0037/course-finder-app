// src/components/SearchBar.jsx

const SearchBar = ({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, categories }) => {
  return (
    <div className="w-full bg-[#EFEFEF] rounded-[20px] p-4 lg:p-6 mb-4">
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 items-stretch lg:items-center">
        {/* Search Input */}
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search courses......"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-[48px] lg:h-[56px] px-4 lg:px-6 rounded-[14px] font-roboto-flex text-[14px] lg:text-[16px] border-2 border-[#D9D9D9] focus:border-primary focus:outline-none bg-white"
          />
        </div>
        
        {/* Dropdown menu */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="h-[48px] lg:h-[56px] px-4 lg:px-5 rounded-[14px] font-roboto-flex text-[14px] lg:text-[16px] border-2 border-[#D9D9D9] focus:border-primary focus:outline-none bg-white w-full lg:w-auto lg:min-w-[200px]"
        >
          <option value="All">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        
        {/* Clear Filters Button */}
        <button 
          onClick={() => {
            setSearchTerm('');
            setSelectedCategory('All');
          }}
          className="h-[48px] lg:h-[56px] px-6 lg:px-8 bg-primary text-white font-roboto-flex font-medium text-[14px] lg:text-[16px] rounded-[14px] hover:bg-[#5c2fd6] transition-all duration-300"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default SearchBar;