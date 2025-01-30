import Raffle from "../../models/Raffle.js";
import User from "../../models/User.js";

const RaffleGetAllService = async (_idUser, query) => {
  try {
    // Ver se solicitaram mais detalhes
    const { details = false } = query;

    // Buscar todas os sorteios
    const raffles = await await Raffle.find({ created_by: _idUser });

    // Se o usuario não quiser detalhes, enviar sem detalhes
    if (details !== "true") {
      return {
        code: 200,
        message: "Todos os sorteios",
        raffles,
      };
    }

    // Buscar o usuario para fazer a detalhação
    const userPromoter = await User.findById(_idUser);

    // Criando um array para manipular os dados com detalhes
    const rafflesDetails = [];

    // Percorrendo todos os sorteios para inserir os dados do promoter
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

    // Retornando os dados com detalhes
    return {
      code: 200,
      message: "Todos os sorteios detalhados",
      raffles: rafflesDetails,
    };
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export default RaffleGetAllService;
