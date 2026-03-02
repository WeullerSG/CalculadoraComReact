import { ButtonContainer, Grid } from "./styles";

const NumberButton = ({ label, onCLick }) => {
  return (
    <>
      <ButtonContainer onClick={onCLick} type="button">{label}</ButtonContainer>
    </>
  );
};

export default NumberButton;
