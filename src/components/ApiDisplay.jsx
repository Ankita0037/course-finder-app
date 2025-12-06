// src/components/ApiDisplay.jsx
import { useState, useEffect } from 'react';

const ApiDisplay = () => {
  const [quote, setQuote] = useState({ content: '', author: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote({
        content: data.content,
        author: data.author
      });
    } catch (error) {
      console.error('Error fetching quote:', error);
      setQuote({
        content: 'Learning is a treasure that follows its owner everywhere.',
        author: 'Chinese Proverb'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-14 p-6 border-l-4 border-primary">
      <div className="flex items-start gap-4">
        <div className="text-4xl text-primary">"</div>
        <div className="flex-1">
          {loading ? (
            <div className="animate-pulse">
              <div className="h-4 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            </div>
          ) : (
            <>
              <p className="font-roboto-flex text-lg text-dark-400 italic mb-2">
                "{quote.content}"
              </p>
              <p className="font-barlow font-medium text-dark-300 text-right">
                — {quote.author}
              </p>
            </>
          )}
        </div>
      </div>
      <button
        onClick={fetchQuote}
        className="mt-4 px-4 py-2 text-sm bg-primary text-white font-barlow font-medium rounded-lg hover:bg-opacity-90 transition"
      >
        New Quote
      </button>
    </div>
  );
};

export default ApiDisplay;