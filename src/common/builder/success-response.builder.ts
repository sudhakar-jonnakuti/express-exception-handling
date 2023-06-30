const SuccessResponse = (statusCode: number, payload: any) => {
  return { statusCode, payload };
};

export default SuccessResponse;