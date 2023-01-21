const adminModel = require("../model/adminSchema");
const userModel = require("../model/userSchema");
const { generateToken } = require("../utils/jwt");
const adminLogin = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
};

const adminLoginPost = async (req, res) => {
  try {
    let adminResult = {
      status: false,
      token: null,
      message: null,
    };

    const { email, password } = req.body;
    const admin = await adminModel.findOne({ email: email });
    if (admin) {
      if (admin.password === password) {
        let token = generateToken(admin);
        adminResult.status = true;
        adminResult.token = token;
        res.json(adminResult);
      } else {
        console.log("password does not match");
        res.json(adminResult);
      }
    } else {
      console.log("admin not found");
      res.json(adminResult);
    }
  } catch (error) {
    console.log(error);
  }
};

const userDetails = async (req, res) => {
  try {
    await userModel
      .find()
      .then((user) => {
        res.json({ user });
      })
      .catch((err) => {
        res.status(500).json({ msg: "user not found" });
      });
  } catch (err) {
    console.log(err);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.body;
    await userModel.deleteOne({ _id: id });
    userModel
      .find()
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        res.json({ status: "failed", message: err.message });
      });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { adminLogin, adminLoginPost, userDetails, deleteUser };
