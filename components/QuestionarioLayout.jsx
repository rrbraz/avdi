import { Avatar, Box, Button, Header, Text } from "grommet";
import { LinkPrevious } from "grommet-icons";
import { useRouter } from "next/router";
import Image from "next/image";

const QuestionarioLayout = ({titulo, ...props}) => {
  const router = useRouter();

  const boxAvaliado = (
    <Box align="center" justify="start" direction="row" gap="medium">
      <Avatar
        align="center"
        flex={false}
        justify="center"
        overflow="hidden"
        round="full"
        src="https://avatars.dicebear.com/api/initials/leticia-evelyn.svg"
      />
      <Box align="start" justify="center">
        <Text size="small" textAlign="start" color="text-weak">
          Avaliada
        </Text>
        <Text>Letícia Evelyn Castro</Text>
      </Box>
    </Box>
  );

  return (
    <Box
      fill="vertical"
      overflow="auto"
      align="stretch"
      flex="grow"
      gap="small"
    >
      <Header
        justify="center" 
        align="center"
        background={{ color: "brand" }}
        pad="small"
      >
        <Box width="xlarge" direction="row" gap="medium" justify="start" >
          <Button icon={<LinkPrevious />} plain onClick={() => router.push("/dashboard")}/>
          <Text textAlign="center">Nova Avaliação</Text>
        </Box>
      </Header>
      <Box align="center" justify="center" pad="medium" flex="grow">
        <Box width={{ width: "xlarge" }} direction="column">
          {boxAvaliado}
          {props.children}
        </Box>
      </Box>
    </Box>
  );
};

export default QuestionarioLayout;
