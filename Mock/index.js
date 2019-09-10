import Mock from 'mockjs'
// import axios from 'axios'
Mock.mock('/list','get',{
  "status":200,
  "list|10":[
    {"id|+1":1,"name":"@ctitle","title":"@country(true)"}
  ]
})
