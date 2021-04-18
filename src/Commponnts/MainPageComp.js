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
           <Route exact path="/cinima-app" component={LoginComp}/>
           <Route path="/createaccount" component={CreateAccountComp} />
           <Route path="/main" component={MainPageNevigatorComp}/>
           <Route path="/movies" component={MoviesComp}/>
       </Switch>
    </div>)
}
export default MainPageComp;
