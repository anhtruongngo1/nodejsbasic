import userSevices from '../services/userSevices'

let  handleLogin = async(req, res) => {

    let userName = req.body.userName 
    let password = req.body.password


    // check email exist
    if( !userName || !password) {
        return res.status(500).json({
            errcode: '1' ,
            message: 'missing inputs  parameter'
        })
    }
    let userData = await userSevices.handleUserLogin(userName , password);
 

    return res.status(200).json({
        errcode: userData.errCode ,
        errMessage:  userData.errMessage  ,
        user : userData.user ? userData.user : {}
      
    })
}
module.exports ={
    handleLogin
}