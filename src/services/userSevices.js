import db from "../models/index"


let handleUserLogin = ( userName , password) =>{
    return new Promise(async(resolve, reject) => {
        try {   
             let userData = {} ;
        let isExist = await checkUserEmail( userName) ;

        if(isExist) {
            // user all ready exist                
            let user = await db.User.findOne({
                attributes:['email'  , 'password' ,'firstName' , 'lastName' , 'id'],
                where: {
                    email : userName 
                } ,
                raw : true
               
                
            })
            let user2 = await db.User.findOne({
                attributes:['email' , 'password' ,'firstName' , 'lastName' , 'id'],
                where: {
                    userName : userName 
                } ,
                raw : true
               
                
            })  
            if(user){
                userData.errCode = 0 ;
                userData.errMessage = 'Oke' ;
                delete user.password ;
                userData.user = user ;
            }
            if(user2){
                userData.errCode = 0 ;
                userData.errMessage = 'Oke' ;
                delete user.password ;
                userData.user = user2 ;
            }
            else
            {
                userData.errCode = 3 ;
                 userData.errMessage = 'wrong password'
            }
        }else{
            userData.errCode = 1;
            userData.errMessage =  `Your Email isn't exist please enter your email!`
        }
        resolve(userData)
        } catch (e) {
            reject(e)
        }
    })

}
let checkUserEmail = ( userName) => {
    return new Promise(async(resolve, reject) => {
        try {
            
        let email = await db.User.findOne({
             where: { email: userName }
        })
        let username = await db.User.findOne({
            where: { userName: userName }
       })
       console.log('check' , email , username);
        if(email || username) {
            resolve(true)
        } else {
            resolve(false)
        }
        }
        catch (error) {
            reject(error)
        }
    })
}
module.exports ={
    handleUserLogin
}