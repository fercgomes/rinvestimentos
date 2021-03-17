import { Container, Heading, Text } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import { Pie } from '@nivo/pie';
import React from 'react';
import { useQuery } from 'react-query';
import { api } from '../../service/api';

const PortfolioPage = () => {
  const portfolio = useQuery(['portfolio'], () => api.getPortfolio());

  if (!portfolio.data)
    return (
      <Container centerContent style={{ padding: 120 }}>
        <Spinner />
      </Container>
    );

  const slicedData = portfolio.data.slice(0, 10);
  const totalScore = slicedData.reduce((prev: any, curr: any) => {
    return prev + curr.score;
  }, 0);

  const getRadialLabel = (item: any) => {
    const ratio = (item.value / totalScore) * 100;
    return `${item.id}: ${item.value} (${ratio.toFixed(2)}%)`;
  };

  return (
    <div
      style={{
        width: '100%',
        margin: '25px auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Heading size="md">Carteira do r/investimentos (em construção)</Heading>
      <Text>
        Os 10 tickers mais votados{' '}
        <a href="https://www.reddit.com/r/investimentos/comments/m51wnx/o_n%C3%A3o_t%C3%A3o_pequeno_sub_que_bate_o_mercado/">
          dessa thread.
        </a>
      </Text>
      <Text>As proporções são em relação aos 10 tickers com maior score.</Text>
      <div
        style={{
          minWidth: 200,
          maxWidth: '100%',
          minHeight: 500,
          maxHeight: '100%',
        }}
      >
        <Pie
          data={slicedData}
          margin={{ top: 80, right: 120, bottom: 80, left: 120 }}
          width={1000}
          height={400}
          id="ticker"
          value="score"
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          colors={{ scheme: 'nivo' }}
          borderWidth={1}
          radialLabelsSkipAngle={10}
          radialLabelsTextColor="#333333"
          sliceLabelsSkipAngle={10}
          sliceLabelsTextColor="#333333"
          radialLabel={getRadialLabel}
          defs={[
            {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: 'rgba(255, 255, 255, 0.3)',
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: 'rgba(255, 255, 255, 0.3)',
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          legends={[
            {
              anchor: 'bottom',
              direction: 'row',
              justify: false,
              translateX: 0,
              translateY: 56,
              itemsSpacing: 0,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: '#999',
              itemDirection: 'left-to-right',
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: 'circle',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemTextColor: '#000',
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
};

export default PortfolioPage;
