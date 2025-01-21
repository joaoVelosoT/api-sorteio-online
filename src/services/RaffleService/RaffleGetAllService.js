import Raffle from "../../models/Raffle.js";
import User from "../../models/User.js";

const RaffleGetAllService = async (_idUser, query) => {
  try {
    const { details = false } = query;

    const raffles = await await Raffle.find({ created_by: _idUser });
    if (!details) {
      return {
        code: 200,
        message: "Todos os sorteios",
        raffles,
      };
    }

    const userPromoter = await User.findById(_idUser);
    const rafflesDetails = [];
    for (const raffle of raffles) {
      rafflesDetails.push({
        name: raffle.name,
        description: raffle.description,
        start_date: raffle.start_date,
        end_date: raffle.end_date,
        created_by: {
          userPromoter,
        },
        is_active: raffle.is_active,
        max_participants: raffle.max_participants,
      });
    }

    return {
      code: 200,
      message: "Todos os sorteios detalhados",
      rafflesDetails,
    };
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export default RaffleGetAllService;
