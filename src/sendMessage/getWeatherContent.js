const { WEATHER_URL } = require("../config/config");

const superagent = require("superagent"); //发送网络请求获取DOM
const cheerio = require("cheerio"); //能够像Jquery一样方便获取DOM节点

// 获取天气提醒
const getWeatherTips = () => {
  let p = new Promise((resolve, reject) => {
    superagent.get(WEATHER_URL).end((err, res) => {
      if (err) {
        reject(err);
      }
      let weatherTip = "";
      let $ = cheerio.load(res.text);
      $(".wea_tips").each((i, elem) => {
        weatherTip = $(elem).find("em").text();
      });
      resolve(weatherTip);
    });
  });
  return p;
};

// 获取天气预报
const getWeatherData = () => {
  let p = new Promise((resolve, reject) => {
    superagent.get(WEATHER_URL).end((err, res) => {
      if (err) {
        reject(err);
      }
      let threeDaysData = [];
      let $ = cheerio.load(res.text);
      $(".forecast .days").each((i, elem) => {
        const SingleDay = $(elem).find("li");
        threeDaysData.push({
          WeatherImgUrl: $(SingleDay[1]).find("img").attr("src"),
          WeatherText: $(SingleDay[1])
            .text()
            .replace(/(^\s*)|(\s*$)/g, ""),
          Temperature: $(SingleDay[2])
            .text()
            .replace(/(^\s*)|(\s*$)/g, ""),
          WindDirection: $(SingleDay[3])
            .find("em")
            .text()
            .replace(/(^\s*)|(\s*$)/g, ""),
        })
      });
      resolve(threeDaysData[0]);
    });
  });
  return p;
};

module.exports = {
  getWeatherTips,
  getWeatherData
}