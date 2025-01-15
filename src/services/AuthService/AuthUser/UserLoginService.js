import bcrypt from "bcryptjs";
import User from "../../../models/User.js";
import jwt from "jsonwebtoken";
const UserLoginService = async (dataUser) => {
  try {
    // email
    const user = await User.findOne({ email: dataUser.email });
    if (!user) {
      return {
        code: 401,
        error: {
          message: "Credenciais invalidas",
        },
      };
    }
    // password
    const passwordDecode = await bcrypt.compareSync(
      dataUser.password,
      user.password
    );

    if (!passwordDecode) {
      return {
        code: 401,
        error: {
          message: "Credenciais invalidas",
        },
      };
    }

    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
        _id: user._id,
        isAdmin : false
      },
      process.env.SECRET
    );

    return {
      code: 200,
      message: "Login feito com sucesso",
      user: {
        user,
        token,
      },
    };
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export default UserLoginService;
