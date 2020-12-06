import './app.css';
import './index.css';
import './styles/styles.scss';
import NewEntry from './components/homepage/new_entry_button';
import NewEntryPage from './components/newentrypage/new_entry_page';
import NavBar from './components/navbar'
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
// import 'normalize.css/normalize.css';


const Routers = () => (
    <div>
      <Switch>
        <Route path="/" component={NewEntry} exact={true}/>
        <Route path="/new_entry" component={NewEntryPage} exact={true}/>
        <Route path="/entries" component={entry_list} exact={true}/>
      </Switch>
    </div>
)



const entry_list = () => {
  // const style = {
  //   background: "none",
  //   fontFamily:"Arial",
  //   color:"black",
  //   fontSize:"1rem",
  //   marginLeft:"0",
  //   width:"100px",
  //   height:"50px"

  // }
  return(
    <div>
      <p>Entries</p>
    </div>
    
  )
}



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div>
        <NavBar className="navbar"/>
        <header className="App-header">
        </header>
          <Routers />
        </div>
        
      </BrowserRouter>
      
      
    </div>
  );
}




export default App;
