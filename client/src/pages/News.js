import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { styles } from '../css/styles';
import Sidebar from '../components/layout/Sidebar';
import { connect } from 'react-redux';
import { getNews } from '../actions/news';
import NewsArticle from '../components/layout/NewsArticle';

const News = ({ getNews, articles }) => {
  useEffect(() => {
    getNews();
  }, []);
  return (
    <section className='container static flex-1 h-full max-h-full min-w-full flex'>
      <Sidebar />
      <section
        className={styles.card.concat('w-full h-full flex flex-col flex-1 m-8')}
      >
        {articles.map((article) => {
          return <NewsArticle article={article} />;
        })}
      </section>
    </section>
  );
};

News.propTypes = {
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  articles: state.news.articles,
  loading: state.news.loading,
});

export default connect(mapStateToProps, { getNews })(News);
