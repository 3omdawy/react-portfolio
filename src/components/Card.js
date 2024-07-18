import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack alignItems="start" bg='white' spacing={0} borderRadius='md'>
      <Image objectFit='cover' src={imageSrc} alt={title} borderRadius='md' />
      <VStack px={4} py={4} alignItems='start'>
        <Heading as='h6' size='sm' color='black'>{title}</Heading>
        <Text fontSize='md' color='grey'>{description}</Text>
        <HStack spacing={2} color='black'>
          <Text fontSize='md'>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size='1x'></FontAwesomeIcon>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
