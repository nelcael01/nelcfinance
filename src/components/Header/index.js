import { Container, Content, NameUser, BotaoUser } from "./styles";
import { StatusBar } from "react-native";
import {Feather} from "@expo/vector-icons"

export default function Header(props) {

  const statusBarHeight = StatusBar.currentHeight
  return(
    <Container>
      <Content>
        <NameUser>{props.name}</NameUser>
        <BotaoUser activeOpacity={0.9}>
          <Feather name="user" size={27} color="#fff"/>
        </BotaoUser>
      </Content>
    </Container>
  )
}