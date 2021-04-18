import {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import userUtils from '../utils/userUtils';
import cookies from 'js-cookie'
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
const MainPageNevigatorComp  = (props) => {
      const [user,setUser] = useState({_id:0,permissions:[]});
      const classes = useStyles();
     useEffect( ()=>
     {
       let id = cookies.get('_userid');
       console.log(id);
      (userUtils.getUserById(id)).then(resp=> { 
      console.log(resp.data); 
      setUser(resp.data)});  
     },[])
    const logout = ()=>
    {
      document.cookie = "_userid=0 expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
      props.history.push('/');
    }
    return (

    <div className={classes.root}>
      <div height='50px' color='red'>
        <h3>Welcome {user.FirstName} {user.LastName}</h3>
      </div>
       <Button size="small" variant="contained" color="primary" onClick={()=>{ props.history.push('/movies');}}>
        Movies
      </Button>
      <Button size="small" variant="contained" color="primary" >
        Subscriptions
      </Button>
      {user!= undefined?(user.permissions.includes("Create Users")?
      (<Button size="small" variant="contained" color="primary" visible="false" >
                                Users Mangement
                                </Button>):
                                (null)):null}
      <Button size='small' variant="contained" color="secondary" onClick={()=>logout()}>
        Log Out
      </Button>
    </div>)

}
export default MainPageNevigatorComp;