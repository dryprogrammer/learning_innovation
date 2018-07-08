import React from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

import Colors from '@material-ui/core/colors';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Routes
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Themes from './Themes';
import Technologies from './Technologies';
import TechnologyPage from './TechnologyPage';
import AppSelection from './AppSelection';

import FilterForm from './FilterForm';
// import AppBar from './AppBar';
// import AppBar2 from './AppBar2';

import SkillsDashboard from './SkillsDashboard';
import LandingPage from './LandingPage2';
import SkillsChart from './SkillsChart';

import CurrentProjects from './CurrentProjects';
import ProjectDashboard from './ProjectDashboard';

import Accreditations from './Accreditations';
import "animate.css";
import ReactChatWidget from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import { script, letter } from '../script'
import * as R from 'ramda';
import ReactHighcharts from 'react-highcharts';
import { Table } from './Table';

const ReactHighmaps = require('react-highcharts/ReactHighmaps');

const messageDelay = 1000;

const { Widget, addResponseMessage, addLinkSnippet, renderCustomComponent, toggleWidget } = ReactChatWidget;
console.log('ReactChatWidget', ReactChatWidget);
const styles2 = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
};

// import { AppMUI as Root } from './Root';

// All the following keys are optional.
// We try our best to provide a great default value.
const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: Colors.pink,
    secondary: Colors.lightGreen,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});


