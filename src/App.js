import React from "react";
import "./App.css";
import { CardList } from "./component/card-list";
import { Input } from "./input/input";

class App extends React.Component{
    constructor(){
        super();
        this.state={
            monsters:[],
            searchfield:''
        };
        this.handleChange=this.handleChange.bind(this);

    }
    handleChange(e){
        this.setState({
            searchfield:e.target.value
        })
    }

    componentDidMount(){
       fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users=>{this.setState({monsters:users})})
    }

render(){

    const{monsters,searchfield}=this.state;
    const filterm=monsters.filter(monster=>monster.name.toLowerCase().includes(searchfield.toLowerCase()));
    return (<div className='App'>
        <h1>Monsters Rolodex</h1>
        <Input placeholder='search monsters' handChange={this.handleChange} />
        <CardList monsters={filterm}/></div>)
}

}
export default App;