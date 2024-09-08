import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import CommonLayout from '../components/CommonLayout';
import SignUpForm from '../components/auth/SignUpForm';

export default function SignUp(): React.ReactElement {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.800')}>
      <CommonLayout>
        <Flex align="center" justify="center">
          <SignUpForm />
        </Flex>
      </CommonLayout>
    </Box>
  );
}
