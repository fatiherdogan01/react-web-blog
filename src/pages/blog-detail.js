import React, { useLayoutEffect, useState } from 'react';

import { makeStyles, useMediaQuery } from '@material-ui/core';

import Markdown from "../components/markdown";
import data from '../data/data'
import NotFound from '../components/not-found'

export default function BlogDetailPage({ match }) {
  const seoUrl = match.params.seoUrl
  const index = data.findIndex(data => data.seoUrl === match.params.seoUrl);
  const content = (index === -1) ? null : require(`../data/markdown/${match.params.seoUrl}.md`)
  const matches = useMediaQuery('(min-width:1025px)');
  const width = matches ? '50%' : '92%'
  const props = { width: width, marginTop: 10, padding: 10, minWidth: 275, color: 'grey', fontWeight: '500' };
  const classes = useStyles(props);

  const [md, setMd] = useState(null);

  useLayoutEffect(() => {
    fetch(content)
      .then((response) => response.text())
      .then((text) => { setMd(text) })
  });
  if (content) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className={classes.root} >
          <Markdown seoUrl={seoUrl} date={data[index].date} source={md} />
        </div>
      </div>

    )
  } else {
    return (<NotFound />
    );
  }
};
const useStyles = makeStyles({

  root: props => ({
    minWidth: props.minWidth,
    width: props.width,
    marginTop: props.marginTop,
    padding: props.padding,

  })
})