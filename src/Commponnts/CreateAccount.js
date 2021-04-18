import {useState} from 'react' ;

const CreateAccountComp = ()=>{
    const [userName,setUserName] = useState('')
    const [password,setPassword] = useState('')
    const customSubmit = e=>{
        e.preventDefault();
        let obj = {username:userName,password:password}
        
    }
    return(
        <div>
            <h2>Create An Account</h2>
            <form onSubmit={e=>customSubmit(e)}>
                User Name <input type="text"/><br/>
                Password  <input type="password"/><br/>
                <input type="submit" value="Create"/>
            </form>
        </div>
    );
}
export default CreateAccountComp;