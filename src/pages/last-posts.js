import React, { useState } from 'react';

import { Link } from "react-router-dom";
import { CardMedia, Chip, makeStyles } from '@material-ui/core';
import _ from 'lodash'

import data from '../data/data'

export default function LastPost() {
  const [category, setCategory] = useState(null);
  function filterCategory(category) {
    setCategory(category);
  }
  const classes = useStyles();
  return (
    <>
      <div style={{ padding: 10, margin: 10 }}>
        {
          _.unionBy(data, 'category').map((item, i) =>
            <Chip className={classes.chip} label={item.category} key={i} onClick={() => filterCategory(item.category)} />
          )}
      </div>
      {
        data
          .filter(item => item.category === category || category === null)
          .map(item => (

            <div key={item.seoUrl} className={classes.root}>
              <Link style={{ textDecoration: 'none' }} to={`/blog/${item.seoUrl}`}>
                <h5 className={classes.date}>{item.date}</h5>
                <CardMedia className={classes.image}
                  component="img"
                  alt={`${item.seoUrl}`}
                  image={require(`../data/images/${item.seoUrl}.png`)}
                />
                <h1 className={classes.link}>{item.title}</h1>
              </Link>
            </div>

          )
          )}
    </>
  );
}
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 20,
    borderRadius: 6,
    border: '1px solid white',
    boxShadow: "1px 1px 2px 1px #DBDBDB",
  },
  chip: {
    marginLeft: 10,
    marginBottom: 10,
    color: 'black',
    backgroundColor: '#D5D4D2',
    '&:focus': {
      color: "white",
      backgroundColor: '#40AEF8',
    }
  },
  image: {
    width: '100%',
  },
  date: {
    color: 'grey',
    fontWeight: '500',
    paddingLeft: 20
  },
  link: {
    paddingLeft: 20,
    color: 'black',
    fontWeight: '600',
    fontSize: 24,
    opacity: 0.8,
    '&:hover': {
      opacity: 1,
    },
  }

});
