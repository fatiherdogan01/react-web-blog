import React from 'react'

import { makeStyles, Grid, Chip } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { TikIcon, BackendIcon, FrontendIcon, OtherIcon } from '../components/icons'

export default function About() {
  const classes = useStyles();

  const link = ["https://play.google.com/store/apps/details?id=com.yks.sistemi", "https://play.google.com/store/apps/details?id=com.efsoft.colorwheel", "https://play.google.com/store/apps/details?id=com.fitnesshome"]
  const tikIcon = <TikIcon className={classes.tikIcon} />
  const backendIcon = <Avatar className={classes.avatar}> <BackendIcon style={{ width: 34, height: 44 }} /></Avatar>
  const frontendIcon = <Avatar className={classes.avatar}> <FrontendIcon style={{ width: 44, height: 37 }} /></Avatar>
  const otherIcon = <Avatar className={classes.avatar}> <OtherIcon style={{ width: 44, height: 42 }} /></Avatar>
  const profile = <Avatar className={classes.profileAvatar}> <img width='150' height='150' alt='profile' src='https://avatars0.githubusercontent.com/u/13077861?s=400&u=4ec073c67443e23eb20ded119c9ff5ee3316da82&v=4' /></Avatar>
  const imageSrc = 'code.png'
  return (
    <div style={{ backgroundColor: '#F7F8F9' }}>
      <Grid className={classes.blueContainer} container direction="column" justify="center" alignItems="center">
        {profile}
        <h1>Fatih Erdoğan</h1>
        <h3>Full Stack Developer</h3>
      </Grid>
      <h1 className={classes.mainTitle}>Skills</h1>
      <Grid container direction="row" justify="center" alignItems="center">
        <div className={classes.containerBox} >
          {frontendIcon}
          <p className={classes.paragraph}>
            <h3 className={classes.title}>Frontend</h3>
            {tikIcon}React/Redux <br />
            {tikIcon}Javascript<br />
            {tikIcon}HTML/CSS<br />
            {tikIcon}Figma<br />
            {tikIcon}PS
          </p>
        </div>

        <div className={classes.containerBox}>
          {backendIcon}
          <p className={classes.paragraph}>
            <h3 className={classes.title}>Backend/Mobile</h3>
            {tikIcon}C# <br />
            {tikIcon}Asp.NET<br />
            {tikIcon}SwiftUI<br />
            {tikIcon}Kotlin<br />
            {tikIcon}React Native
          </p>
        </div>

        <div className={classes.containerBox}>
          {otherIcon}
          <p className={classes.paragraph}>
            <h3 className={classes.title}>Others</h3>
            {tikIcon}Unity<br />
            {tikIcon}SQL<br />
            {tikIcon}Machine Learning<br />
            {tikIcon}Node.js
          </p>
        </div>
      </Grid>

      <h1 className={classes.mainTitle}>Projects</h1>
      <Grid container direction="row" justify="center" alignItems="center">
        <div className={classes.containerBox} >
          <div className={classes.containerImage}>
            <img className={classes.image} width='100%' height='100%' alt='code' src={imageSrc} />
            <div className={classes.text}><h1>Mobile App</h1></div>
          </div>
          <a href={link[0]} rel="noopener noreferrer" target="_blank" className={classes.link} >TYT AYT 2020</a>
          <Chip className={classes.chip} label='React Native' />
          <Chip className={classes.chip} label='Android' />
        </div>


        <div className={classes.containerBox} >
          <div className={classes.containerImage}>
            <img className={classes.image} width='100%' height='100%' alt='code'  src={imageSrc} />
            <div className={classes.text}><h1>Mobile Game</h1></div>
          </div>
          <a href={link[1]} rel="noopener noreferrer" target="_blank" className={classes.link} >ColorWheel</a>
          <Chip className={classes.chip} label='Unity' />
          <Chip className={classes.chip} label='Android' />
        </div>


        <div className={classes.containerBox} >
          <div className={classes.containerImage}>
            <img className={classes.image} width='100%' height='100%' alt='code'  src={imageSrc} />
            <div className={classes.text}><h1>Mobile App</h1></div>
          </div>
          <a href={link[2]} rel="noopener noreferrer" target="_blank" className={classes.link} >Fitness Home</a>
          <Chip className={classes.chip} label='React Native' />
          <Chip className={classes.chip} label='Android' />
        </div>

      </Grid>
    </div>
  )
}
const useStyles = makeStyles({

  containerBox: {
    height: 350,
    width: 300,
    minWidth: 300,
    backgroundColor: 'white',
    boxShadow: "1px 1px 2px 2px #DBDBDB",
    margin: 30,
    marginBottom: 100,
  },
  text: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  image: {
    filter: 'brightness(0.5)',
  },
  containerImage: {
    height: '60%',
    width: '100%',
    position: 'relative',
    textAlign: 'center',
    color: 'white',
  },
  title: {
    justifyContent: 'center',
    display: 'flex',
    color: '#58677C',
  },
  mainTitle: {
    justifyContent: 'center',
    display: 'flex',
    color: '#58677C',
    marginTop: 50,
    marginBottom: 50
  },
  blueContainer: {
    backgroundColor: '#41A4F5',
    width: '100%',
    height: 360,
    color: 'white',
    display: 'flex',
    marginBottom: 100,
  },

  avatar: {
    top: -40,
    left: 110,
    width: 80,
    height: 80,
    backgroundColor: '#41A4F5'
  },
  profileAvatar: {
    width: 150,
    height: 150,
  },

  tikIcon: {
    width: 15,
    height: 15,
    color: '#41A4F5',
    paddingRight: 20,
    paddingLeft: 20
  },
  chip: {
    marginLeft: 10,
    marginBottom: 10
  },
  paragraph: {
    fontSize: 18,
    lineHeight: 1.8,
    color: '#58677C',
    marginTop: -40
  },
  link: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    display: 'flex',
    textDecoration: 'none',
    color: '#58677C',
    fontSize: 20,
    fontWeight: '700',
    '&:hover': {
      opacity: 1,
      color: '#363A3F',
    }
  },
});



