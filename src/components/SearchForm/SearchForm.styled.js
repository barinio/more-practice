import styled from 'styled-components';

export const SearchFormStyled = styled.form`
  display: flex;
  max-width: 500px;
  border-radius: 3px;
  overflow: hidden;
  margin: auto;
  margin-bottom: 30px;

  & button {
    background-color: #170d1c;
    box-shadow: inset 0 0 10px tomato;
    height: 48px;
    width: 48px;
    &:hover,
    &:focus {
      background-color: #170d1c;
      box-shadow: inset 0 0 20px tomato;
    }
  }
`;
export const Input = styled.input`
  padding: 7px 15px;
  background-color: rgb(255, 215, 0);
  box-shadow: inset 0 0 30px tomato;
  width: 100%;
  color: #8b0000;
  text-shadow: red 0 0 1px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  font-size: 16px;
  font-weight: 600;
  border: none;
  outline: none;
`;
