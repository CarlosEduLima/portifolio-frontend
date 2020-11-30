import Head from 'next/head'
import Main from '../../components/main'
import { makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    contactBody: {
        margin: 'auto',
        position: 'fixed',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        paddingTop: '2em',
    },
    contactGrid: {
        textAlign: 'center',
        justifyContent: 'center',
        width: '80%',
        height: '550px',
        background: 'white',
        color: 'black',
        marginBottom: '20px',
    },
    title: {
        fontFamily: 'sans-serif'
    },
    text: {
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontSize: '16px',
    },
    list: {
        fontSize: '66px',
        paddingRight: '5rem'
    },
}));
export default function AboutMe() {
    const classes = useStyles()
    return (
        <>
            <Main>
                <div className={classes.contactBody}>
                    <Head>
                        <title>Contatos</title>
                    </Head>
                    <Grid container className={classes.root} spacing={3}>
                        <Grid item xs={12}>
                            <Grid container justify="center" spacing={3}>
                                <Grid item>
                                    <h2 className={classes.title}>Carlos Eduardo Alves de Lima</h2>
                                    <img
                                        src="https://avatarsapphire.s3.us-east-2.amazonaws.com/IMG_20200714_114407+(2).jpg"
                                        alt="avatar"
                                        style={{ height: '250px' }}
                                    />
                                </Grid>
                                <Grid item>
                                    <h2 className={classes.title} >Entre em contato comigo</h2>
                                    <hr/>

                                    <div className={classes.list}>
                                        <List>
                                            <ListItem>
                                                <ListItemText disableTypography className={classes.text}>
                                                       Celular -  (61) 9 84484235
                                                </ListItemText>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText disableTypography className={classes.text}>
                                                        E-mail - carlos.lima.exe@gmail.com
                                                </ListItemText>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText disableTypography className={classes.text}>
                                                        Discord - Hellraiser#2070
                                                </ListItemText>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText disableTypography className={classes.text}>
                                                        Instagram - @cadu.js
                                                </ListItemText>
                                            </ListItem>
                                        </List>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Main>
        </>
    )
}

