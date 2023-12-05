import * as C from "./styles";
// import { TfiLink } from "react-icons/tfi";
import profile from "/src/images/profile.png";
import logoInstagram from "/src/images/logoInstagram.png";
import { FaWhatsapp, FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { GoLink } from "react-icons/go";

const Home = () => {
  const [typeEffect] = useTypewriter({
    words: ["TypeScript", "JavaScript", "React", "Node.js"],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 100,
  });

  return (
    <C.Container>
      <C.Start>
        <div className="name">Patrick Burin Rodriguez</div>

        <C.Developer>
          Desenvolvedor
          <span>
            {typeEffect}
            <Cursor />
          </span>
        </C.Developer>

        <C.SocialMedia>
          <div
            className="icon"
            onClick={() => {
              window.open("https://github.com/patrickburin", "blank");
            }}
          >
            <FaGithub size={50} />
          </div>
          <div
            className="icon"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/patrick-burin-rodriguez-398496206/",
                "blank"
              );
            }}
          >
            <CiLinkedin size={50} />
          </div>
          <div
            className="icon"
            onClick={() => {
              window.open(
                "https://vercel.com/patrick-burin-rodriguezs-projects",
                "blank"
              );
            }}
          >
            <IoLogoVercel size={50} />
          </div>
          <div
            className="icon"
            onClick={() => {
              window.open("https://www.instagram.com/patrickburinn/", "blank");
            }}
          >
            <img src={logoInstagram} />
          </div>
          <div
            className="icon"
            onClick={() => {
              window.open(
                "https://api.whatsapp.com/send?phone=554899082788",
                "blank"
              );
            }}
          >
            <FaWhatsapp size={50} color="#25D366" />
          </div>
        </C.SocialMedia>
      </C.Start>

      <C.AboutMe>
        <img src={profile} className="image" />
        <div className="descripton">
          <div className="titleName">Olá, eu sou o Patrick!</div>
          Estou cursando a 7ª fase de Ciência da Computação e minha vida pessoal
          é bastante variada. Gosto bastante de treinar e esportes,
          principalmente futebol, handebol e vôlei. Também gosto de jogar alguns
          eSports e assistir séries e filmes. Tenho o sonho de viajar pelo mundo
          conhecendo vários países e culturas diferentes.
        </div>
      </C.AboutMe>

      <C.Experiences>
        <div className="title">Minhas experiências</div>
        <div className="experience">
          <div className="top">
            <div className="titleExperience">
              Desenvolvedor front end na{" "}
              <a href="https://oaiscloud.com/" target="_blank">
                OAIS Cloud
              </a>{" "}
              / Unesc Labs
            </div>
            <div className="dateExperience">Fevereiro 2023 - Hoje</div>
          </div>
          <div className="content">
            A OAIS Cloud é uma empresa de tecnologia que atua no mercado de
            armazenamento de dados na nuvem e acesso à assinatura digital.
            Atuando como desenvolvedor front end, meu papel na empresa é o
            desenvolvimento do portal de acesso às ferramentas da empresa com
            foco na intuitividade para uma melhor experiência do usuário.
          </div>
          <div className="tools">
            Tecnologias:
            <div className="tool">TypeScript</div>
            <div className="tool">React</div>
            <div className="tool">Styled Components</div>
            <div className="tool">Material UI</div>
            <div className="tool">Figma</div>
            <div className="tool">GitHub</div>
          </div>
        </div>
        <div className="experience">
          <div className="top">
            <div className="titleExperience">
              Suporte técnico na{" "}
              <a href="https://www.consolidesuamarca.com.br/" target="_blank">
                Consolide Registro de Marcas
              </a>
            </div>
            <div className="dateExperience">Fevereiro 2021 - Abril 2022</div>
          </div>
          <div className="content">
            A Consolide é a maior empresa de registro de marcas do Brasil.
            Atuando desde 2013 no mercado, a empresa tem o papel de auxiliar os
            clientes com toda a burocracia de um registro de marca. Atuando como
            suporte técnico, meu papel na empresa era desde a manutenção no
            hardware, até a comunicação entre clientes internos e
            desenvolvedores, para um melhor entendimento do problema e uma maior
            agilidade na resolução.
          </div>
          <div className="tools">
            Tecnologias:
            <div className="tool">Basecamp</div>
            <div className="tool">Trello</div>
          </div>
        </div>
      </C.Experiences>

      <C.Projects>
        <div className="title">Projetos</div>
        <div className="projects">
          <div className="project">
            <div className="titleProject">
              Estofaria do Ananias <GoLink size={30} />
            </div>
            Site de uma estofaria especializada em carros antigos
            <div className="contentProject">
              <div className="tool">TypeScript</div>
              <div className="tool">React</div>
              <div className="tool">Figma</div>
            </div>
          </div>
          <div className="project">
            <div className="titleProject">
              Jogo adivinhar bandeira <GoLink size={30} />
            </div>
            Jogo de adivinhar bandeiras de países
            <div className="contentProject">
              <div className="tool">TypeScript</div>
              <div className="tool">React</div>
              <div className="tool">Java</div>
              <div className="tool">Spring Boot</div>
              <div className="tool">Sockets</div>
            </div>
          </div>
        </div>
      </C.Projects>
    </C.Container>
  );
};

export default Home;
