import React from 'react';

import PropTypes from 'prop-types';
import { Box, Grid, Tab, Tabs, Typography, makeStyles, withStyles, useMediaQuery } from '@material-ui/core';


import LastPosts from '../pages/last-posts'
import RandomPost from '../pages/random-post'

export default function TabsPage() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const matches = useMediaQuery('(min-width:1025px)');
  const width = matches ? '50%' : '92%'
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={2}>{children}</Box>}
      </Typography>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  return (
    <Grid container justify="center" >
      <div style={{ width: width }}>
        <div className={classes.root}>
          <StyledTabs
            value={value}
            onChange={handleChange}>
            <StyledTab style={{ marginLeft: 25 }} label="Last Posts" />
            <StyledTab label="Random Post" />
          </StyledTabs>
          <TabPanel value={value} index={0}>
            <LastPosts />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <RandomPost />
          </TabPanel>
        </div>
      </div>
    </Grid>
  );
}
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: 10,
  }
});
const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > div': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: 'black',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);
const StyledTab = withStyles((theme) => ({
  root: {
    borderBottom: '1px solid #DBDBDB',
    textTransform: 'none',
    color: 'black',
    opacity: 0.6,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    '&:focus': {
      opacity: 1,
    },
    '&:hover': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);