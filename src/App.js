import React, { useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './components/newsCards/NewsCards';

const KEY = process.env.REACT_APP_ALAN;

const App = () => {
  const [articles, setArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);

  useEffect(() => {
    alanBtn({
      key: KEY,
      onCommand: ({ command, articles }) => {
        if (command === 'newHeadlines') {
          setArticles(articles);
          setActiveArticle(-1);
        } else if (command === 'highlight') {
          setActiveArticle((prevArticle) => prevArticle + 1);
        }
      },
    });
  }, []);

  return (
    <div className='app'>
      <div className='top'>
        <h1 className='main-title'>Ask for the NEWS</h1>
        {!articles.length ? (
          <p className='hint'>
            (First press the Mic icon at the lower right corner and say 'Hi')
          </p>
        ) : null}
        <NewsCards articles={articles} activeArticle={activeArticle} />
      </div>
      <div className='footer'>
        Created by{' '}
        <a href='https://galagai.vercel.app/portfolio' target='_blank'>
          Gal Agai
        </a>
        ©
      </div>
    </div>
  );
};

export default App;
