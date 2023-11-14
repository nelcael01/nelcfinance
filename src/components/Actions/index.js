import { Container, ActionButton, AreaButton, ButtonLabel } from "./styles";
import { AntDesign } from "@expo/vector-icons";

export default function Actions() {
  return (
    <Container horizontal={true} showsHorizontalScrollIndicator={false}>
      <ActionButton>
        <AreaButton>
          <AntDesign name="addfolder" size={26} color="#000" />
        </AreaButton>
        <ButtonLabel>Entradas</ButtonLabel>
      </ActionButton>

      <ActionButton>
        <AreaButton>
          <AntDesign name="tagso" size={26} color="#000" />
        </AreaButton>
        <ButtonLabel>Compras</ButtonLabel>
      </ActionButton>

      <ActionButton>
        <AreaButton>
          <AntDesign name="creditcard" size={26} color="#000" />
        </AreaButton>
        <ButtonLabel>Carteira</ButtonLabel>
      </ActionButton>

      <ActionButton>
        <AreaButton>
          <AntDesign name="barcode" size={26} color="#000" />
        </AreaButton>
        <ButtonLabel>Boletos</ButtonLabel>
      </ActionButton>

      <ActionButton>
        <AreaButton>
          <AntDesign name="setting" size={26} color="#000" />
        </AreaButton>
        <ButtonLabel>Conta</ButtonLabel>
      </ActionButton>

    </Container>
  );
}
