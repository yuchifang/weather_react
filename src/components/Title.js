import React,{Component} from 'react'

class Title extends Component{
  render(){
    return (
      <div>
        <h1 className="title-container__title">weather Finder</h1>
        <h3 className="title-container__subtitle">Find out temperature,conditions and more...</h3>
      </div>
    )
  }
}
export default Title;