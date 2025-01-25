import RaffleGetAllService from "../../services/RaffleService/RaffleGetAllService.js";

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

    const raffles = await RaffleGetAllService(req.dataAuth._id, req.query);
    if (raffles.error) {
      return res.status(raffles.code).json({
        code: raffles.code,
        error: {
          details: raffles.error.message,
        },
      });
    }

    return res.status(raffles.code).json({
      code: raffles.code,
      message: raffles.message,
      raffles: raffles.raffles,
    });
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
