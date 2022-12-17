import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';
import Axios from 'axios'

const App: React.FC = () => {
  const [articles, setArticles] = useState([]);
 

  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios(
        'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5e972da1daa348e8a612eecf2acc3423'
      );
      setArticles(result.data.articles);
    };
    fetchData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route  path="/" element={<ArticleList articles={articles}/>} />
        <Route  path="/article/:title" element={<ArticleDetail articles={articles}/>} />
      </Routes>
    </Router>
  );
};

export default App;
