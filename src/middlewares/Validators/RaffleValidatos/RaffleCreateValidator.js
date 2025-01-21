const RaffleCreateValidator = async (req, res, next) => {
  try {
    const {
      name,
      description,
      start_date,
      end_date,
      is_active,
      max_participants,
    } = req.body;

    // name -> validar se ja existe um evento com esse nome
    // description
    // start_date -> validar se essa data e realmente no futuro
    // end_date -> validar se essa data e realmente no futuro
    // created_by -> validar se e um mongoID
    // is_active -> validar se e um boolean
    // max_participants -> validar se não o numero não e negativo
    // validar se o created_by realmente existe

    if (!name) {
      return res.status(400).json({
        code: 400,
        error: {
          details: "O 'name' e obrigatorio",
        },
      });
    }

    if (!description) {
      return res.status(400).json({
        code: 400,
        error: {
          details: "O 'description' e obrigatorio",
        },
      });
    }

    if (!start_date) {
      return res.status(400).json({
        code: 400,
        error: {
          details: "O 'start_date' e obrigatorio",
        },
      });
    }

    if (!end_date) {
      return res.status(400).json({
        code: 400,
        error: {
          details: "O 'end_date' e obrigatorio",
        },
      });
    }

    if (!is_active) {
      return res.status(400).json({
        code: 400,
        error: {
          details: "O 'is_active' e obrigatorio",
        },
      });
    }

    if (!max_participants) {
      return res.status(400).json({
        code: 400,
        error: {
          details: "O 'is_active' e obrigatorio",
        },
      });
    }

    req.raffle = {
      name,
      description,
      start_date,
      end_date,
      is_active,
      max_participants,
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

export default RaffleCreateValidator;
