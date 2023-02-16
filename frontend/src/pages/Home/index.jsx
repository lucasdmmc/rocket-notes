import { FiPlus, FiSearch } from "react-icons/fi"
import { Brand, Container, Content, Menu, NewNote, Search } from "./styles"
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Section } from "../../components/Section"
import { Note } from "../../components/Note"


export function Home () {
  return (
    <Container>
      <Header />
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>


      <Menu>        
        <li><ButtonText title="Todos" isActive/></li>
        <li><ButtonText title="React"/></li>
        <li><ButtonText title="NodeJS"/></li>        
      </Menu>

      <Search>
        <Input 
          placeholder="Pesquisar pelo título"
          icon={FiSearch}
        />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note data={{
            title: "React", 
            tags: [
              {id: "1", name: "React"},
              {id: "2", name: "Rocketseat"},
            ]
          }}
          />
        </Section>
      </Content>

      <NewNote to="/new">
         <FiPlus />
         Criar Nota
      </NewNote>
    </Container>
  )
}