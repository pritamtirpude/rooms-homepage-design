import {
  desktopHeroOneImg,
  desktopHeroThreeImg,
  desktopHeroTwoImg,
  mobileHeroOneImg,
  mobileHeroThreeImg,
  mobileHeroTwoImg
} from '@/public/assets/images';

export const data = [
  {
    title: 'Discover innovative ways to decorate',
    description:
      'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
    images: {
      large: desktopHeroOneImg,
      small: mobileHeroOneImg
    }
  },
  {
    title: 'We are available all across the globe',
    description:
      'With stores all over the world, it&apos;s easy for you to find furniture for your home or place of business. Locally, we&apos;re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don&apos;t hesitate to contact us today.',
    images: {
      large: desktopHeroTwoImg,
      small: mobileHeroTwoImg
    }
  },
  {
    title: 'Manufactured with the best materials',
    description:
      'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
    images: {
      large: desktopHeroThreeImg,
      small: mobileHeroThreeImg
    }
  }
];
