
const connection = require('../config/database');
const getHomepage = (req, res) =>{
//  res.send("Hello world");
    return res.render('home');
}

const getABC = (req, res) =>{
    res.send("ABC");
   }

const hoiDanIT = (req, res) =>{
    res.render('sample')
}

const postCreateUser =async (req, res) =>{
    // console.log("Log: " , app.use(express.urlencoded({extended: true})));
    // let {email, name, city} = req.body;

    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    console.log(">>> email : " ,email,"Name : ",name,"City :",city);

    
    // connection.query(
    //     `INSERT INTO User (email , name , city) VALUES (?, ?, ?)`,
    //     [email,name,city],
    //     function(err, results) {
    //       res.send('Created user successfully')
    //     }
    //   );
    // const [results,fields] = await connection.query('SELECT *FROM User u');
    // console.log(">>> check results : " , results);
    let [results,fields] = await connection.query(`INSERT INTO User (email , name , city) VALUES (?, ?, ?)`,[email,name,city]);
    console.log(">>> check results : " , results);
    res.send('Created user successfully')
}
const getCreateUser = (req, res) =>{
    res.render('create-user')
}

module.exports = {
    getHomepage,getABC,hoiDanIT,postCreateUser,getCreateUser
};