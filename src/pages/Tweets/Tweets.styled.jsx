import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  background-color: #fff;
   width:150px;
    height:50px;
    text-align: center;
  border: 0 solid #e2e8f0;
  border-radius: 1.5rem;
  box-sizing: border-box;
  color: #0d172a;
  cursor: pointer;
  display: inline-block;
  font-family: "Basier circle",-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1;
  padding: 1rem 1.6rem;
  text-align: center;
  text-decoration: none #0d172a solid;
  text-decoration-thickness: auto;
  transition: all .1s cubic-bezier(.4, 0, .2, 1);
  box-shadow: 0px 1px 2px rgba(166, 175, 195, 0.25);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  :hover{
  background-color: #1e293b;
  color: #fff;
  :disabled {
    background-color: rgb(83 76 76 / 22%);
    color: rgb(255 245 245 / 57%);
  }
`;

export const SelectWrapper = styled.div`
  width: 400px;
`;

export const FilterSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 8px 0px;
`;

export const Container = styled.div`
  padding: 0px 24px 25px;
`;

export const Wrapper = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export const TweetsWrapper = styled.div`
  min-height: 520px;
  max-height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;