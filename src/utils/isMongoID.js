const IsMongoID = (_id) => {
  try {
    if (!_id) {
      return {
        error: "O id precisa ser enviado",
      };
    }

    if (_id < 24 || _id > 25) {
      return {
        error: "O id enviado precisa ser um MongoID",
      };
    }
    return true;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export default IsMongoID;
