import styled from "styled-components";
// import { device } from "../../device";

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
  height: 100vh;

  .name {
    text-align: center;
    color: #fff;
    font-weight: normal;
    font-size: 70px;
  }
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

export const Experiences = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  align-items: center;
  min-height: 100vh;
  font-size: 24px;
  padding: 20px;
  gap: 30px;

  .descripton {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .image {
    border-radius: 50%;
  }
`;
