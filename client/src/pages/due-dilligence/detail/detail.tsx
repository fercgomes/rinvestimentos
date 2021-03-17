import { Box, Container, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import renderHTML from 'react-render-html';
import { useLocation } from 'react-router';

const DueDilligenceDetail = () => {
  const { state } = useLocation<any>();
  const { ticker, submission } = state;

  return (
    <Container>
      <a href={`https://reddit.com/${submission.link}`}>
        <Heading>
          {submission.title} ({ticker})
        </Heading>
      </a>
      <Heading size="md">
        {submission.author},{' '}
        {new Date(submission.date * 1000).toLocaleDateString('br')},{' '}
        {submission.score} pontos
      </Heading>
      <Box style={{ margin: '24px 0' }}>
        {/* @ts-ignore */}
        <Text>{renderHTML(submission.body)}</Text>
      </Box>
    </Container>
  );
};

export default DueDilligenceDetail;
