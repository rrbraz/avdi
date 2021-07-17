import React from "react";
import { Box, TextInput, Button } from "grommet";
import { Ad } from "grommet-icons";
import logo from "../public/logo.svg";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";

export default function Home() {
  const router = useRouter();

  return (
    <Box
      fill="vertical"
      overflow="auto"
      align="center"
      flex="grow"
      justify="center"
      direction="row"
    >
      <Box align="stretch" justify="center" direction="column" gap="medium">
        <Box align="center" justify="center">
          <Image src={logo} />
        </Box>
        <TextInput placeholder="e-mail" />
        <TextInput type="password" placeholder="senha" />
        <Button
          label="Entrar"
          active={false}
          plain={false}
          type="submit"
          primary
          onClick={() => {router.push("/dashboard");}}
        />
      </Box>
    </Box>
  );
}
