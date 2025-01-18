import AdminRegisterService from "../../../services/AuthService/AuthAdmin/AdminRegisterService.js";

const AdminRegisterController = async (req, res) => {
  try {
    // Validar se a pessoa authenticada e um admin_master
    if (req.dataAuth.role !== "admin_master") {
      return res.status(401).json({
        code: 401,
        error: {
          message: "Não autorizado",
        },
      });
    }


    const admin = await AdminRegisterService(req.admin);
    if (admin.error) {
      return res.status(admin.code).json({
        code: admin.code,
        error: {
          details: admin.error.message,
        },
      });
    }

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
