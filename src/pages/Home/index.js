import { Container, TextMov } from "./styles";
import Header from "../../components/Header";
import Balance from "../../components/Balance";

export default function Home() {
  return (
    <Container>
      <Header name="Nelcael Alves"/>
      <Balance saldo="9.250,00" gastos="600,00"/>
      <TextMov>Últimas movimentações</TextMov>
    </Container>  
  );
}

