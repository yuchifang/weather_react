import React,{Component} from 'react';
//extend提供
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';
const API_KEY='bc3b1bdbc545dd494c779b1f88b13a61';
class App extends Component{
  state={
    temperature:undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error:undefined
  }
  getWeather=async(e)=>{  //React 16 Arrow function
    e.preventDefault();
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    const api_call=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data=await api_call.json();
    if(city&&country){
        console.log(data);
        this.setState({
          temperature:data.main.temp,
          city:data.name,
          country:data.sys.country,
          humidity:data.main.humidity,
          description:data.weather[0].description,
          error:""
        })
      }
      else{
        this.setState({
        temperature:undefined,
        city:undefined,
        country:undefined,
        humidity:undefined,
        description:undefined,
        error:"Please enter the value"
        })
      }
    }
  render(){
    return(
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
              <div className="col-sm-5 title-container">
                <Title/>
              </div>
              <div className="col-sm-7 form-container">
              <Form getWeather={this.getWeather}/>
              <Weather 
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                error={this.state.error}
                />
              </div>
              </div>              
            </div>
          </div>
        </div>
      </div>
    ); 
  }
};

export default App;