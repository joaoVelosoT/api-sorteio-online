import AdminCreateService from "../../AdminsService/AdminCreateService.js";
import jwt from "jsonwebtoken";

const AdminRegisterService = async (dataAdmin) => {
  try {
    // Criar o admin
    const admin = await AdminCreateService(dataAdmin);

    if (admin.error) return admin;

    const token = await jwt.sign(
      {
        _id: admin.admin._id,
        name: admin.admin._name,
        registration: admin.admin.registration,
        role: admin.admin.role,
      },
      process.env.SECRET
    );

    return {
      code: 201,
      message: "Admin registrado com sucesso",
      admin: {
        admin: admin.admin,
        token,
      },
    };
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export default AdminRegisterService;
