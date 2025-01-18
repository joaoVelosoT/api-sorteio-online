import AdminGetOneService from "../../services/AdminsService/AdminGetOneService.js";

const AdminGetOneController = async (req, res) => {
  try {

    // Validar se o usuario logado e um admin_master ou e o propio admin
    if (
      req.dataAuth.role !== "admin_master" &&
      req.params.id !== req.dataAuth._id
    ) {
      return res.status(401).json({
        code: 401,
        error: {
          details: "Não autorizado",
        },
      });
    }

    const admin = await AdminGetOneService(req.params.id);
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

export default AdminGetOneController;
