import dayjs from "dayjs";

const isDate = async (date) => {
  try {
    const date = dayjs(date);

    return date.isValid();
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export default isDate;
