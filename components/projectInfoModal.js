import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
export default function ProjectInfoDialog(props) {
    //const classes = useStyles();
    return (
        <>
            <Dialog
                open={props.isOpen}
                onClose={props.hide}
                aria-labelledby="max-width-dialog-title"
            >
                <DialogTitle id="max-width-dialog-title">{props.project.name}</DialogTitle>
                <DialogContent>
                    <Grid container>
                        <Grid item xs>
                            <img src={props.project.img_url} />
                        </Grid>
                        <Grid item xs>
                            <Typography>{props.project.description}</Typography>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.hide} color="primary">
                        Fechar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
