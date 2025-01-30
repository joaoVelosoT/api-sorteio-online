import RaffleDeleteService from "../../services/RaffleService/RaffleDeleteService.js";

const RaffleDeleteController = async (req, res) => {
  try {
    // Validar se quem esta deletando o sorteio e um usuario promoter
    // , se e um admin, ou se e um admin master
    if (
      req.dataAuth.role !== "promoter" &&
      req.dataAuth.role !== "admin" &&
      req.dataAuth.role !== "admin_master"
    ) {
      return res.status(401).json({
        code: 401,
        error: {
          details: "Não autorizado",
        },
      });
    }

    const raffle = await RaffleDeleteService({
      _idRaffle: req.params.id,
      _idUserAuth: req.dataAuth._id,
    });

    if (raffle.error) {
      return res.status(raffle.code).json({
        code: raffle.code,
        error: {
          details: raffle.error.message,
        },
      });
    }

    return res.status(raffle.code).json({
      code: raffle.code,
      message: raffle.message,
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

export default RaffleDeleteController;
