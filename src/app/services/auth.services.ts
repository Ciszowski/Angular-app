export class AuthServices{
    isAuth = false;
    signIn=()=>{
        return new Promise((response, error)=>{
            setTimeout(()=>{
                this.isAuth = true
                response(true)
            })
        })
    }

    signOut = () =>{
        return this.isAuth = false;
    }
}   