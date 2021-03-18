import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import {
  Box,
  Container,
  Divider,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/layout';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/toast';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import renderHTML from 'react-render-html';
import { useLocation } from 'react-router';
import { RootState } from '../../../store';
import { updateStockState } from '../../../store/asset-tracker/actions';

const DueDilligenceDetail = () => {
  const { state } = useLocation<any>();
  const { ticker, submission } = state;
  const tickerReady = `${ticker}.SA`;
  const toast = useToast();

  const { loading, error, stocks } = useSelector(
    (state: RootState) => state.assetTracker,
  );

  const dispatch = useDispatch();
  const stockState = stocks.byTicker[tickerReady];

  if (error) {
    toast({
      title: 'Algo deu errado.',
      description: error,
      status: 'error',
      duration: 3000,
      isClosable: true,
      position: 'bottom-right',
    });
  }

  React.useEffect(() => {
    dispatch(updateStockState(tickerReady));
  }, [tickerReady, dispatch]);

  let TrendIcon: any = () => null;
  if (stockState) {
    const trend =
      stockState.rawData.price.regularMarketPrice -
      stockState.rawData.price.regularMarketPreviousClose;
    if (trend > 0) {
      TrendIcon = () => (
        <TriangleUpIcon w={4} h={4} style={{ marginLeft: 6 }} color="#0f0" />
      );
    } else {
      TrendIcon = () => (
        <TriangleDownIcon w={4} h={4} style={{ marginLeft: 6 }} color="#f00" />
      );
    }
  }

  console.log('stock state', stockState);

  return (
    // <Box display="flex" flexDirection="row" justifyContent="space-between">
    <Stack direction={['column', 'row']}>
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
        <Divider />

        <Box style={{ margin: '24px 0' }}>
          {/* @ts-ignore */}
          <Text>{renderHTML(submission.body)}</Text>
        </Box>
      </Container>
      <Container>
        {stockState ? (
          <Box style={{ margin: '24px 0' }}>
            <Heading size="sm">{stockState.rawData.price.longName}</Heading>
            <Heading size="sm">{stockState.rawData.price.shortName}</Heading>
            <Box display="flex" flexDirection="row" alignItems="center">
              <Text>
                {stockState.rawData.price.currencySymbol}
                {stockState.rawData.price.regularMarketPrice}
              </Text>
              <TrendIcon />
            </Box>
            {/* Financials */}
            <Box style={{ marginTop: 24 }}>
              <Table size="sm">
                <Thead>
                  <Tr>
                    <Th>Indicador</Th>
                    <Th>Valor</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Total Cash</Td>
                    <Td isNumeric>
                      {stockState.rawData.financialData.totalCash}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Total Cash per Share</Td>
                    <Td isNumeric>
                      {stockState.rawData.financialData.totalCashPerShare}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>EBITDA</Td>
                    <Td isNumeric>{stockState.rawData.financialData.ebitda}</Td>
                  </Tr>
                  <Tr>
                    <Td>Total Revenue</Td>
                    <Td isNumeric>
                      {stockState.rawData.financialData.totalRevenue}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Debt to Equity</Td>
                    <Td isNumeric>
                      {stockState.rawData.financialData.debtToEquity}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Return on Assets</Td>
                    <Td isNumeric>
                      {stockState.rawData.financialData.returnOnAssets}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Return on Equity</Td>
                    <Td isNumeric>
                      {stockState.rawData.financialData.returnOnEquity}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Gross Profits</Td>
                    <Td isNumeric>
                      {stockState.rawData.financialData.grossProfits}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Free Cash Flow</Td>
                    <Td isNumeric>
                      {stockState.rawData.financialData.freeCashFlow}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Operating Cash Flow</Td>
                    <Td isNumeric>
                      {stockState.rawData.financialData.operatingCashflow}
                    </Td>
                  </Tr>
                </Tbody>
              </Table>

              <Box style={{ marginTop: 24 }}>
                <a href={`https://finance.yahoo.com/quote/${tickerReady}`}>
                  Mais informações no Yahoo Finance
                </a>
              </Box>
            </Box>
          </Box>
        ) : null}
      </Container>
    </Stack>
    // </Box>
  );
};

export default DueDilligenceDetail;
