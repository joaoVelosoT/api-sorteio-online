const RaffleUpdateValidator = async (req, res, next) => {
  try {
    const {
      name,
      description,
      start_date,
      end_date,
      is_active,
      max_participants,
    } = req.body;

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


export default RaffleUpdateValidator