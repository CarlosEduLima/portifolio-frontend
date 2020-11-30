import Grid from '@material-ui/core/Grid';
export default function Experience(props) {
    return (
        <>
            <Grid container>
                <Grid item xs={4}>
                    <p style={{  fontFamily: 'sans-serif', fontSize: '16px',fontWeight: 'bold'}}>{props.startYear} - {props.endYear}</p>
                </Grid>
                <Grid item xs={8}>
                    <h3 style={{ marginTop: '0px' }}>{props.jobName}</h3>
                    <p style={{  fontFamily: 'sans-serif', fontSize: '16px',fontWeight: 'lighter'}}>{props.jobDescription}</p>
                </Grid>
            </Grid>
        </>
    )
}