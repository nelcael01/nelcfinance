import {
  Container,
  ContainerItem,
  ItemTitle,
  CurrencySymbol,
  TitleBalance,
  Content,
  TitleExpenses,
} from "./styles";

export default function Balance({saldo, gastos}) {
  return (
    <Container>
      <ContainerItem>
        <ItemTitle>Saldo</ItemTitle>
        <Content>
          <CurrencySymbol>R$</CurrencySymbol>
          <TitleBalance>{saldo}</TitleBalance>
        </Content>
      </ContainerItem>

      <ContainerItem>
        <ItemTitle>Gastos</ItemTitle>
        <Content>
          <CurrencySymbol>R$</CurrencySymbol>
          <TitleExpenses>{gastos}</TitleExpenses>
        </Content>
      </ContainerItem>
    </Container>
  );
}
