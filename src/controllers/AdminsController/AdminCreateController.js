import AdminCreateService from "../../services/AdminsService/AdminCreateService.js";

const AdminCreateController = async (req, res) => {
  try {
    const admin = await AdminCreateService(req.admin);

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

export default AdminCreateController;
