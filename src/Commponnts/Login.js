import {useState} from 'react'
import {Link} from 'react-router-dom'
import usersUtils from '../utils/userUtils';
//Style imports
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// Styles set
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
     
    },
    input: {
        color: "white"
      },
      inputlabel:{
        color: "white" 
      },
      btnclass:{
        margin: theme.spacing(1),
       
      }
    
  }));

const LoginComp = (props)=>{
    const [userName,setUserName] = useState('')
    const [password,setPassword] = useState('')
    const classes = useStyles();
    const LoginSubmit = async (e)=>
    {
        e.preventDefault();
        let username1 = userName;
        let password1 = password;
        let users = await (await usersUtils.getUsers()).data;
        let currUser = users.filter(x=>x.UserName ==  username1 && x.Password == password1)[0]
        if(currUser != null )
        {
            let _id = currUser._id;
        document.cookie = "_userid="+_id;
        props.history.push('/main');
        }
        else{
            props.history.push('/')
        }
        
    }
    return(
        <div style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
          <h2>Login</h2>
            <form onSubmit={e=>LoginSubmit(e)}>
                 <TextField   className={classes.root} id="outlined-basic" label="User Name" variant="outlined" InputProps={{className: classes.input}} InputLabelProps={{className: classes.inputlabel}}  onChange={e=>{setUserName(e.target.value)}}/>
                <br/><br/>
                <TextField InputProps={{className: classes.input}} InputLabelProps={{className: classes.inputlabel}} className={classes.root} type="password" id="outlined-basic" label="Password" variant="outlined" onChange={e=>{setPassword(e.target.value)}}/>
                <br/><br/>
                <Button  class={classes.btnclass} type="submit" variant="contained">Log In</Button>
                <br/>
            </form>
            <br/>
            New User?  &nbsp; <Link to="/createaccount" color='white'>Create Account</Link>
           
        </div>
    )
}
export default  LoginComp;