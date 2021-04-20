import useState from 'react' 
import LoginComp from './Login.js'
import {Switch,Link,Route} from 'react-router-dom'
import CreateAccountComp from './CreateAccount.js'
import MainPageNevigatorComp from './Navigator'
import MoviesComp from './Movies'
const MainPageComp = () =>{
   
    return(
    <div>
        <h1>Welcome To Movies Subscriptions Website</h1>
       
        
       <Switch>

           <Route exact path="/" component={LoginComp}/>
           <Route path="/createaccount" component={CreateAccountComp} />
           <Route path="/movies" component={MoviesComp}/>
           <Route path="/main" component={MainPageNevigatorComp}/>
       </Switch>
    </div>)
}
export default MainPageComp;
