import RaffleUpdateService from "../../services/RaffleService/RaffleUpdateService.js";

const RaffleUpdateController = async (req, res) => {
  try {


    const dataUpdate = {
      dataUpdate: req.raffle,
      _idRaffle: req.params.id,
      _idUserAuth: req.dataAuth._id,
    };

    // Validar se quem esta atualizando o sorteio e um usuario promoter, se e um admin, ou se e um admin master
    if (
      req.dataAuth.role !== "promoter" ||
      req.dataAuth.role !== "admin" ||
      req.dataAuth.role !== "admin_master"
    ) {
      return res.status(401).json({
        code: 401,
        error: {
          details: "Não autorizado",
        },
      });
    }

    const raffle = await RaffleUpdateService(dataUpdate);

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
      raffle: raffle.raffle,
    });
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export default RaffleUpdateController;
