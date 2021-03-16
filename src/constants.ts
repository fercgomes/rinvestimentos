/**
 *  ID da thread com as sugestões de ativos para a carteira do sub
 *  https://www.reddit.com/r/investimentos/comments/m51wnx/o_n%C3%A3o_t%C3%A3o_pequeno_sub_que_bate_o_mercado/
 */
export const portfolioThreadId = 'm51wnx';

export const host =
  process.env.NODE_ENV === 'production'
    ? 'api.rinvestimentos.xyz'
    : 'api.localhost';
