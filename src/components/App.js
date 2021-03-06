import React, { Component } from "react";
//
import Nav from "./Nav";
import Home from "./Home.js";
import About from "./About.js";
import Projects from "./Projects.js";
import Contact from "./Contact.js";
//
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
//
import "../styles/App.scss";

class App extends Component {
  state = {
    site: 1,

    width: null,
    height: null,
  };
  theme = createMuiTheme({
    palette: {
      primary: {
        main: "#222222",
      },
      secondary: {
        main: "#eeeeee",
      },
      transparent: {},
    },
  });

  getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    this.setState({
      width: width,
      height: height,
    });
  };

  handleCallback = (childData) => {
    this.setState({ site: childData });
  };

  render() {
    window.addEventListener("load", this.getWindowDimensions);
    window.addEventListener("resize", this.getWindowDimensions);
    // console.log(this.state.width);
    return (
      <MuiThemeProvider theme={this.theme}>
        <div className="container">
          <Nav
            parentCallback={this.handleCallback}
            onChange={this.handleCallback}
          />
          {this.state.site === 1 ? <Home /> : null}
          {this.state.site === 2 ? <About width={this.state.width} /> : null}
          {this.state.site === 3 ? <Projects /> : null}
          {this.state.site === 4 ? <Contact width={this.state.width} /> : null}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
