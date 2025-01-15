import UserLoginService from "../../../services/AuthService/AuthUser/UserLoginService.js";


const UserLoginController = async (req, res) => {
  try {
    const dataLogin = await UserLoginService(req.dataLogin);
    if (dataLogin.error) {
      return res.status(dataLogin.code).json({
        code: dataLogin.code,
        error: {
          details: dataLogin.error.message,
        },
      });
    }

    return res.status(dataLogin.code).json({
      code: dataLogin.code,
      message: dataLogin.message,
      login: dataLogin.user,
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

export default UserLoginController;
