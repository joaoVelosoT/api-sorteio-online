import bcrypt from "bcryptjs";


const AdminUpdateService = async (dataUpdate) => {
  try {
    // name

    // Criptografar a senha
    if (dataUpdate.password) {
        const passwordHash = await bcrypt
    }
    // password
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};
