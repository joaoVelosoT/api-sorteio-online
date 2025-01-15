import AdminRegisterService from "../../../services/AuthService/AuthAdmin/AdminRegisterService.js";

const AdminRegisterController = async (req, res) => {
  try {
    // Validar se a pessoa authenticada e um admin
    if (!req.dataAuth.isAdmin) {
      return res.status(401).json({
        code: 401,
        error: {
          message: "Não autorizado",
        },
      });
    }
    console.log(req.dataAuth);

    const admin = await AdminRegisterService(req.admin);

    return res.status(admin.code).json({
      code: admin.code,
      message: admin.message,
      admin: admin.admin,
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

export default AdminRegisterController;
