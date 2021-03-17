import { Box, Divider, Heading, Text } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { api } from '../../service/api';

const DueDilligencePage = () => {
  const dds = useQuery(['dds'], () => api.getDDs());

  return (
    <Box style={{ margin: '24px 120px' }}>
      <Heading size="lg">Análises feitas por usuários do sub.</Heading>
      <Divider syle={{ margin: '0 10px' }} />

      <Box style={{ margin: '30px 0' }}>
        {dds.isLoading ? (
          <Spinner />
        ) : dds.data ? (
          <Box>
            {dds.data.map((dd: any) => (
              <Link to={{ pathname: '/dds/read', state: dd }}>
                <Box
                  margin="2"
                  style={{
                    // border: '1px solid #828282',
                    padding: 10,
                    borderRadius: 20,
                    width: '40%',
                  }}
                >
                  <Heading size="sm">{dd.submission.title}</Heading>
                  <Text>
                    {dd.ticker},{' '}
                    {new Date(dd.submission.date * 1000).toLocaleDateString(
                      'br',
                    )}
                  </Text>
                  <Text>Autor: {dd.submission.author}</Text>
                </Box>
              </Link>
            ))}
          </Box>
        ) : (
          <p>Ops... algo não deu bom.</p>
        )}
      </Box>
    </Box>
  );
};

export default DueDilligencePage;
