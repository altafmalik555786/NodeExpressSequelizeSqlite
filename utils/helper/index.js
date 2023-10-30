const handleCatchedError = ({ error, at = "at position not defined" }) => {
  console.log(" /////////////////////////////////////////////////////////////////////////////// ")
  console.log(" /////////////////////////////////////////////////////////////////////////////// ")
  console.log(" ////////////////////////// handleCatchedError Start /////////////////////////// ")
  console.log(" /////////////////////////////////////////////////////////////////////////////// ")
  console.log(" /////////////////////////////////////////////////////////////////////////////// ")

  console.log(" -----------------> [At]:", at, "[Error]: ", error);

  console.log(" /////////////////////////////////////////////////////////////////////////////// ")
  console.log(" /////////////////////////////////////////////////////////////////////////////// ")
  console.log(" ////////////////////////// handleCatchedError End ///////////////////////////// ")
  console.log(" /////////////////////////////////////////////////////////////////////////////// ")
  console.log(" /////////////////////////////////////////////////////////////////////////////// ")
};

const returnCatchedError = ({ res = null, status = 400, error, at = "at position not defined" }) => {
  handleCatchedError({ at, error })
  res.status(status).json(error)
}

const successResponse = ({ data = null, message = null }) => {
  return {
    success: true,
    message,
    data,
  }
}

const failureResponse = ({ data = null, message = null }) => {
  return {
    success: true,
    message,
    data,
  }
}

const returnSuccessResponse = ({ res = null, status = 200, data = null, message = null }) => {
  if (res) {
    res.status(status).send(successResponse({ data, message }))
  }
}

const returnFailureResponse = ({ res = null, status = 200, message = null, }) => {
  res.status(status).json(failureResponse({ message }))
}

module.exports = {
  handleCatchedError,
  successResponse,
  failureResponse,
  returnSuccessResponse,
  returnFailureResponse,
  returnCatchedError,
};
