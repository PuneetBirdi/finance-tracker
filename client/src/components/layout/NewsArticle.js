import React from 'react';
import PropTypes from 'prop-types';
import { styles } from '../../css/styles';

const NewsArticle = ({ article }) => {
  return (
    <section className='flex mx-2 py-4 text-gray-900 border-b border-gray-400'>
      <div className='w-1/3'>
        <img src={article.urlToImage} className='rounded' alt='' />
      </div>
      <div className='w-2/3 ml-6'>
        <a href={article.url} className={styles.H3.concat('text-center')}>
          {article.title}
        </a>
        <p>{article.description}</p>
      </div>
    </section>
  );
};

NewsArticle.propTypes = {};

export default NewsArticle;
