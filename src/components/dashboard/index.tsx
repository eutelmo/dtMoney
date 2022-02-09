import { Container } from "./syles";
import { Summary } from '../summary'
import { TransactionTable } from "../transactionsTable";

export function Dashboard() {
  return(
    <Container>
      <Summary />
      <TransactionTable />
    </Container>
  );
}