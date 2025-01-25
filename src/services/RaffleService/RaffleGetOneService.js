import Raffle from "../../models/Raffle.js";
import UserGetOneService from "../UsersService/UserGetOneService.js";

const RaffleGetOneService = async (_idRaffle, query) => {
  try {
    const { details = false } = query;

    const raffle = await Raffle.findById(_idRaffle);

    if (!raffle) {
      return {
        code: 404,
        error: {
          message: "Sorteio não encontrado",
        },
      };
    }

    // Validando se solicitaram detalhes
    if (!details) {
      return {
        code: 200,
        message: "Sorteio encontrado",
        raffle,
      };
    }

    // Buscando o user para pegar mais detalhes
    const user = await UserGetOneService(raffle.created_by);
    if (user.error) {
      return user;
    }

    // Criando variavel para manipular o retorno com mais detalhes
    const raffleDetails = {
      _id: raffle._id,
      description: raffle.description,
      start_date: raffle.start_date,
      end_date: raffle.end_date,
      created_by: {
        user: user.user,
      },
      is_active: raffle.is_active,
      max_participants: raffle.max_participants,
    };

    return {
      code: 200,
      message: "Sorteio encontrado",
      raffle: raffleDetails,
    };
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export default RaffleGetOneService;
