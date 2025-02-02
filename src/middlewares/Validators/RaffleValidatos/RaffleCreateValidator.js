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

    const errors = [];

    if (!name) {
      errors.push({
        field: "name",
        message: "O 'name' e obrigatorio",
      });
    }

    if (!description) {
      errors.push({
        field: "description",
        message: "O 'description' e obrigatorio",
      });
    }

    if (!start_date) {
      errors.push({
        field: "start_date",
        message: "O 'start_date' e obrigatorio",
      });
    }

    if (start_date) {
      // Validar se e realmente uma data
      const startDateIsValid = await isDate(start_date);
      if (!startDateIsValid) {
        errors.push({
          field: "start_date",
          message: "O 'start_date' precisa ser uma data, no formato yyyy-mm-dd",
        });
      }

      // Validar se esta data e no futuro
      const startDateIsAfter = await dateIsAfter(null, start_date);
      if (!startDateIsAfter) {
        errors.push({
          field: "start_date",
          message: "'start_date' precisa ser uma data futura",
        });
      }
    }

    if (!end_date) {
      errors.push({
        field: "end_date",
        message: "O 'end_date' e obrigatorio",
      });
    }

    if (end_date) {
      // Validar se e realmente uma data
      const endDateIsValid = await isDate(end_date);
      if (!endDateIsValid) {
        errors.push({
          field: "end_date",
          message: "O 'end_start' precisa ser uma data, no formato yyyy-mm-dd",
        });
      }

      // Validar se a data final e depois da data de inicio
      const endDateIsAfter = await dateIsAfter(start_date, end_date);
      if (!endDateIsAfter) {
        errors.push({
          field: "end_date",
          message:
            "O 'end_start' precisa ser uma data futura do inicio do sorteio",
        });
      }
    }

    // Validar se is_active e um boolean
    if (typeof is_active !== "boolean") {
      errors.push({
        field: "is_active",
        message: "'is_active' é obrigatorio e precisa ser um boolean",
      });
    }

    if (!max_participants) {
      errors.push({
        field: "max_participants",
        message: "O 'max_participants' e obrigatorio, e não pode ser 0",
      });
    }

    // Validar se o max_participants e negativo
    if (max_participants < 0) {
      errors.push({
        field: "max_participants",
        message: "O 'max_participants' não pode ser negativo",
      });
    }

    if (errors.length !== 0) {
      return res.status(400).json({
        code: 400,
        message: "Tivemos alguns erros de validações",
        errors,
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
