const BaseUrl = "/api/v1/";

const handleCatchedError = ({error, at = "at position not defined"}) => {
  console.log("-------------------------------------> handleCatchedError: error at:", at, "error", error);
};

module.exports = {
  BaseUrl,
  handleCatchedError
};
