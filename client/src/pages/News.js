import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { styles } from '../css/styles';
import Sidebar from '../components/layout/Sidebar';
import { connect } from 'react-redux';
import { getNews } from '../actions/news';

const News = ({ getNews, articles }) => {
  useEffect(() => {
    getNews();
  }, []);
  return (
    <section className='container static flex-1 h-full max-h-full min-w-full flex'>
      <Sidebar />
      <section
        className={styles.card.concat('w-full h-full flex flex-col m-8')}
      >
        {articles.map((article) => {
          return (
            <section className='flex mx-2 py-4 text-gray-900 border-b border-gray-400'>
              <div className='mr-4 w-1/4'>IMG Container</div>
              <div className=''>
                <h3 className={styles.H3.concat('text-center')}>
                  {article.title}
                </h3>
                <p>{article.description}</p>
              </div>
            </section>
          );
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
