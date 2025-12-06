// src/components/ApiDisplay.jsx
import { useState, useEffect } from 'react';

const ApiDisplay = () => {
  const [quote, setQuote] = useState({ content: '', author: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchQuote = async () => {
    try {
      setLoading(true);
      setError(false);
      const response = await fetch('https://api.quotable.io/random?tags=education|inspirational|wisdom');
      
      if (!response.ok) {
        throw new Error('API request failed');
      }
      
      const data = await response.json();
      setQuote({
        content: data.content,
        author: data.author
      });
    } catch (err) {
      console.error('Error fetching quote:', err);
      setError(true);
      // Fallback quotes for when API fails
      const fallbackQuotes = [
        { content: 'Learning is a treasure that follows its owner everywhere.', author: 'Chinese Proverb' },
        { content: 'Education is the most powerful weapon which you can use to change the world.', author: 'Nelson Mandela' },
        { content: 'The beautiful thing about learning is that no one can take it away from you.', author: 'B.B. King' }
      ];
      setQuote(fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-[20px] p-6 lg:p-8 border-l-4 border-primary">
      <div className="flex items-start gap-4">
        {/* Quote Icon */}
        <div className="text-5xl lg:text-6xl text-primary leading-none font-serif">"</div>
        
        <div className="flex-1">
          {loading ? (
            <div className="animate-pulse">
              <div className="h-5 bg-primary/20 rounded mb-3 w-full"></div>
              <div className="h-5 bg-primary/20 rounded mb-3 w-5/6"></div>
              <div className="h-4 bg-primary/20 rounded w-1/3 ml-auto"></div>
            </div>
          ) : (
            <>
              <p className="font-roboto-flex text-lg lg:text-xl text-dark-400 italic mb-4 leading-relaxed">
                {quote.content}
              </p>
              <div className="flex items-center justify-between">
                <p className="font-barlow font-semibold text-dark-300">
                  — {quote.author}
                </p>
                <button 
                  onClick={fetchQuote}
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-barlow text-sm"
                  title="Get new quote"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className={loading ? 'animate-spin' : ''}
                  >
                    <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
                    <path d="M21 3v5h-5" />
                  </svg>
                  New Quote
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      
      {/* API Attribution */}
      <div className="mt-4 pt-4 border-t border-primary/20">
        <p className="font-roboto-mono text-xs text-dark-200 flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Powered by Quotable API
          {error && <span className="text-orange-500 ml-2">(Using fallback)</span>}
        </p>
      </div>
    </div>
  );
};

export default ApiDisplay;
