import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag"
import { Container, Links, Content } from "./styles";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />3333333333333333333333333333333333333333

          <h1>Introdução ao React</h1>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, ea assumenda dolorum temporibus vero tenetur ad. Tenetur minus fuga praesentium, voluptatum voluptate, tempora eaque esse odit delectus possimus totam unde!
          </p>

          <Section title="Links úteis">
            <Links>
              <li><a href="#">https://www.rocketseat.com.br/</a></li>
              <li><a href="#">https://www.rocketseat.com.br/</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express"/>
            <Tag title="node"/>
          </Section>
            
          <Button title="Voltar"/>
        </Content>
      </main>
    </Container>
  )
}
