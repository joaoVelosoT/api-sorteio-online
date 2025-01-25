import RaffleCreateService from "../../services/RaffleService/RaffleCreateService.js";

const RaffleCreateController = async (req, res) => {
  try {
    
    
    if (req.dataAuth.role !== "promoter") {
      return res.status(401).json({
        code: 401,
        error: {
          details: "Não autorizado",
        },
      });
    }
    

    const raffle = await RaffleCreateService(req.raffle, req.dataAuth._id);

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
    return res.status(500).json({
      code: 500,
      error: {
        details: "Erro interno",
      },
    });
  
  }
};

export default RaffleCreateController;
