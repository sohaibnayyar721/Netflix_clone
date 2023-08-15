const user_collection = require('../models/user_schema');
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
  let { email, password } = req.body
console.log(email)
  try {
    let find_data = await user_collection.findOne({ email, password })
    if (find_data) {
      let token = jwt.sign({ find_data: find_data.first_name }, 'secretkey')
      res.send({ username: find_data.first_name, token: token, message: "sucess" })
    } else {
      res.send('not valid user')
    }
  } catch (err) {
    res.status(404).json({ message: "error" })
  }

}

const homescreen_auth = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, 'secretkey', function (err, data) {
      if (err) {
        res.send({ result: "Invalid Token" })
      } else {
        res.send("profile access")
        // emailsend().catch(console.error)

      }
    })
  } catch (err) {
    res.status(404).json({ message: "error" })
  }
}

module.exports = { login, homescreen_auth }