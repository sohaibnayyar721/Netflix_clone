const user_collection = require('../models/user_schema')

let del_user = async (req, res) => {
  const documentsToDelete = await user_collection.find({}).limit(7);
  console.log("this is documentsToDelete",documentsToDelete)
  let del = await user_collection.deleteMany({
    _id: {
      $in: documentsToDelete.map(doc => doc._id)
    }
  })
}


const register = async (req, res) => {
  let { fname, lname, email, password } = req.body
  let users_data = {
    first_name: fname,
    last_name: lname,
    email: email,
    password: password
  }

  try {
    let find_users = await user_collection.findOne(users_data)
    let count = await user_collection.countDocuments({}).exec()
   
    console.log(count)
   

    if (find_users) {
      res.send('This is email is already register')
    }
    else {

      if (count === 9) {
        del_user()
      }
      let insert_users = await new user_collection(users_data)
      insert_users.save()
      res.send("Registration successful")
    }

  }
  catch(err) {
    res.status(404).json({message:"error"})
    console.log("Can't Insert data in DB!")
  }
}



module.exports =  register 