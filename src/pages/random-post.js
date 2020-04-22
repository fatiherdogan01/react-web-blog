import React, { useLayoutEffect, useState } from 'react';

import Markdown from "../components/markdown";
import data from '../data/data'

export default function RandomPost() {
  const len = data.length
  const index = Math.floor(Math.random() * len);
  const seoUrl = data[index].seoUrl
  const content = require(`../data/markdown/${seoUrl}.md`)
  const [md, setMd] = useState(null);

  useLayoutEffect(() => {
    fetch(content)
      .then((response) => response.text())
      .then((text) => { setMd(text) })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (<Markdown seoUrl={seoUrl} date={data[index].date} source={md} />);
};

