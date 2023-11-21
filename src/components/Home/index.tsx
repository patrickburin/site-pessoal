import * as C from "./styles";
import { TfiLink } from "react-icons/tfi";

const Home = () => {
  return (
    <C.Container>
      <div className="name">Patrick Burin Rodriguez</div>
      <div className="text">
        <C.Description>
          <img src="src/images/profile.png" className="image" />
          <div className="description">
            Olá! Meu nome é Patrick Burin Rodriguez e sou desenvolvedor front
            end. Nasci em 2000 no Brasil no sul de Santa Catarina, mais
            específicamente em Araranguá. Atualmente estou cursando a 7ª fase de
            Ciência da Computação na UNESC, em Criciúma. Atuo como desenvolvedor
            front end no Unesc Labs, sendo uma parceria entre a universidade e
            empresas de fora. Sou apaixonado por esportes, principalmente
            futebol e handeboll e também gosto de alguns eSports, como o famoso
            League of Legends. No meu tempo livre eu gosto de praticar esportes
            e jogar uma solo/duo no Lol. Também amo a praia e por morar em
            cidade litorânea, sempre que posso passo por lá.
          </div>
        </C.Description>
        <div className="experiences">
          <C.Experiences>
            <div className="experiencesTitle">Minhas experiências</div>
            <div className="job">
              <div className="titleJob">
                Desenvolvedor front end na OAIS Cloud / Unesc Labs
              </div>
              <div className="date">Fevereiro 2023 - Trabalho atual</div>
              <div className="descriptionJob">
                O <strong>Unesc Labs</strong> é um projeto da Unesc que visa a
                integração com empresas de fora. Utilizando os equipamentos da
                própria universidade a troco de experiência para os alunos.{" "}
                <br />
                Dentro do Unesc Labs eu desenvolvo para a OAIS Cloud, uma
                empresa localizada no Morro da Fumaça e que utiliza a tecnologia
                da empresa norueguesa PIQL para preservação de dados digitais
                por longos períodos de tempo. Atuo no desenvolvimento do portal
                da OAIS, onde os usuários têm acesso a documentos e assinatura
                digital. <br />
                <br />
                <strong>Tecnologias:</strong> TypeScript, React,
                Styled-Components, Material UI, Git, GitHub, Figma.
              </div>
            </div>
            <hr />
            <div className="job">
              <div className="titleJob">
                Suporte técnico - Consolide Registro de Marcas
              </div>
              <div className="date">Fevereiro 2021 - Março 2022</div>
              <div className="descriptionJob">
                Atuando nas tarefas diárias de um suporte técnico, como
                atendimento ao cliente interno (outros funcionários da empresa)
                na resolução de problemas com equipamentos técnicos e também de
                software. <br />
                Também fazia o intermedio entre os funcionários e o time de
                desenvolvimento, ajudando os desenvolvedores e também o time de
                produto da empresa.
                <br /> <br />
                <strong>Tecnologias:</strong> Notion, Figma, Trello.
              </div>
            </div>
          </C.Experiences>
        </div>
        <div className="experiences">
          <C.Projects>
            <div className="projectsTitle">Projetos pessoais</div>
            <div className="divider">
              <div className="project">
                <div className="titleProject">
                  Site Estofaria do Ananias <TfiLink size={30} />
                </div>
                <div className="descriptionProject">
                  Desenvolvimento de um site para uma estofaria automotiva.{" "}
                  <br />
                  <div className="tools">
                    <div className="tool">React</div>
                    <div className="tool">TypeScript</div>
                    <div className="tool">Styled-Components</div>
                    <div className="tool">Material UI</div>
                  </div>
                </div>
                <div className="buttons">
                  <strong>Disponível em:</strong>
                  <button>Vercel</button>
                  <button>GitHub</button>
                </div>
              </div>

              <div className="project">
                <div className="titleProject">
                  Jogo adivinhar a bandeira <TfiLink size={30} />
                </div>
                <div className="descriptionProject">
                  Desenvolvimento de um mini jogo onde o usuário deve adivinhar
                  a bandeira. <br />
                  <div className="tools">
                    <div className="tool">Java</div>
                    <div className="tool">Spring Boot </div>
                    <div className="tool">React</div>
                    <div className="tool">Typescript</div>
                    <div className="tool">Material UI</div>
                    <div className="tool">Styled-Component</div>
                  </div>
                </div>
                <div className="buttons">
                  <strong>Disponível em:</strong>
                  <button>Vercel</button>
                  <button>GitHub</button>
                </div>
              </div>
            </div>
          </C.Projects>
        </div>
      </div>
    </C.Container>
  );
};

export default Home;
