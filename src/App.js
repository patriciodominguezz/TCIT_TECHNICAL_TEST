import React from "react";
import TableComponent from "./components/Table";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <div className="App">
      <SnackbarProvider maxSnack={1} autoHideDuration={2000}>
        <TableComponent />
      </SnackbarProvider>
    </div>
  );
}

export default App;
