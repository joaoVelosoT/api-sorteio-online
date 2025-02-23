const UserCreateValidator = (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    const errors = [];

    if (!name) {
      errors.push({
        field: "name",
        message: "O 'name' e obrigatorio",
      });
    }

    if (!email) {
      errors.push({
        field: "email",
        message: "O 'email' e obrigatorio",
      });
    }

    if (role) {
      const roles = ["common_user", "promoter"];

      if (!roles.includes(role)) {
        errors.push({
          field: "role",
          message: `'${role}' não e um role valido`,
        });
      }
    }

    if (!password) {
      errors.push({
        field: "password",
        message: "O 'password' e obrigatorio",
      });
    }

    if (errors.length !== 0) {
      return res.status(400).json({
        code: 400,
        message: "Tivemos alguns erros de validações",
        errors,
      });
    }

    req.user = {
      name,
      email,
      password,
      role,
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

export default UserCreateValidator;
