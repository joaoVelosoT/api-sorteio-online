const AdminUpdateValidator = (req, res, next) => {
  try {
    const { name, password } = req.body;

    // Em breve terá validações aqui

    req.admin = {
      name,
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

export default AdminUpdateValidator;
