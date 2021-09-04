export interface ButtonProps {
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button type="button" {...props}>
      {props.children}
    </button>
  );
};
