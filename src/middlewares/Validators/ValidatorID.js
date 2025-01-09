import IsMongoID from "../../utils/isMongoID.js";

const ValidatorID = async (req, res, next) => {
  try {
    if (!req.params.id) {
      return res.status(400).json({
        code: 400,
        error: {
          details: "O id precisa ser enviado",
        },
      });
    }

    const isValidId = await IsMongoID(req.params.id);
    if (isValidId.error) {
      return res.status(400).json({
        code: 400,
        error: {
          details: "O id enviado precisa ser um mongoID",
        },
      });
    }

    return next();
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 500,
      error: {
        details: "Erro interno",
      },
    });
  }
};

export default ValidatorID;
