var axios = require("axios");
const { listConfig, START_DAY } = require("../../src/config/config");
const { getContent } = require("./getContent");
const { getWeatherTips, getWeatherData } = require("./getWeatherContent");
const week = {
  1: '一',
  2: '二',
  3: '三',
  4: '四',
  5: '五',
  6: '六',
  7: '天',
}
const getAllDataAndSend = (param) => {
  let today = new Date();
  let initDay = new Date(START_DAY);
  let lastDay = Math.floor((today - initDay) / 1000 / 60 / 60 / 24);
  let todaystr =
    today.getFullYear() +
    " / " +
    (today.getMonth() + 1) +
    " / " +
    today.getDate();
  
  const weekDay = today.getDay();
  listConfig.loveDate.value = lastDay;
  listConfig.nowDate.value = `今天是${todaystr}，星期${week[weekDay]}`;
  return Promise.all([getContent(), getWeatherTips(), getWeatherData()]).then(
    (data) => {
      listConfig.txt.value = data[0].data.text;
      const { WeatherImgUrl, WeatherText, Temperature, WindDirection } =
        data[2];
      listConfig.weather.value = `${WeatherText}，${WindDirection}，${data[1]}`;
      listConfig.temperature.value = Temperature;
      return sendMessage(param, listConfig);
    }
  );
};

function sendMessage(data, listConfig) {
  return axios.post(
    "https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=" +
      data.access_token,
    {
      touser: data.touser,
      template_id: data.template_id,
      data: listConfig || {},
    }
  );
}

module.exports = getAllDataAndSend;
