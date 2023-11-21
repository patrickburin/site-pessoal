import styled from "styled-components";

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
`;

export const Description = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
  align-items: center;

  .image {
    background-color: #3f3f3f;
    border-radius: 30px;
  }
  .description {
    width: 550px;
    text-align: justify;
  }
`;

export const Experiences = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #3f3f3f;
  width: 1000px;
  border-radius: 10px;
  padding: 15px 30px;
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
`;

export const Projects = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #3f3f3f;
  border-radius: 10px;
  padding: 15px;
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
`;
