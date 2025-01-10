const UserUpdateValidator = (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Em breve terá validações aqui

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

export default UserUpdateValidator;
