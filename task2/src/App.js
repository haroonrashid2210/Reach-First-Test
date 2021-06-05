import React from "react";
import "@fontsource/actor";
import "./App.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import CardHeader from "./components/CardHeader";
import { Container, Divider, Card } from "@material-ui/core";
import CardBody from "./components/CardBody";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Actor", "serif"].join(","),
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "0 0 20px #ddd",
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container style={{ padding: 150 }}>
        <Card className={classes.root}>
          <CardHeader />
          <Divider />
          <CardBody />
        </Card>
      </Container>
    </ThemeProvider>
  );
}
