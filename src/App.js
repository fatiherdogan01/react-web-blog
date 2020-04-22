import React from "react";

import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { makeStyles, Grid, Toolbar, AppBar } from '@material-ui/core';

import About from './pages/about.js'
import Main from './components/tabs.js'
import BlogDetailPage from './pages/blog-detail.js'
import NotFound from './components/not-found.js'
import { LinkedinIcon, GithubIcon } from './components/icons'
const title = '{ myBlog }'

export default function App() {

  const classes = useStyles();
  return (
    <>
      <Router >
        <AppBar position="static" style={{ background: 'white' }}>
          <Toolbar>
            <Grid container direction="row" justify="flex-start" alignItems="center"  >
              <NavLink to="/" className={classes.title}>{title}</NavLink>
            </Grid>
            <Grid container direction="row" justify="flex-end" alignItems="center"  >
              <NavLink to="/about" activeStyle={active} className={classes.navLink}>About</NavLink>
              <a className={classes.link} href="https://www.linkedin.com/in/fatiherdogan01/" rel="noopener noreferrer" target="_blank"><LinkedinIcon /></a>
              <a className={classes.link} href="https://github.com/fatiherdogan01/" rel="noopener noreferrer" target="_blank"><GithubIcon /></a>
            </Grid>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route exact path='/about' component={About} />
          <Route exact path='/blog/:seoUrl' component={BlogDetailPage} />
          <Route exact path='/' component={Main} />
          <Route component={NotFound}></Route>
        </Switch>
        
      </Router>
    </>
  );

}
const active = {
  color: '#40AEF8',
  fontWeight: '500',
  opacity: 1,
}
const useStyles = makeStyles(theme => ({

  link: {
    marginRight: 33,
    textDecoration: 'none',
    color: 'black',
    fontWeight: '500',
    opacity: 0.6,
    '&:hover': {
      opacity: 1,
    }
  },
  button: {
     backgroundColor: '#434E5E',
     height:30,
     width:30,
     marginLeft:40
  },
  footer: {
    marginTop:100,
    color: 'white',
    backgroundColor: '#434E5E',
  },
  navLink: {
    paddingRight: 30,
    display: 'none',
    [theme.breakpoints.up(370)]: {
      display: 'block',
    },
    textDecoration: 'none',
    color: 'black',
    fontWeight: '500',
    opacity: 0.6,
    '&:hover': {
      opacity: 1,
    }
  },
  title: {
    textDecoration: 'none',
    flexGrow: 1,
    fontSize: 24,
    paddingBottom: 5,
    color: 'black',
    fontWeight: '600',
  }
}));