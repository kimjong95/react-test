import { Container } from "react-bootstrap";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { OrderDetailsProvider } from "./context/OrderDetail";
import OrderEntry from "./pages/entry/OrderEntry";

function App() {
  return (
    <Container>
      <OrderDetailsProvider>
        {/* Summary page and entry page need provider */}
        <OrderEntry />
      </OrderDetailsProvider>
      {/* Confirmation page does not need provider */}
      {/* <OrderConfirmation /> */}
    </Container>
  );
}

export default App;
