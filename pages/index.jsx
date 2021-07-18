import { Box, Button, TextInput } from "grommet";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import React, { useEffect } from "react";
import logo from "../public/logo.svg";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.prefetch("/dashboard");
  }, [router]);

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
          <Image src={logo} alt="logo" />
        </Box>
        <TextInput placeholder="e-mail" />
        <TextInput type="password" placeholder="senha" />
        <Button
          label="Entrar"
          active={false}
          plain={false}
          type="submit"
          primary
          onClick={() => {
            router.push("/dashboard");
          }}
        />
      </Box>
    </Box>
  );
}
