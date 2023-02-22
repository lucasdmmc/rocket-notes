import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag"
import { api } from "../../services/api";
import { Container, Links, Content } from "./styles";

export function Details() {
  const [data, setData] = useState(null)
  const { id } = useParams()

  const navigate = useNavigate()

  async function handleRemoveNote() {
    const confirm = window.confirm("Deseja remover a nota?")

    if(confirm) {
      await api.delete(`/notes/${id}`)
      navigate(-1)
    }
  }

  function handleBackToHome() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${id}`)
      setData(response.data)
    }
    fetchNote()
  }, [])

  return (
    <Container>
      <Header />
      {
        data &&
        <main>
          <Content>
            <ButtonText 
              title="Excluir nota"
              onClick={handleRemoveNote}
            />

            <h1>{data.title}</h1>

            <p>{data.description}</p>

              { 
                data.links &&
                <Section title="Links úteis">
                  {
                    data.links.map(link => (
                      <Links key={String(link.id)}>
                        <li>
                          <a href={link.url} target="_blank">
                            {link.url}
                          </a>
                        </li>
                      </Links>
                    ))
                  }
                </Section>
              }

            { data.tags &&
              <Section title="Marcadores">
                {
                  data.tags.map(tag => (
                    <Tag
                      key={String(tag.id)}
                      title={tag.name}
                    />
                  ))
                }
              </Section>
            }  
            <Button 
              title="Voltar"
              onClick={handleBackToHome}
            />
          </Content>
        </main>
      }
    </Container>
  )
}
