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
        <div className="name">Patrick Burin Rodriguez</div>

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

      <C.Experiences>
        <img src={profile} className="image" />

        <div className="descripton">
          <div className="title">Olá, eu sou o Patrick!</div>
          Estou cursando a 7ª fase de Ciência da Computação e minha vida pessoal
          é bastante variada. Gosto bastante de treinar e esportes,
          principalmente futebol, handebol e vôlei. Também gosto de jogar alguns
          eSports e assistir séries e filmes. Tenho o sonho de viajar pelo mundo
          conhecendo vários países e culturas diferentes.
        </div>
      </C.Experiences>
    </C.Container>
  );
};

export default Home;
