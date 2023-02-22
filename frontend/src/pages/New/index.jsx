import { Container, Form } from "./styles";
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/Section"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";
import { ButtonText } from "../../components/ButtonText";
export function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleBackToHome() {
    navigate(-1)
  }
  
  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink])
    setNewLink("")
  }

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted))
  }

  function handleAddTag() {
    const existTag = tags.find(tag => tag === newTag)
    setNewTag("")
    
    if(existTag) {
      alert("Você já adicionou essa tag")
      return
    }
    setTags(prevState => [...prevState, newTag])
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(link => link !== deleted))
  }

  async function handleNewNote() {
    if(!title) {
      return alert("Digite o titulo da nota")
    }

    if(newTag) {
      return alert("Você esqueceu de adicionar a tag")
    }

    if(newLink) {
      return alert("Você esqueceu de adicionar o link")
    }

    const note = {
      title,
      description,
      tags,
      links
    }

    await api.post("/notes", note)

    alert("Nota criada com sucesso")

    navigate(-1)
  }
  
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <ButtonText 
              title="Voltar"
              onClick={handleBackToHome}
            />
          </header>

          <Input 
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea 
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />

          <Section title="Links úteis">
            {links.map((link, index) => (
              <NoteItem 
                key={String(index)}
                value={link}
                onClick={() => handleRemoveLink(link)}
              />
            ))}
            <NoteItem 
              isNew 
              placeholder="Novo link"
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {tags.map((tag, index) => (
                <NoteItem 
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}
              <NoteItem 
                isNew 
                value={newTag}
                placeholder="Nova tag"
                onChange={(e) => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <Button 
            title="Salvar"
            onClick={handleNewNote}
          />
        </Form>
      </main>
    </Container>
  )
}