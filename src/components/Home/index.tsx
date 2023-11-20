import * as C from "./styles";

const Home = () => {
  return (
    <C.Container>
      <div className="name">Patrick Burin Rodriguez</div>
      <C.Description>
        <img src="src/images/profile.png" className="image" />
        <div className="description">
          Olá! Meu nome é Patrick Burin Rodriguez e sou desenvolvedor front end.
          Nasci em 2000 no Brasil no sul de Santa Catarina, mais específicamente
          em Araranguá. Atualmente estou cursando a 7ª fase de Ciência da
          Computação na UNESC, em Criciúma. Atuo como desenvolvedor front end no
          Unesc Labs, sendo uma parceria entre a universidade e empresas de
          fora. Sou apaixonado por esportes, principalmente futebol e handeboll
          e também gosto de alguns eSports, como o famoso League of Legends. No
          meu tempo livre eu gosto de praticar esportes e jogar uma solo/duo no
          Lol. Também amo a praia e por morar em cidade litorânea, sempre que
          posso passo por lá.
        </div>
      </C.Description>
      <C.Experiences>alooooooo</C.Experiences>
    </C.Container>
  );
};

export default Home;
