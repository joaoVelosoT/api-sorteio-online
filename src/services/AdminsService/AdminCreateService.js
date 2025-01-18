import lodash from "lodash";
import Admin from "../../models/Admin.js";
import bcrypt from "bcryptjs";
const AdminCreateService = async (dataAdmin) => {
  try {
    // Validar se não estão tentando criar um admin_master
    if (dataAdmin.role === "admin_master") {
      const existsAdminMaster = await Admin.findOne({ role: "admin_master" });

      if (existsAdminMaster) {
        return {
          code: 401,
          error: {
            message: "Já existe um admin master",
          },
        };
      }
    }

    // Gerando um registro aleatorio
    let valExistsRegistration = false;
    while (!valExistsRegistration) {
      var registration = lodash.random(1000000, 2000000);
      // Validando se ja existe esse registro
      const existsRegistration = await Admin.findOne({
        registration: registration,
      });
      !existsRegistration
        ? (valExistsRegistration = true)
        : (valExistsRegistration = false);
    }
    dataAdmin.registration = registration;

    // Criptografando a senha
    const passwordHash = await bcrypt.hash(dataAdmin.password, 12);
    dataAdmin.password = passwordHash;

    const admin = await Admin.create(dataAdmin);
    return {
      code: 201,
      message: "Admin criado com sucesso",
      admin,
    };
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};
export default AdminCreateService;
