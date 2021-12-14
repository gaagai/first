import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';

import useStyles from './styles';
import NewsCard from '../newsCard/NewsCard';

const infoCards = [
  { color: '#239d89', title: 'Latest News', text: 'Give me the latest news' },
  {
    color: '#b7164d',
    title: 'News by Terms',
    info: 'Bitcoin, PlayStation 5, Elon Musk, Covid19...',
    text: "What's up with Elon Musk",
  },
  {
    color: '#874c68',
    title: 'News by Sources',
    info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...',
    text: 'Give me the news from CNN',
  },
  {
    color: '#c99d17',
    title: 'News by Categories',
    info: 'Business, Entertainment, General, Health, Science, Sports, Technology',
    text: 'Give me the latest Technology news',
  },
];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems='stretch'
          spacing={3}
        >
          {infoCards.map((card) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={3}
              className={classes.infoCards}
              key={card.title}
            >
              <div
                className={classes.card}
                style={{ backgroundColor: card.color }}
              >
                <Typography variant='h5'>{card.title}</Typography>
                {card.info ? (
                  <Typography variant='h6'>
                    <strong>{card.title.split(' ')[2]}:</strong>
                    <br />
                    {card.info}
                  </Typography>
                ) : null}
                <Typography variant='h6'>
                  <strong>
                    Try saving: <br />{' '}
                  </strong>
                  <strong className='say-that'>{card.text}</strong>{' '}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems='stretch'
        spacing={3}
      >
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={6} lg={6} style={{ display: 'flex' }}>
            <NewsCard
              key={i}
              article={article}
              i={i}
              activeArticle={activeArticle}
            />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
