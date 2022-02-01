import React from "react";
import Info from "./Components/info"
import Form from "./Components/form"
import Stat from "./Components/stat"

const REACT_APP_API_KEY = "8e1f996fab1c449a8816865f32702056";
let ind = 0;

class App extends React.Component {

  state = {
    area: undefined,
    code: undefined,
    name: undefined,
    plan: undefined,
    count: undefined
  }

  gettingStat = async (event) => {
    event.preventDefault();
    //const matchday = 1; //event.target.elements.matchday.value;
    //let ind = i;
    const api_url = await 
    //fetch(`https://api.football-data.org/v2/competitions/PL/matches?matchday=${matchday}`, 
    fetch(`http://api.football-data.org/v2/competitions`, 
    { headers: {'X-Auth-Token': REACT_APP_API_KEY} });
    const data = await api_url.json();
    console.log(data);
    this.setState({
    area: data.competitions[ind].area.name,
    code: data.competitions[ind].code,
    name: data.competitions[ind].name,
    plan: data.competitions[ind].plan,
    count: data.count
    }); 
    ind++;
  }

  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 info">
                <Info />
              </div>
              <div className="col-sm-7 form">
                <Form param={this.gettingStat} />
                <Stat 
                area={this.state.area}
                code={this.state.code}
                name={this.state.name}
                plan={this.state.plan}
                count={this.state.count}
                param={this.gettingStat}
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default App;
