import User from "../../models/User.js";

const GetAllUserService = async () => {
  try {
    const users = await User.find();

    return {
      code: 200,
      message: "Usuarios encontrados",
      users,
    };
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export default GetAllUserService;
// module.exports = GetAllUserService;
