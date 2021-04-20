import {useState,useEffect,React} from 'react';
import '../utils/movieUtils';
import movieUtils from '../utils/movieUtils';
import MediaMoiveCard from './MovieCard'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

//Styles Configuration 
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 3,
    },
    
  }));

const MoviesComp = ()=>
{
   let [movies,setMovies] = useState([]);
   const classes = useStyles();

    useEffect(()=>{
            movieUtils.getAllMovies().then(resp=>{
                setMovies(resp.data)
            })
    },[])
    
    let items =  movies.map((item)=>{
        return (
        <Grid item key={item._id} xs={4} spacing={3}>
             <MediaMoiveCard  key={item._id} name={item.Name}  image={item.Image} />
             
        </Grid>)
       
    });
    return(
        <div className={classes.root}>
          <Grid container spacing={2}  direction='row' justify='flex-start' alignItems="flex-start" >
            {items}
          </Grid>
            
        </div>
    )
}
export default MoviesComp;