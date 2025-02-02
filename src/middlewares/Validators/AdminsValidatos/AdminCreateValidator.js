const AdminCreateValidator = async (req, res, next) => {
  try {
    const { name, password, role } = req.body;

    const errors = [];
    if (!name) {
      errors.push({
        field: "name",
        message: "O 'name' e obrigatorio",
      });
    }

    if (!password) {
      errors.push({
        field: "password",
        message: "O 'password' e obrigatorio",
      });
    }

    const roles = ["admin", "admin_master"];
    if (role) {
      if (!roles.includes(role)) {
        errors.push({
          field: "role",
          message: `'${role}' não e um role válido`,
        });
      }
    }

    if (errors.length !== 0) {
      return res.status(400).json({
        code: 400,
        message: "Tivemos alguns erros de validações",
        errors,
      });
    }

    req.admin = {
      name,
      role,
      password,
    };

    return next();
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 500,
      error: {
        details: "Erro interno",
      },
    });
  }
};

export default AdminCreateValidator;
