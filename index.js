import React, { Component } from 'react'
import axios from 'axios'
import './Mock/style.css'
import './Mock/index'
export default class index extends Component {
  state={list:[]}
  render() {
    let {list}=this.state
    return (
      <div>
        <b>搜索热点</b>
        {
          list.map((item,index)=>{
            return (

                <li key={index}>{item.id} <span>{item.name}</span></li>
             
            )
          })
        }
      </div>
    )
  }
  componentDidMount(){
    axios.get('/list').then((res)=>{
     this.setState({list:res.data.list})
    })
  }
}
