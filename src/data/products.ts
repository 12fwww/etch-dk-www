import bladfjedre from '../assets/original/bladfjedre.png';
import shims from '../assets/original/shims.png';
import skaermdaaser from '../assets/original/skaermdaaser.png';
import shield from '../assets/original/shield.png';
import gaskets from '../assets/original/gaskets.jpg';
import ahorn from '../assets/original/ahorn.png';
import type { ImageMetadata } from 'astro';

export type ProductPage = {
  slug: string;
  h1: string;
  sub?: string;
  lead: string;
  bullets?: string[];
  body: string[];
  image: ImageMetadata;
  second?: ImageMetadata;
};

export const productPages: ProductPage[] = [
  {
    slug: 'bladfjedre',
    h1: 'Bladfjedre',
    lead: 'Har du brug for bladfjedre/kontaktfjedre, kan Etch producere dem uden høje omkostninger til et stanseværktøj. Faconætsning har en række fordele:',
    bullets: [
      'Høj præcision',
      'Prototyper samt masseproduktion fra dag til dag',
      'Ingen grater',
      'Kanter fri for stress',
      'Mulighed for at runde alle kanter',
      'Mulighed for levering i strips',
      'Bukning af små emner i lange strips uden brug af dyre værktøjer',
    ],
    body: [
      'Alt efter dine ønsker kan vi levere i såvel bukket som ubukket tilstand. Har du brug for forgyldning, fortinning eller anden overfladebehandling af din kontaktfjeder, klarer vi også det. Overfladebehandlingen kan eventuelt være partiel.',
      'Vi producerer op til flere tusinde små emner på ét ark. Overfladebehandling i hele ark sparer dyr håndtering, hvis alternativet er ophængning af enkelt-emner.',
      'Vi forarbejder de fleste metaller – også syrefast stål – i tykkelser fra 0,025 mm til over 1 mm.',
    ],
    image: bladfjedre,
  },
  {
    slug: 'shims-og-spacere',
    h1: 'Shims og spacere',
    lead: 'Shims og spacere efter dine tegninger i tykkelser til dit behov. Etch har mange års erfaring med faconætsning i metallisk tyndplade. Har du f.eks. brug for afstandsskiver i en bestemt facon og tykkelse, er du kommet til den rette leverandør.',
    body: [
      'Vi kan levere præcise emner efter dine tegninger på ned til 24 timer lige fra 1 stk. til mange tusinde. Specielle tykkelser justerer vi ned til nøjagtigheder på få mikrometer.',
      'Kanterne er fri for grater, og vi kan endog runde kanterne i processen.',
      'Vi forarbejder de fleste metaller – også syrefast stål – i tykkelser fra 0,025 mm til over 1 mm.',
    ],
    image: shims,
  },
  {
    slug: 'emc-skaermdaaser',
    h1: 'EMC skærmdåser',
    sub: 'Cans – eller rammer og låg',
    lead: 'Etch har mange års erfaring i design og produktion af EMC-afskærmning i metallisk tyndplade.',
    body: [
      'Send os dit foot-print samt nødvendig højde, og vi tegner og producerer dine skærmdåser – eller rammer og låg – i nysølv eller fortinnet plade. Vi leverer gerne dine emner i Tape & Reel til SMD-montage.',
      'Alternativt til rammer og låg kan vi lave dine skærmdåser med perforeret kant, så låget kan pilles af med en spidstang. Reserve-låg med låse leveres som reservedele.',
    ],
    image: skaermdaaser,
    second: gaskets,
  },
  {
    slug: 'emc-pakninger',
    h1: 'EMC pakninger',
    sub: 'RF-gaskets – skræddersyet til dit printkort',
    lead: 'Vil du spare plads på dit print og undgå lodning af flere skærmdåser, integrerer vi gerne afskærmningen på dit printkort med en skræddersyet EMC-fjederpakning.',
    body: [
      'Med en banebredde ned til 1 mm, en tykkelse på 0,15 mm og meget tætsiddende fjedre på typisk 0,5 mm højde lukker vi effektivt for HF-støj mellem alle rum i dit shield/cover og dit print – med én komponent.',
      'Du sender printudlægget, og vi skræddersyr EMC-pakningen.',
    ],
    image: shield,
  },
  {
    slug: 'dekorative-emner',
    h1: 'Dekorative emner',
    sub: 'Detaljeret ætsning i tyndplade metal',
    lead: 'Etch kan levere dekorative emner i eksempelvis bronze, messing eller rustfrit stål. Ved hjælp af faconætsning kan vi meget præcist og detaljeret bearbejde metallisk tyndplade helt ned til under 0,1 mm. Nogle af fordelene ved faconætsning er:',
    bullets: [
      'Meget tætte hulgeometrier uden at bryde materialet',
      'Koniske huller, eller huller på skrå gennem materialet',
      'Fri for grater',
      'Mulighed for at nedætsse detaljerede mønstre, logoer eller tekster fra den ene side',
    ],
    body: [
      'Vi leverer ofte fra dag til dag.',
      'Vi er endvidere behjælpelige med design af dit produkt. Har du ikke en CAD-tegning af produktet, kan du sende en skitse – så hjælper vi dig gerne med at tegne. Har du behov for f.eks. forgyldning og/eller bukning, klarer vi også dette.',
      'Vi bearbejder de fleste metaller i tykkelser fra 0,025 mm til op over 1 mm.',
    ],
    image: ahorn,
  },
];
