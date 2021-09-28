import styled from 'styled-components';

const Input = styled.textarea`
  background-color: #e3e5e5;
  border: none;
  outline: none;
  padding: 15px 12px;
  height: 80px;
  font-size: 16px;
  color: #84868b;
  border-radius: 18px;
  font-family: 'Space Grotesk', sans-serif;
  border: 2px solid transparent;
  transition: all 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);

  &:focus {
    color: #161616;
    border: 2px solid #ff604a;
  }
`;

export default function TextArea(props) {
  const { ...rest } = props;

  return <Input {...rest} />;
}
