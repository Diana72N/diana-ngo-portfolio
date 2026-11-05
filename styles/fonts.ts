// Ringside fonts via next/font (self-hosted at build time, no layout shift).
// In app/layout.tsx:
//   import { fontVariables } from '@/styles/fonts';
//   <html lang="en" className={fontVariables}>
import { Jersey_10, IBM_Plex_Mono, Press_Start_2P } from 'next/font/google';

export const jersey = Jersey_10({ weight: '400', subsets: ['latin'], variable: '--font-jersey', display: 'swap' });
export const plexMono = IBM_Plex_Mono({ weight: ['400', '500', '600'], subsets: ['latin'], variable: '--font-plex-mono', display: 'swap' });
// Only used inside the hero game's HUD.
export const arcade = Press_Start_2P({ weight: '400', subsets: ['latin'], variable: '--font-arcade', display: 'swap' });

export const fontVariables = `${jersey.variable} ${plexMono.variable} ${arcade.variable}`;
