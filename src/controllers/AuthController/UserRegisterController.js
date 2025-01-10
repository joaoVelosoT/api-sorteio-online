import UserRegisterService from "../../services/AuthService/UserRegisterService.js";

const UserRegisterController = async (req, res) => {
  try {
    const registerUser = await UserRegisterService(req.user);
    if (registerUser.error) {
      return res.status(registerUser.code).json({
        code: registerUser.code,
        error: {
          details: registerUser.error.message,
        },
      });
    }

    return res.status(registerUser.code).json({
      code: registerUser.code,
      message: registerUser.message,
      register: registerUser.register,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      code: 500,
      error: {
        details: "Erro interno",
      },
    });
  }
};

export default UserRegisterController;
