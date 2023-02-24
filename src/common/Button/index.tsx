import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({
  color,
  background,
  borderColor,
  focusBackgroundColor,
  focusBorderColor,
  focusColor,
  fixedWidth,
  children,
  onClick,
}: ButtonProps) => (
  <StyledButton
    color={color}
    background={background}
    borderColor={borderColor}
    focusBackgroundColor={focusBackgroundColor}
    focusBorderColor={focusBorderColor}
    focusColor={focusColor}
    fixedWidth={fixedWidth}
    onClick={onClick}
  >
    {children}
  </StyledButton>
);
