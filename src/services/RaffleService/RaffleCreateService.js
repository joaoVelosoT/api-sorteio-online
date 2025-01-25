import Raffle from "../../models/Raffle.js";
import User from "../../models/User.js";

const RaffleCreateService = async (dataRaffle, _idUser) => {
  try {
    // validar se a pessoa do login eo mesmo do _id do promoter
    // Validar se existe esse userPromoter
    const userPromoter = await User.findOne({
      _id: _idUser,
      role: "promoter",
    });

    if (!userPromoter) {
      return {
        code: 404,
        error: {
          message: "Usuario promoter não encontrado",
        },
      };
    }

    dataRaffle.created_by = _idUser;

    const raffle = await Raffle.create(dataRaffle);

    return {
      code: 201,
      message: "Sorteio criado com sucesso",
      raffle,
    };
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export default RaffleCreateService;
