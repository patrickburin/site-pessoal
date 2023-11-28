import styled from "styled-components";
import { device } from "../../device";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #000;
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
    min-height: 100vh;
  }

  .imageText {
    display: flex;
    justify-content: center;
    min-height: 100vh;
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
  text-align: center;
  color: #fff;
  font-size: 70px;
`;

export const Developer = styled.div`
  display: flex;
  font-size: 32px;
  gap: 10px;

  span {
    color: #ff0000;
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

export const Description = styled.div`
  background-color: #3f3f3f;
  display: flex;
  flex-direction: row;
  height: min-content;
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
  height: min-content;
  border-radius: 10px;
  padding: 20px;
  gap: 5px;
  box-shadow: rgba(0, 0, 0, 0.25) 6px 6px 80px 8px;

  .experiencesTitle {
    color: #fff;
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
  height: min-content;
  padding: 20px;
  gap: 5px;
  box-shadow: rgba(0, 0, 0, 0.25) 6px 6px 80px 8px;

  .projectsTitle {
    color: #fff;
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
    width: 480px;
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
