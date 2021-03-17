import { Box, Text } from '@chakra-ui/react';
import React from 'react';

export default function Logo(props: any) {
  return (
    <Box {...props} style={{ minWidth: 200 }}>
      <Text fontSize="lg" fontWeight="bold">
        r/investimentos
      </Text>
      <Text>não-oficial</Text>
    </Box>
  );
}