// rgb(55, 197, 250)
// rgb(249, 128, 171);
// rgb(87, 86, 96);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);
          // <ul>
          //   <li>
          //     <Link to="/">Home</Link>
          //   </li>
          //   <li>
          //     <Link to="/app_selection">About</Link>
          //   </li>
          //   <li>
          //     <Link to="/project">Topics</Link>
          //   </li>
          // </ul>

          // <AppBar2 />
          const backgroundImage = '/images/word.png';
          const styles = {
            main: {
              backgroundImage: `url(${backgroundImage})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '1440px 833px',
              width: '100%',
              height: '100vh',
            },
          };

          class WordArea extends React.Component {
            componentDidMount(){
              this.textInput.focus();
              // const nextMessage = script[0].messages[2];
              // addResponseMessage(nextMessage.text);
              // const Comp = prebuildComponents[nextMessage.componentName];
              // renderCustomComponent(Comp, {}, true);
              // toggleWidget();
            }
            render() {
              const { handleSubmit, handleChange} = this.props;
              return (
                <form onSubmit={handleSubmit}>
                  <textarea 
                    ref={(input) => { this.textInput = input; }} 
                    style={{
                      "marginTop": 283,"marginLeft": 364,"borderStyle":"none","resize":"none",
                      outlineWidth: 0,
                      width: 700,
                      height: 492,
                      fontSize: 19,
                    }}
                    value={this.props.text} onChange={handleChange} />
                </form>
              );
            }
          };
          const prebuildComponents = {
            helloComponent: () => <div> hello </div>,
            snippet: () => (<div style={{
              background: '#f4f7f9',
              padding: 15,
              borderRadius: 10,
            }} > <img width='300px' src='/images/snippet.png' /> </div>),
            videoComponent: () => (
              <div style={{}} >
                <video width="300" height="180" autoPlay muted>
                  <source src="/digital_transformation_20s.mp4#t=1" type="video/mp4" />
                </video>
                <img width='300px' src="/images/service_dinner_speech.png" />
              </div>
            ),
            videoCallComponent: () => (
              <div>
                <video width="250" height="400" autoPlay muted>
                  <source src="/videocall_demo.mp4#t=1" type="video/mp4"/>
                </video>
              </div>
            ),
          };
          class Chat extends React.Component {
            // componentDidMount() {
            //   setTimeout(()=>addResponseMessage("Welcome to this awesome chat!"), 7000);
            // }
          
            handleNewUserMessage = (newMessage_notused) => {
              const processMessage = (messageObject) => {
                console.log('messageObject', messageObject);
                switch(messageObject.type) {
                 case 'messageList':
                    R.reduce((promise_handle, nextMessageObject)=>{
                      return promise_handle
                        .then(
                          ()=> new Promise(
                            (resolve, reject) => 
                              setTimeout(
                                ()=>{
                                  processMessage(nextMessageObject)
                                  resolve();
                                }, messageDelay/2)
                          ));
                    }, Promise.resolve(), messageObject.messageList);
                    break;
                 case 'link':
                    addLinkSnippet(R.pick(['title', 'link', 'target'], messageObject));
                    break;
                  case 'custom':
                    const Comp = prebuildComponents[messageObject.componentName];
                    renderCustomComponent(Comp, {}, true);
                    break;
                  case 'text':
                  default:
                    addResponseMessage(messageObject.text);
                    break;
                };
              };

              setTimeout(()=>{
                processMessage(this.props.nextMessage);
                this.props.popMessage();
              }, messageDelay);
            }
          
            render() {
              
              const chatMode = this.props.chatMode;
              let style, className;
              switch(chatMode) {
                case 'show':
                  style = {};
                  className = 'animated bounceInUp';
                  break;
                case 'hide':
                  style = {};
                  className = 'animated zoomInDown';
                  break;
                case 'init':
                default:
                  style = { display: 'none' };
                  className = '';
                  break;
              };

              return (
                <div className={className} style={style} >
                  <Widget
                    titleAvatar='/images/merly.jpeg'
                    profileAvatar='/images/merly_logo.jpeg'
                    title='Merly'
                    subtitle='Ask me any question'
                    badge={this.props.unreadMessages}
                    handleNewUserMessage={this.handleNewUserMessage}
                    onClick={()=>{ console.log('widget click');}}
                  />
                </div>
              );
            } 
          };

          // const Angel = ({show}) => {
          //   const classEntry = show ? 'animated zoomInDown' : 'hidden';
          //   return (
          //     <div>
          //       <img className={classEntry} style={{
          //         "width":"100px","position":"fixed","right":"140px","top":"190px"
          //       }} src="/images/cloudwink.png" />
          //       <Chat className={classEntry} />
          //     </div>
          //   );
          // };

          class LIHome extends React.Component {
            constructor(props) {
              super(props);
              this.state = {
                unreadMessages: 0,
                text: letter,
                stage: 0,
                messagesQueued: [],
                chatMode: 'init', // 'show', 'hide'
              };
          
              this.handleChange = this.handleChange.bind(this);
              this.handleSubmit = this.handleSubmit.bind(this);
            }
          
            handleChange(event) {
              const text = event.target.value;
              const stageScenario = script[this.state.stage];
              const messagesQueued = this.state.messagesQueued;
              console.log('handleChange');
              if(R.isEmpty(messagesQueued) && R.test(new RegExp(stageScenario.prompt, 'i'), text)) {
                console.log('inside');
                const botMessages = R.filter(R.propEq('speaker', 'bot'), stageScenario.messages);
                addResponseMessage(botMessages[0].text);
                this.setState({ text, unreadMessages: 1, messagesQueued: R.tail(botMessages), chatMode: 'show' });
              } else {
                console.log('outside');
                this.setState({ text });
              };
            }
          
            handleSubmit(event) {
              alert('An essay was submitted: ' + this.state.text);
              event.preventDefault();
            }

            render() {
              const { unreadMessages, text, chatMode } = this.state;
              const { handleSubmit, handleChange } = this;
              return (
                <div style={styles.main} >
                  <WordArea { ...{ text, handleSubmit, handleChange }} />
                  <Chat chatMode={chatMode} unreadMessages={unreadMessages} 
                    nextMessage={this.state.messagesQueued[0]} 
                    popMessage={() => {
                      if(this.unreadMessages !== 0) {
                        this.setState((ps)=>({ messagesQueued: R.tail(ps.messagesQueued), unreadMessages: 0 }));
                      } else this.setState((ps)=>({ messagesQueued: R.tail(ps.messagesQueued)}));
                    }} 
                  />
                </div>
              )
            };
          }

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div>
          <Route exact path="/" component={LIHome} />
          <Route exact path="/course_design" component={Table} />

          <Route exact path="/themes" component={Themes} />
          <Route exact path="/tech" component={Technologies} />
          <Route path="/tech/:id" component={TechnologyPage} />

          <Route path="/app_selection" component={FilterForm} />
          <Route path="/filter_form" component={FilterForm} />

          <Route path="/skills_dashboard" component={SkillsDashboard} />

          <Route exact path="/current_projects" component={CurrentProjects} />
          <Route exact path="/project_dashboard/:id" component={ProjectDashboard} />

          <Route path="/skills_chart" component={SkillsChart} />

          <Route path="/accreditations" component={Accreditations} />
        </div>
      </Router>
    </MuiThemeProvider>
  );
}