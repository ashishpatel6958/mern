const actions = {
  SAMPLE_START: "SAMPLE_START",
  SAMPLE_START_SUCCESS: "SAMPLE_START_SUCCESS",
  SAMPLE_START_FAILURE: "SAMPLE_START_FAILURE",

 
  sampleStart: (payload = {}) => ({
    type: actions.SAMPLE_START,
    payload
  }),

  
  sampleSuccess: (payload = []) => ({
    type: actions.SAMPLE_START_SUCCESS,
    payload
  }),

  
  sampleError: (error = "") => ({
    type: actions.SAMPLE_START_FAILURE,
    error
  }),
};
export default actions;
