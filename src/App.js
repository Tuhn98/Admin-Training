import React, { useState, useEffect } from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Reports from "./pages/Reports";
import Team from "./pages/Team";
import Message from "./pages/Message";
import Support from "./pages/Support";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, blueTheme, GlobalStyles } from "./theme";
import DataUser from './data.json'

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

export default function App() {

  const [theme, setTheme] = useState("");
  const [searchText, setsearchText] = useState("")
  const [, setlang] = useState("")
  const [data, setdata] = useState([])

  useEffect(() => {
    if (localStorage.getItem('lang') === null) {
      localStorage.setItem('lang', "vi")
    }
    else {
      let lang = localStorage.getItem('lang');
      setlang(lang)
    }
    return () => {
    }
  }, [])

  useEffect(() => {
    if (localStorage.getItem('theme') === null) {
      localStorage.setItem('theme', "light")
    }
    else {
      let theme = localStorage.getItem('theme');
      setTheme(theme)
    }
    return () => {
    }
  }, [])

  useEffect(() => {
    if (localStorage.getItem('data') === null) {
      localStorage.setItem('data', JSON.stringify(DataUser))
    }
    else {
      let data = JSON.parse(localStorage.getItem('data'));
      setdata(data)
    }
    return () => {
    }
  }, [])

  const themeToggler = () => {
    if (theme === "light") return lightTheme
    else if (theme === "dark") return darkTheme
    else return blueTheme
  };

  var list = [];
  data.forEach((item) => {
    if (item.name.indexOf(searchText) !== -1 || item.email.indexOf(searchText) !== -1) {
      list.push(item);
    }
  })

  return (
    <div>
      <ThemeProvider theme={themeToggler}>
        <GlobalStyles />
        <StyledApp>
          <Router>
            <Navbar theme={theme} setsearchText={(value) => setsearchText(value)} setTheme={(value) => setTheme(value)} />
            <Switch>
              <Route path="/" exact component={()=>Home({list}) } />
              <Route path="/products" component={Products} />
              <Route path="/reports" component={Reports} />
              <Route path="/team" component={Team} />
              <Route path="/message" component={Message} />
              <Route path="/support" component={Support} />
            </Switch>
          </Router>
        </StyledApp>
      </ThemeProvider>
    </div>
  );
}
