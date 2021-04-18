import useState from 'react' 
import LoginComp from './Login.js'
import {Switch,Link,Route} from 'react-router-dom'
import CreateAccountComp from './CreateAccount.js'
import MainPageNevigatorComp from './MainPageNavigator'
import MoviesComp from './MoviesComp'
const MainPageComp = () =>{
   
    return(
    <div>
        <h1>Welcome To Movies Subscriptions Website</h1>
       
        
       <Switch>
<<<<<<< HEAD
           <Route exact path="/" component={LoginComp}/>
=======
           <Route exact path="/cinima-app" component={LoginComp}/>
>>>>>>> b939ce5c2d2b2d43f7b403fce1416fec20386801
           <Route path="/createaccount" component={CreateAccountComp} />
           <Route path="/movies" component={MoviesComp}/>
           <Route path="/main" component={MainPageNevigatorComp}/>
       </Switch>
    </div>)
}
export default MainPageComp;
