// src/components/StatsSection.jsx

const StatsSection = () => {
  return (
    <div className="w-full max-w-[1820px] mx-auto mt-[20px] border-2 border-dark-100 rounded-20 p-[20px] flex justify-center items-center gap-[20px]">
      {/* Stat 1 */}
      <div className="w-[280px] h-[150px] bg-dark-100 rounded-14 p-[30px_20px] flex flex-col items-center">
        <h4 className="font-roboto-mono font-medium text-[18px] leading-[27px] uppercase text-dark-300 text-center">CLIENTS</h4>
        <div className="font-roboto-flex font-semibold text-[60px] leading-[90px] uppercase text-primary text-center">10+</div>
      </div>
      
      {/* Stat 2 */}
      <div className="w-[280px] h-[150px] bg-dark-100 rounded-14 p-[30px_20px] flex flex-col items-center">
        <h4 className="font-roboto-mono font-medium text-[18px] leading-[27px] uppercase text-dark-300 text-center">PROJECTS</h4>
        <div className="font-roboto-flex font-semibold text-[60px] leading-[90px] uppercase text-primary text-center">200+</div>
      </div>
      
      {/* Stat 3 */}
      <div className="w-[280px] h-[150px] bg-dark-100 rounded-14 p-[30px_20px] flex flex-col items-center">
        <h4 className="font-roboto-mono font-medium text-[18px] leading-[27px] uppercase text-dark-300 text-center">HAPPY CLIENTS</h4>
        <div className="font-roboto-flex font-semibold text-[60px] leading-[90px] uppercase text-primary text-center">100%</div>
      </div>
      
      {/* Stat 4 */}
      <div className="w-[280px] h-[150px] bg-dark-100 rounded-14 p-[30px_20px] flex flex-col items-center">
        <h4 className="font-roboto-mono font-medium text-[18px] leading-[27px] uppercase text-dark-300 text-center">FOLLOWER</h4>
        <div className="font-roboto-flex font-semibold text-[60px] leading-[90px] uppercase text-primary text-center">420K</div>
      </div>
      
      {/* Stat 5 */}
      <div className="w-[280px] h-[150px] bg-dark-100 rounded-14 p-[30px_20px] flex flex-col items-center">
        <h4 className="font-roboto-mono font-medium text-[18px] leading-[27px] uppercase text-dark-300 text-center">YEARS OF EXPERIENCE</h4>
        <div className="font-roboto-flex font-semibold text-[60px] leading-[90px] uppercase text-primary text-center">280+</div>
      </div>
      
      {/* Know More Button */}
      <button className="w-[280px] h-[150px] bg-dark-100 rounded-14 flex flex-col justify-center items-center gap-[10px]">
        <div className="w-[68px] h-[68px] bg-primary rounded-full flex items-center justify-center">
          <div className="w-[28px] h-[28px] bg-white"></div>
        </div>
        <span className="font-roboto-mono font-medium text-[20px] leading-[30px] uppercase text-dark-300">KNOW MORE</span>
      </button>
    </div>
  );
};

export default StatsSection;