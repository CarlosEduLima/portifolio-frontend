import Head from 'next/head'
import Link from 'next/link'
import Main from '../components/main'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Github from '@material-ui/icons/GitHub'
import LinkedIn from '@material-ui/icons/LinkedIn'
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  container: {
    minHeight: '100vh',
    padding: '0 0.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  landingGrid: {
    background: 'linear-gradient(to right, #355c7d, #6c5b7b, #c06c84);',
    textAlign: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  avatarImg: {
    height: '250px',
    width:'185px',
    paddingTop: '6em',
    borderRadius:'50%'
  },

  bannerText: {
    backgroundColor: 'black',
    opacity: .8,
    width: '75%',
    margin: 'auto',
    borderRadius: '10px',
  },

  title: {
    fontSize: '66px',
    fontWeight: 'bold',
    color: 'white',
  },

  hr: {
    width: '50%',
    margin: 'auto',
  },

  text: {
    color: 'white',
    fontSize: '20px',
    padding: '1em',
  },

  socialLinks: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '50%',
    margin: 'auto',
  },

  list: {
    color: 'white',
    fontSize: '5em',
    padding: '16px',
  },
  iconSize: {
    fontSize: '50px'
  }

}));
export default function Home() {
  const classes = useStyles()
  return (
    <>
      <Main>
        <div className={classes.container}>
          <Head>
            <title>Home</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Grid container className={classes.landingGrid}>
            <Grid item xs={12}>
              <img
                src="https://avatarsapphire.s3.us-east-2.amazonaws.com/IMG_20200714_114407+(2).jpg"
                alt="avatar"
                className={classes.avatarImg}
              />

              <div className={classes.bannerText}>
                <h1 className={classes.title}>Desenvolvedor Web</h1>

                <hr className={classes.hr} />

                <p className={classes.text}>NodeJS | Express | PostgreSQL | SQL | HTML/CSS | JavaScript | React </p>
                  <Grid container>
                    <Grid item xs>
                      <a href="https://www.linkedin.com/in/carlos-eduardo-alves-de-lima-a0b989189/" rel="noopener noreferrer" target="_blank">
                        <LinkedIn className={classes.iconSize} />
                      </a>
                    </Grid>
                    <Grid item xs>
                      <a href="https://github.com/CarlosEduLima" rel="noopener noreferrer" target="_blank">
                        <Github className={classes.iconSize} />
                      </a>
                    </Grid>
                  </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
      </Main>
    </>
  )
}
