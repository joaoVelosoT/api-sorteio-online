import dayjs from "dayjs";

const dateIsAfter = async (startFrom, date) => {
  try {
    // nowDate seria a data
    if (startFrom) {
      return dayjs(date).isAfter(startFrom);
    }
    const now = dayjs();
    return dayjs(date).isAfter(now);
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export default dateIsAfter;
