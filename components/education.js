import Grid from '@material-ui/core/Grid';
export default function Education(props) {
    return (
        <>
            <Grid container>
                <Grid item xs={4}>
                    <p style={{  fontFamily: 'sans-serif', fontSize: '16px',fontWeight: 'bold'}}>{props.startYear} - {props.endYear}</p>
                </Grid>
                <Grid item xs={8}>
                    <h3 style={{ marginTop: '0px' }}>{props.schoolName}</h3>
                    <p style={{  fontFamily: 'sans-serif', fontSize: '16px',fontWeight: 'lighter'}}>{props.schoolDescription}</p>
                </Grid>
            </Grid>
        </>
    )
}
