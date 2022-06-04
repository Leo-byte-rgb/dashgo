import type { NextPage } from "next";
import { Flex, Button, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import { useForm } from "react-hook-form";

const SignIn: NextPage = () => {
  const { register, handleSubmit } = useForm();

  const handleSignIn = (data) => {
    console.log(data);
  };
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={350}
        bg="gray.800"
        p={8}
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <Input type="email" label="E-mail" {...register("email")} />
          <Input type="password" label="Senha" {...register("password")} />
        </Stack>

        <Button type="submit" mt={6} colorScheme="pink">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
};

export default SignIn;
