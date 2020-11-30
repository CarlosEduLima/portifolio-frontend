import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
export default function Skills(props){
  return (
    <>   
     <Grid container>
        <Grid item xs={12}>
          <div style={{display: 'flex'}}>{props.skill} 
          <LinearProgress  style={{margin: 'auto', width: '75%'}}  variant="buffer" value={props.progress} /> 
          </div>
        </Grid>
      </Grid>
    </>
  )
}
