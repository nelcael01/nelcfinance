import { useState } from "react";
import { Container, Date, Content, Label, Value, Expenses, Hidden } from "./styles";

export default function Movements({ data }) {
  const [showValue, setShowValue] = useState(false);
  function handleShowValue() {
    setShowValue(!showValue)
  }

  return (
    <Container onPress={handleShowValue}>
      <Date>{data.date}</Date>
      <Content>
        <Label>{data.label}</Label>
        {showValue ? (
          data.type === 0 ? (
            <Expenses>R$-{data.value}</Expenses>
          ) : (
            <Value>R${data.value}</Value>
          )
        ) : (
          <Hidden />
        )}
      </Content>
    </Container>
  );
}
