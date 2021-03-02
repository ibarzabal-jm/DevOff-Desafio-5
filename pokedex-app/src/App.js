import React from "react";
import { Grid } from "@chakra-ui/react";

import { AppRouter } from "./routers/AppRouter";
import Navbar from "./components/UI/Navbar";
import Footer from "./components/UI/Footer";

const App = () => {
  return (
    <Grid
      height="100vh"
      templateColumns="1fr"
      templateRows="auto 1fr auto"
      width="100vw"
    >
      <Navbar />
      <Grid
        backgroundImage={{
          base: "none",
          md: "url(/assets/ui/background.png)",
        }}
        justifyItems="center"
        overflowY="auto"
        overflowX="hidden"
      >
        <Grid maxW="680px" w="100%" marginY={{ base: 0, sm: 2, md: 4 }}>
          <AppRouter />
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  );
};

export default App;
