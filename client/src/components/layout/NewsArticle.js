import React from 'react';
import PropTypes from 'prop-types';
import { styles } from '../../css/styles';

const imgPlaceholder =
  'https://nbhc.ca/sites/default/files/styles/article/public/default_images/news-default-image%402x_0.png?itok=d03WAFvJ';

const NewsArticle = ({ article }) => {
  return (
    <section className='flex mx-2 py-4 text-gray-900 border-b border-gray-400'>
      <div className='w-1/4'>
        <a href={article.url}>
          <img
            src={article.urlToImage ? article.urlToImage : imgPlaceholder}
            className='rounded'
            alt=''
          />
        </a>
      </div>
      <div className='w-3/4 ml-6'>
        <a href={article.url} className={styles.H2.concat('text-center')}>
          {article.title}
        </a>
        <p>{article.description}</p>
      </div>
    </section>
  );
};

NewsArticle.propTypes = {
  article: PropTypes.object.isRequired,
};

export default NewsArticle;
