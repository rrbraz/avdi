import React from 'react'
import { Box, TextInput, Button } from 'grommet'
import { Ad } from 'grommet-icons'

export default function Home() {
  return (
    <Box fill="vertical" overflow="auto" align="center" flex="grow" justify="center" direction="row">
      <Box align="stretch" justify="center" direction="column" gap="medium">
        <Box align="center" justify="center">
          <Ad size="xlarge" color="brand" />
        </Box>
        <TextInput placeholder="e-mail" />
        <TextInput type="password" placeholder="senha" />
        <Button label="Entrar" active={false} plain={false} type="submit" primary />
      </Box>
    </Box>
  )
}

