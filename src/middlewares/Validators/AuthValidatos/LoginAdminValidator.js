const LoginAdminValidator = (req, res, next) => {
  try {
    const { registration, password } = req.body;

    if (!registration) {
      return res.status(400).json({
        code: 400,
        error: {
          details: "O 'registration' e obrigatorio",
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
