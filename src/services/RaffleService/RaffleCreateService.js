import User from "../../models/User.js";

const RaffleCreateService = async (dataRaffle) => {
  try {
    // Validar se existe esse userPromoter
    const userPromoter = await User.findOne({
      _id: dataRaffle.created_by,
      role: "promoter",
    });

    if (!userPromoter) {
      return {
        code: 404,
        error: {
          message: "Usuario promoter não encontrado",
        },
      };
    };

    

    // name -> validar se ja existe um evento com esse nome
    // description
    // start_date -> validar se essa data e realmente no futuro
    // end_date -> validar se essa data e realmente no futuro
    // created_by -> validar se e um mongoID
    // is_active -> validar se e um boolean
    // max_participants -> validar se não o numero não e negativo

    // validar se o created_by realmente existe
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};
