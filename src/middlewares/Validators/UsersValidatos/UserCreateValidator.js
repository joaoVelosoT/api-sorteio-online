const UserCreateValidator = (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name) {
      return res.status(400).json({
        code: 400,
        error: {
          details: "O 'name' e obrigatorio",
        },
      });
    }

    if (!email) {
      return res.status(400).json({
        code: 400,
        error: {
          details: "O 'email' e obrigatorio",
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

    req.user = {
      name,
      email,
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

export default UserCreateValidator;
