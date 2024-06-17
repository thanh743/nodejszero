
const getHomepage = (req, res) =>{
 res.send("Hello world");
}

const getABC = (req, res) =>{
    res.send("ABC");
   }

   const hoiDanIT = (req, res) =>{
    res.render('sample')
   }

module.exports = {
    getHomepage,getABC,hoiDanIT
};