import dayjs from "dayjs";
import isDate from "../../../utils/isDate.js";
import dateIsAfter from "../../../utils/dateIsAfter.js";

const RaffleCreateValidator = async (req, res, next) => {
  try {
    const {
      name,
      description,
      start_date,
      end_date,
      is_active,
      max_participants,
    } = req.body;

    // start_date -> validar se essa data e realmente no futuro
    // end_date -> validar se essa data e realmente no futuro
    // created_by -> validar se e um mongoID
    // is_active -> validar se e um boolean
    // max_participants -> validar se não o numero não e negativo
    // validar se o created_by realmente existe

    if (!name) {
      return res.status(400).json({
        code: 400,
        error: {
          details: "O 'name' e obrigatorio",
        },
      });
    }

    if (!description) {
      return res.status(400).json({
        code: 400,
        error: {
          details: "O 'description' e obrigatorio",
        },
      });
    }

    if (!start_date) {
      return res.status(400).json({
        code: 400,
        error: {
          details: "O 'start_date' e obrigatorio",
        },
      });
    }

    // Validar se e realmente uma data
    const startDateIsValid = await isDate(start_date);
    if (!startDateIsValid) {
      return res.status(401).json({
        code: 400,
        error: {
          details: "O 'start_date' precisa ser uma data, no formato yyyy-mm-dd",
        },
      });
    }

    // Validar se esta data e no futuro
    const startDateIsAfter = await dateIsAfter(null, start_date);
    if (!startDateIsAfter) {
      return res.status(400).json({
        code: 400,
        error: {
          details: "A 'start_date' precisa ser futura",
        },
      });
    }

    if (!end_date) {
      return res.status(400).json({
        code: 400,
        error: {
          details: "O 'end_date' e obrigatorio",
        },
      });
    }

    // Validar se e realmente uma data
    const endDateIsValid = await isDate(end_date);
    if (!endDateIsValid) {
      return res.status(401).json({
        code: 400,
        error: {
          details: "O 'end_start' precisa ser uma data, no formato yyyy-mm-dd",
        },
      });
    }

    // Validar se a data final e depois da data de inicio
    const endDateIsAfter = await dateIsAfter(start_date, end_date);
    if (!endDateIsAfter) {
      return res.status(400).json({
        code: 400,
        error: {
          details:
            "O 'end_start' precisa ser uma data futura do inicio do sorteio",
        },
      });
    }

    // Validar se is_active e um boolean
    if (typeof is_active !== "boolean") {
      return res.status(401).json({
        code: 400,
        error: {
          details: "'is_active' é obrigatio e precisa ser um boolean",
        },
      });
    }

    if (!max_participants) {
      return res.status(400).json({
        code: 400,
        error: {
          details: "O 'max_participants' e obrigatorio",
        },
      });
    }

    if (max_participants <= 0) {
      return res.status(400).json({
        code: 400,
        error: {
          details: "O 'max_participants' não pode ser negativo ou 0",
        },
      });
    }

    req.raffle = {
      name,
      description,
      start_date,
      end_date,
      is_active,
      max_participants,
    };

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

export default RaffleCreateValidator;
