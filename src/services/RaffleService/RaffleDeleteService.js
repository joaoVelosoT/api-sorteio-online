import Raffle from "../../models/Raffle";

const RaffleDeleteService = async (dataDelete) => {
  try {
    // _idRaffle -> id do sorteio para deletar
    // _idUserAuth -> _id do usuario que fez login, validar se ele esta tentando deletar um sorteio criado por ele

    // Validando se existe o sorteio
    const raffle = await Raffle.findById(dataDelete._idRaffle);
    if (!raffle) {
      return {
        code: 404,
        error: {
          message: "Sorteio não encontrado",
        },
      };
    }

    // Validando se o sorteio pertence a pessoa logada
    if (raffle.created_by !== dataDelete._idUserAuth) {
      return {
        code: 401,
        error: {
          message: "O sorteio não pertence ao usuario",
        },
      };
    }

    // Deletando o sorteio
    await raffle.deleteOne();

    return {
      code: 200,
      message: "Sorteio deletado com sucesso",
    };
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};
