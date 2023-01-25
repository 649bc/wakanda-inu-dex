import { Token, ChainId } from '@pancakeswap/sdk'
import { bscTokens } from './tokens'
import { CAKE_BNB_LP_MAINNET } from './farms'
import { Ifo } from './types'

export const cakeBnbLpToken = new Token(ChainId.BSC, CAKE_BNB_LP_MAINNET, 18, 'WKD-BNB LP')

const ifos: Ifo[] = [
  {
    id: 'great',
    address: '0x47741a86f55b10C1aBe1e6493a200AC5eCB8A5B3',
    isActive: true,
    name: 'Great Test Project ($GREAT)',
    symbol: 'GREAT',
    token: bscTokens.great,
    decimal: 9,
    fundsToRaise: '0.03 Bnb',
    offeringAmount: '200000',
    articleUrl: 'https://wakandainu',
    twitterUrl: 'https://twitter.com/wakandainu',
    description: 'The Great Token Project is a test project',
  },
  // {
  //   id: 'trivia',
  //   address: '0x23C520d8227524E2cDD00360358864fF3fFC36b4',
  //   isActive: false,
  //   name: 'TRIVIA',
  //   symbol:"TRIVIA",
  //   token: bscTokens.trivia,
  //   fundsToRaise:"5.5 Bnb",
  //   offeringAmount:"93333333333333328",
  //   articleUrl:
  //     'https://pancakeswap.finance/voting/proposal/bafkreihrc2d55vrowbn2oajzs77ffv73g4hzch2e7wulnuccmbwl5u4hvq',
  //   telegramUrl: 'https://t.me/TriviansGlobal',
  //   twitterUrl: 'https://twitter.com/PlayTrivians',
  //   description:
  //     'Trivian is a trivia gaming platform with different game modes such as multiplayer mode, single player mode, 1v1 games, instant play, scheduled tournaments, and live shows … all while earning TRIVIA tokens!',
  // },
]

export default ifos
