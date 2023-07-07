import { IChildren } from "../../utils/interfaces/context";
import { Button } from "./Buttton.style";

export const ButtonComponent = ({ children }: IChildren) => {
  return(
    <Button data-testid="button-component">
      { children }
    </Button>
  )
}