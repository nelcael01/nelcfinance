import { Container, TextMov, List } from "./styles";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";

const list = [
  {
    id: 1,
    label: "Boleto conta de Luz",
    value: "300,90",
    date: "17/09/2023",
    type: 0, //despesas
  },
  {
    id: 2,
    label: "Pix cliente X",
    value: "2.500,00",
    date: "17/09/2023",
    type: 1, //receita
  },
  {
    id: 3,
    label: "Parcelamento em cartão de crédito",
    value: "5.200,00",
    date: "17/09/2023",
    type: 1, //receita
  },
];

export default function Home() {
  return (
    <Container>
      <Header name="Nelcael Alves" />
      <Balance saldo="9.250,00" gastos="600,00" />
      <Actions />
      <TextMov>Últimas movimentações</TextMov>
      <List
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />
    </Container>
  );
}
