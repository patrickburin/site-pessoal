import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: #272727;
  color: #fff;
  gap: 20px;

  .name {
    background: linear-gradient(to bottom, red, black);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-size: 70px;
    text-align: center;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 70px;
  align-items: center;

  .image {
    background-color: #3f3f3f;
    border-radius: 30px;
  }
  .description {
    width: 40%;
    text-align: justify;
  }
`;

export const Experiences = styled.div`
  display: flex;
  background-color: #3f3f3f;
`;
