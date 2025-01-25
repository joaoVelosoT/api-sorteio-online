import RaffleGetOneService from "../../services/RaffleService/RaffleGetOneService.js";

const RaffleGetOneController = async (req, res) => {
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

    const raffle = await RaffleGetOneService(req.params.id, req.query);
    // Se tiver algum erro
    if (raffle.error) {
      return res.status(raffle.code).json({
        code: raffle.code,
        error: {
          details: raffle.message,
        },
      });
    }

    return res.status(raffle.code).json({
      code: raffle.code,
      message: raffle.message,
      raffle: raffle.raffle,
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

export default RaffleGetOneController;
