const LoginAdminValidator = (req, res, next) => {
  try {
    const { registration, password } = req.body;

    const errors = [];

    if (!registration) {
      errors.push({
        field: "registration",
        message: "O 'registration' e obrigatorio",
      });
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

    req.dataLogin = {
      registration,
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

export default LoginAdminValidator;
