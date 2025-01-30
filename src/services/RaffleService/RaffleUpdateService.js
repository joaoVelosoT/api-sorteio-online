import Raffle from "../../models/Raffle.js";

const RaffleUpdateService = async (dataUpdate) => {
  try {
    // Validar se existe esse sorteio
    const raffle = await Raffle.findById(dataUpdate._idRaffle);
    if (!raffle) {
      return {
        code: 404,
        error: {
          message: "Sorteio não encontrado",
        },
      };
    }

    // Validar se o usuario logado e o criador desse sorteio
    if(dataUpdate._idUserAuth !== raffle.created_by){
      return {
        code : 401,
        error : {
          message : "O usuario não pode atualizar os dados de um sorteio de outro usuario"
        }
      }
    }

    // Atualizando o projeto
    await raffle.updateOne(dataUpdate.dataUpdate);

    return {
      code: 200,
      message: "Sorteio encontrado com sucesso",
      raffle,
    };
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export default RaffleUpdateService;
