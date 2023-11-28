import * as C from "./styles";
import { TfiLink } from "react-icons/tfi";
import profile from "/src/images/profile.png";
import logoInstagram from "/src/images/logoInstagram.png";
import { FaWhatsapp, FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  const [typeEffect] = useTypewriter({
    words: ["TypeScript", "JavaScript", "React"],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 100,
  });

  return (
    <C.Container>
      <C.Start>
        <C.Name>Patrick Burin Rodriguez</C.Name>

        <C.Developer>
          Desenvolvedor
          <span>
            {typeEffect}
            <Cursor />
          </span>
        </C.Developer>

        <C.SocialMedia>
          <div className="icon">
            <FaWhatsapp size={50} color="#25D366" />
          </div>
          <div className="icon">
            <FaGithub size={50} />
          </div>
          <div className="icon">
            <IoLogoVercel size={50} />
          </div>
          <div className="icon">
            <CiLinkedin size={50} />
          </div>
          <div className="icon">
            <img src={logoInstagram} />
          </div>
        </C.SocialMedia>
      </C.Start>

      <div className="text">
        <div className="imageText">
          <C.Description>
            <img src={profile} className="image" />
            <div className="description">
              Olá! Meu nome é Patrick e sou estudande de Ciências da Computação,
              na Unesc. Atualmente sou desenvolvedor front end na OAIS Cloud e
              trabalho com TypeScript e React. Fora do mundo da programação, eu
              gosto bastante de ir à academia, jogar bola e handebol. Também
              assisto bastante série e filmes. Gosto bastante de estar com minha
              família e meus amigos, para fazer desde um churrasco até sair para
              uma festa. Gosto muito de ir à praia e por morar em litoral, acabo
              aproveitando bastante o mar, calor e o verão.
            </div>
          </C.Description>
        </div>

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
                digital.
                <div className="tools">
                  <strong>Tecnologias:</strong>
                  <div className="tool">React</div>
                  <div className="tool">TypeScript</div>
                  <div className="tool">Styled-Components</div>
                  <div className="tool">Material UI</div>
                </div>
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
                <div className="tools">
                  <strong>Tecnologias:</strong>
                  <strong>Tecnologias:</strong>
                  <div className="tool">Figma</div>
                  <div className="tool">Trello</div>
                </div>
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
                <div className="tools">
                  <div className="tool">React</div>
                  <div className="tool">TypeScript</div>
                  <div className="tool">Styled-Components</div>
                  <div className="tool">Material UI</div>
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
                <div className="tools">
                  <div className="tool">Java</div>
                  <div className="tool">Spring Boot </div>
                  <div className="tool">React</div>
                  <div className="tool">Typescript</div>
                  <div className="tool">Material UI</div>
                  <div className="tool">Styled-Component</div>
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
