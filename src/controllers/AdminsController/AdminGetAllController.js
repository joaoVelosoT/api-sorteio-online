import AdminGetAllService from "../../services/AdminsService/AdminGetAllService.js";

const AdminGetAllController = async (req, res) => {
  try {
    const admins = await AdminGetAllService();
    if (admins.error) {
      return res.status(admins.code).json({
        code: admins.code,
        error: {
          details: admins.error.message,
        },
      });
    }

    return res.status(admins.code).json({
      code: admins.code,
      message: "Admins encontrados",
      admins: admins.admins,
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

export default AdminGetAllController;
