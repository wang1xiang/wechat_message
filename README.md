[原项目地址](https://github.com/lazy-tomato/wechat_message)

## 实现功能

在原有项目基础上新增了：
1. 使用node-schedule设置定时发送任务，每日定时发送
2. 通过[配置](https://github.com/wang1xiang/wechat_message/blob/master/src/config/config.js)可自动计算时间
3. 拉取天气及每日情话，自动拼接并发送

## 运行项目

```shell
npm i
npm start
```

## 其他说明

#### 模板代码

```
{{nowDate.DATA}}
城市：{{city.DATA}}
天气： {{weather.DATA}}
气温： {{temperature.DATA}} 
今天是我们恋爱的 {{loveDate.DATA}} 天 
{{txt.DATA}}
```

#### 公众号测试地址

https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=sandbox/login


