const RaffleGetAllController = async (req, res) => {
  try {
    // Validar se é um userPromoter
    if (req.dataAuth.role !== "promoter") {
      return res.status(401).json({
        code: 401,
        error: {
          details: "Não autorizado",
        },
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      code: 500,
      error: {
        details: "Erro interno",
      },
    });
  }
};

export default RaffleGetAllController;
