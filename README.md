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

#### 官方通知

自5月4号起，去除自定义颜色、表情符号以及首位行设置。所以我们程序中设置的颜色不再生效。
https://developers.weixin.qq.com/community/develop/doc/000a2ae286cdc0f41a8face4c51801?highLine=%25E5%2585%25B3%25E4%25BA%258E%25E8%25A7%2584%25E8%258C%2583
<img width="1085" alt="image" src="https://user-images.githubusercontent.com/37827912/236591274-55feef44-8a87-4b03-9403-17b565576142.png">



#### 公众号测试地址

https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=sandbox/login


