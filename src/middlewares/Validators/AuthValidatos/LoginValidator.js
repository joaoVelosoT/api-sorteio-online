const LoginValidator = (req, res, next) => {
  try {
    const { email, password } = req.body;

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

    req.dataLogin = {
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

export default LoginValidator;
