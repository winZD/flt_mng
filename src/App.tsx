import { Layout } from "./Components/Layout/Layout";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Crew } from "./Components/Crew/Crew";

function App() {
  return (
    <MantineProvider theme={{ colorScheme: "light" }} withGlobalStyles>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<div />}></Route>

            <Route path="/crew" element={<Crew />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
