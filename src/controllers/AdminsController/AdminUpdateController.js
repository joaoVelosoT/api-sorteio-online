import AdminUpdateService from "../../services/AdminsService/AdminUpdateService.js";

const AdminUpdateController = async (req, res) => {
  try {
    const admin = await AdminUpdateService(req.params.id, req.admin);
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

export default AdminUpdateController;
