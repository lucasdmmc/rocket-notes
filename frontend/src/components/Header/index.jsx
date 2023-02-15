import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri"
export function Header() {
  return (
    <Container>
      <Profile>
        <img 
          src="https://github.com/lucasdmmc.png" 
          alt="Foto do usuário" 
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Lucas Carvalho</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine size={36}/>
      </Logout>
    </Container>
  )
}