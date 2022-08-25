var axios = require("axios");
const { CHP_URL } = require('../config/config');
const getContent = async () => {
  let { data } = await axios({
    url: CHP_URL,
  });
  return data;
};

module.exports = {
  getContent,
};
