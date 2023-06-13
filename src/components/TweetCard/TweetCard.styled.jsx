import styled from 'styled-components';
import bgImage from '../../images/bgimg.png';

export const CardItem = styled.li`
  width: 380px;
  height: 460px;
  position: relative;
  padding: 20px 20px 0 20px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  ::before {
    content: '';
    width: 308px;
    height: 168px;
    pointer-events: none;
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    position: absolute;
    top: 28px;
    left: 36px;
  }
  border-radius: 20px;
`;

export const ItemContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-top: 70px;
  ::before {
    content: '';
    position: absolute;
    left: -20px;
    top: -4px;
    width: 420px;
    height: 8px;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const Image = styled.img`
  display: block;
  margin-bottom: 176px;
`;

export const ImageBox = styled.div`
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 80px;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #ae7be3, inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 85.9232px;
`;

export const Avatar = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: 62px;
  height: 62px;
  border-radius: 50%;
`;

export const TextTweets = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  margin-bottom: 16px;
  color: #ebd8ff;
`;

export const TextFollower = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  margin-bottom: 26px;
  color: #ebd8ff;
`;

export const Button = styled.button`
  width: 196px;
  background: #ebd8ff;
  padding: 14px 39px;
  border: 0px solid transparent;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
`;