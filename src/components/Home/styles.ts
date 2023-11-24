import styled from "styled-components";
import { device } from "../../device";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #272727;
  color: #fff;
  gap: 20px;
  font-size: 18px;
  padding-bottom: 15px;

  .name {
    color: #808080;
    font-size: 62px;
    text-align: center;
    font-weight: bold;
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 100px;
  }

  .experiences {
    display: flex;
    justify-content: center;
  }

  .imageText {
    display: flex;
    justify-content: center;
  }

  @media ${device.tablet} {
    .name {
      font-size: 40px;
    }
  }
`;

export const Start = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  height: 100vh;
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000;

  .letters {
    display: flex;
    flex-direction: row;
    font-size: 70px;
    gap: 3px;
    font-family: monospace;
  }

  .letter {
    animation: animation 16s infinite ease-in-out;
  }

  .letter:nth-of-type(2) {
    animation-delay: 0.2s;
  }
  .letter:nth-of-type(3) {
    animation-delay: 0.4s;
  }
  .letter:nth-of-type(4) {
    animation-delay: 0.6s;
  }
  .letter:nth-of-type(5) {
    animation-delay: 0.8s;
  }
  .letter:nth-of-type(6) {
    animation-delay: 1s;
  }
  .letter:nth-of-type(7) {
    animation-delay: 1.2s;
  }
  .letter:nth-of-type(8) {
    animation-delay: 1.4s;
  }
  .letter:nth-of-type(9) {
    animation-delay: 1.6s;
  }
  .letter:nth-of-type(10) {
    animation-delay: 1.8s;
  }
  .letter:nth-of-type(11) {
    animation-delay: 2s;
  }
  .letter:nth-of-type(12) {
    animation-delay: 2.2s;
  }
  .letter:nth-of-type(13) {
    animation-delay: 2.4s;
  }
  .letter:nth-of-type(14) {
    animation-delay: 2.6s;
  }
  .letter:nth-of-type(15) {
    animation-delay: 2.8s;
  }
  .letter:nth-of-type(16) {
    animation-delay: 3s;
  }
  .letter:nth-of-type(17) {
    animation-delay: 3.2s;
  }
  .letter:nth-of-type(18) {
    animation-delay: 3.4s;
  }
  .letter:nth-of-type(19) {
    animation-delay: 3.6s;
  }
  .letter:nth-of-type(20) {
    animation-delay: 3.8s;
  }
  .letter:nth-of-type(21) {
    animation-delay: 4s;
  }
  .letter:nth-of-type(22) {
    animation-delay: 4.2s;
  }
  .letter:nth-of-type(23) {
    animation-delay: 4.4s;
  }
  .letter:nth-of-type(24) {
    animation-delay: 4.6s;
  }
  .letter:nth-of-type(25) {
    animation-delay: 4.8s;
  }
  .letter:nth-of-type(26) {
    animation-delay: 5s;
  }
  .letter:nth-of-type(27) {
    animation-delay: 5.2s;
  }
  .letter:nth-of-type(28) {
    animation-delay: 5.4s;
  }
  .letter:nth-of-type(29) {
    animation-delay: 5.6s;
  }
  .letter:nth-of-type(30) {
    animation-delay: 5.8s;
  }
  .letter:nth-of-type(31) {
    animation-delay: 6s;
  }

  @keyframes animation {
    0% {
      color: #fff;
      text-shadow: 0 0 12px white, 0 0 50px white, 0 0 100px white;
    }
    15% {
      color: white;
      text-shadow: none;
    }
    70% {
      color: black;
      text-shadow: none;
    }
  }

  .description {
    font-size: 30px;
    text-align: center;
  }
`;

export const Developer = styled.div`
  display: flex;
  font-size: 32px;
  gap: 10px;
`;

export const SocialMedia = styled.div`
  display: flex;

  .icon {
    display: flex;
    align-items: center;
  }
`;

export const Description = styled.div`
  background-color: #3f3f3f;
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: center;
  gap: 20px;
  align-items: center;
  border-radius: 10px;
  padding: 10px 20px;

  .image {
    background-color: #3f3f3f;
    border-radius: 50%;
    border: 2px solid #808080;
  }
  .description {
    text-align: justify;
  }

  @media ${device.tablet} {
    flex-direction: column;

    .description {
      font-size: 22px;
    }
  }
`;

export const Experiences = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #3f3f3f;
  width: 80%;
  border-radius: 10px;
  padding: 10px 20px;
  gap: 5px;
  box-shadow: rgba(0, 0, 0, 0.25) 6px 6px 80px 8px;

  .experiencesTitle {
    color: #808080;
    font-size: 38px;
    font-weight: bold;
    text-align: center;
  }

  .job {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .titleJob {
    font-size: 20px;
    font-weight: bold;
  }

  .date {
    font-size: 16px;
    font-weight: lighter;
  }

  .descriptionJob {
    background-color: #272727;
    border-radius: 10px;
    font-size: 16px;
    padding: 10px;
  }

  hr {
    width: 100%;
  }

  .tools {
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 10px;
  }

  .tool {
    padding: 5px;
    border-radius: 10px;
    color: #fff;
    background-color: #3f3f3f;
  }

  @media ${device.tablet} {
    .experiencesTitle {
      font-size: 28px;
    }

    .titleJob {
      font-size: 22px;
    }

    .date {
      font-size: 20px;
    }

    .descriptionJob {
      font-size: 20px;
    }
  }
`;

export const Projects = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #3f3f3f;
  border-radius: 10px;
  width: 80%;
  padding: 10px 20px;
  gap: 5px;
  box-shadow: rgba(0, 0, 0, 0.25) 6px 6px 80px 8px;

  .projectsTitle {
    color: #808080;
    font-size: 38px;
    font-weight: bold;
    text-align: center;
  }

  .divider {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }

  .project {
    background-color: #272727;
    display: flex;
    width: 500px;
    flex-direction: column;
    border-radius: 10px;
    font-size: 16px;
    padding: 10px 15px;
    gap: 5px;
  }

  .titleProject {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
  }

  .tools {
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 10px;
  }

  .tool {
    padding: 5px;
    border-radius: 10px;
    color: #fff;
    background-color: #3f3f3f;
  }

  .buttons {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-direction: row;
    margin-top: 10px;
  }

  button {
    color: #272727;
    border-radius: 10px;
    border: none;
    font-weight: bold;
    padding: 10px;
    font-size: 16px;
    background-color: #fff;
    cursor: pointer;
  }

  @media ${device.tablet} {
    padding: 10px 13px;
    width: 90%;

    .projectsTitle {
      font-size: 28px;
    }

    .project {
      width: 350px;
      padding: 10px;
      font-size: 20px;
    }

    .tools {
      font-size: 18px;
    }

    .buttons {
      font-size: 16px;
    }
  }
`;
