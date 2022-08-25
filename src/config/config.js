// 微信测试公众号
const params = {
  appid: 'wx143e02b821e94662',
  secret: '1f1d5625fed41a42b7eeaf4ec51d2d2f',
  touser: 'oR3b15o7RcErdBYUnGOsm7MkGZVQ',
  template_id: 'fU0cYOHB98SyXjBuN8e036MV_eglenzR6raZxzwpBz4',
}

// 纪念日
const START_DAY = "2020/6/13";
// 每日发送时间
const SEND_HOUR = 07;
const SEND_MINUTE= 30;
// 获取每日情话链接
const CHP_URL = 'https://api.shadiao.pro/chp';
// 当地拼音,需要在下面的墨迹天气url确认
const LOCAL = "beijing/beijing";
// 获取天气链接
const WEATHER_URL = "https://tianqi.moji.com/weather/china/" + LOCAL;

const listConfig = {
  nowDate: {
    value: '',
    color: '#87e8de',
  },
  city: {
    value: '北京',
    color: '#9CA2A0',
  },
  weather: {
    value: '',
    color: '#7CD47D',
  },
  temperature: {
    value: '',
    color: '#CBA476',
  },
  loveDate: {
    value: '',
    color: '#ff9c6e',
  },

  txt: {
    value: '',
    color: '#3C4244',
  },
}

module.exports = {
  params,
  listConfig,
  START_DAY,
  SEND_HOUR,
  SEND_MINUTE,
  CHP_URL,
  WEATHER_URL
}
