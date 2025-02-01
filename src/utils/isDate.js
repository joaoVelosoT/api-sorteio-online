import dayjs from "dayjs";

const isDate = async (date) => {
  try {
    const dateFormat = dayjs(date);

    return dateFormat.isValid();
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export default isDate;
