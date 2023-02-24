export interface ContainerProps {
  border?: boolean;
  children: React.ReactNode;
}

export interface ButtonProps {
  color?: string;
  background?: string;
  borderColor?: string;
  focusBackgroundColor?: string;
  focusBorderColor?: string;
  focusColor?: string;
  fixedWidth?: boolean;
  name?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export interface ImgProps {
  src: string;
  width: string;
  height: string;
  type?: string;
}

export interface InputProps {
  labelName: string;
  name: string;
  placeholder: string;
  type?: string;
  value?: string;
  onChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

export interface validateProps {
  name: string;
  message: string;
  email: string;
}
