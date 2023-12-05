import styled from "styled-components";
import { device } from "../../device";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #000;
  color: #fff;
  gap: 20px;
  font-size: 18px;
  padding-bottom: 15px;

  .title {
    font-size: 40px;
    font-weight: bold;
    text-align: center;
  }
`;

export const Start = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  min-height: 100vh;

  .name {
    text-align: center;
    color: #fff;
    font-weight: normal;
    font-size: 70px;
  }

  @media ${device.tablet} {
    height: 100vh;
    .name {
      font-size: 50px;
    }
  }
`;

export const Developer = styled.div`
  display: flex;
  font-size: 32px;
  gap: 10px;

  span {
    color: #ff0000;
  }

  @media ${device.tablet} {
    font-size: 28px;
  }

  @media ${device.mobile} {
    flex-direction: column;
    align-items: center;
    gap: 0;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  gap: 15px;

  .icon {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

export const AboutMe = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  align-items: center;
  min-height: 100vh;
  font-size: 24px;
  padding: 20px;
  gap: 30px;

  .titleName {
    font-size: 40px;
    font-weight: bold;
  }

  .descripton {
    display: flex;
    flex-direction: column;
    gap: 5px;
    text-align: justify;
  }

  .image {
    border-radius: 50%;
  }

  @media ${device.tablet} {
    flex-direction: column;

    .titleName {
      font-size: 30px;
      text-align: center;
    }

    .descripton {
      font-size: 22px;
      padding: 5px 10px;
    }
  }
`;

export const Experiences = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  min-height: 100vh;
  font-size: 40px;
  align-items: center;
  font-weight: bold;
  gap: 15px;
  color: #000;

  .title {
    color: #fff;
  }

  a {
    color: #000;
  }

  .experience {
    display: flex;
    width: 95%;
    font-size: 32px;
    flex-direction: column;
    gap: 10px;
    background-color: #fff;
    border-radius: 30px;
    padding: 20px;
  }

  .top {
    display: flex;
    flex-direction: column;
  }

  .titleExperience {
    font-size: 28px;
    font-weight: bold;
  }

  .dateExperience {
    font-size: 18px;
    font-weight: normal;
  }

  .content {
    font-size: 18px;
    font-weight: normal;
    text-align: justify;
  }

  .tools {
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: 20px;
    gap: 10px;
  }

  .tool {
    display: flex;
    background-color: #222;
    padding: 5px 10px;
    border-radius: 15px;
    color: #fff;
  }

  @media ${device.tablet} {
    width: 85%;

    .title {
      font-size: 30px;
    }

    .titleExperience {
      font-size: 22px;
    }

    .content {
      font-size: 20px;
    }
  }
`;

export const Projects = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 90%;
  min-height: 100vh;
  gap: 15px;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  color: #000;

  .title {
    color: #fff;
  }

  .projects {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    cursor: pointer;
    justify-content: space-between;
  }

  .project {
    display: flex;
    width: 45%;
    text-align: start;
    flex-direction: column;
    background-color: #fff;
    border-radius: 5px;
    padding: 10px 15px;
    font-size: 18px;
    font-weight: normal;
    gap: 10px;
  }

  .titleProject {
    display: flex;
    font-size: 22px;
    justify-content: space-between;
    font-weight: bold;
  }

  .contentProject {
    font-size: 18px;
    font-weight: normal;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
  }

  .tool {
    display: flex;
    background-color: #222;
    padding: 5px 10px;
    border-radius: 15px;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
  }

  @media ${device.laptop} {
    .project {
      width: 100%;
    }
  }

  @media ${device.tablet} {
    .title {
      font-size: 30px;
    }
  }
`;
