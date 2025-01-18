const AdminCreateValidator = async (req, res, next) => {
  try {
    const { name, password, role } = req.body;

    if (!name) {
      return res.status(400).json({
        code: 400,
        error: {
          details: "O 'name' e obrigatorio",
        },
      });
    }

    if (!password) {
      return res.status(400).json({
        code: 400,
        error: {
          details: "O 'password' e obrigatorio",
        },
      });
    }

    const roles = ["admin", "admin_master"];
    if (role) {
      if (!roles.includes(role)) {
        return res.status(400).json({
          code: 400,
          error: {
            details: `'${role}' não e um role válido`,
          },
        });
      }
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
