const  bcrypt =  require('bcryptjs');

const encript = async (password)=>{
const saltRounds = 8;

const salt = bcrypt.genSaltSync(saltRounds);

let hash =  bcrypt.hashSync(password,salt);

return hash
}


module.exports = {encript}