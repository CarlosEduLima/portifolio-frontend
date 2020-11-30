import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    Typography,
    CardContent,
    CardActions,
    Button,
    Grid,
    CardMedia,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle
} from '@material-ui/core/';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Main from '../../components/main'
import api from '../../service/api'
const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    card: {
        maxWidth: '350',
        margin: 'auto'
    }
}));

export default function Projects() {
    const [project, setProject] = useState([])
    const [projectInfo, setProjectInfo] = useState([])
    const [open, setOpen] = useState(false)

    const handleClickOpen = (info) => {
        console.log(info)
        setProjectInfo(info)
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    useEffect(() => {
        async function loadProjects() {
            const response = await api.get('/projects')
            console.log(response.data)
            setProject(response.data.projects)
            console.log(project)
        }
        loadProjects()
    }, [])
    const classes = useStyles()
    return (
        <>
            <Main>
                <Grid container className={classes.root} spacing={3}>
                    {project.map(project => (
                        <Grid item xs>
                            <Card shadow={3} className={classes.card}>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="200"
                                    image={project.img_url}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <h3>
                                        {project.name}
                                    </h3>
                                </CardContent>
                                <CardActions border>
                                    <Button href={project.link_git} colored>GitHub</Button>
                                    <Button href={project.link} colored>Link Demo</Button>
                                    <Button onClick={() => handleClickOpen(project)}>Mais Informações</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                    <DialogContent>
                    <Typography>{projectInfo.name}</Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Fechar
                        </Button>
                    </DialogActions>
                </Dialog>
            </Main>
        </>
    )
}
