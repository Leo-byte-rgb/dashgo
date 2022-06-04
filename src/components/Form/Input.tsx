import {
  Input as ChakraInput,
  FormControl,
  FormLabel,
  InputProps,
  forwardRef,
} from "@chakra-ui/react";
import { ForwardRefRenderFunction } from "react";

interface IInputProps extends InputProps {
  name: string;
  label?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInputProps> = (
  { name, label, ...props },
  ref
) => {
  return (
    <FormControl>
      {label && <FormLabel htmlFor="password">{label}</FormLabel>}
      <ChakraInput
        id={name}
        name={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{ bgColor: "gray.900" }}
        size="lg"
        {...props}
        ref={ref}
      />
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
