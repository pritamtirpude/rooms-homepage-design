'use client';

import {
  iconArrow,
  imageAboutDark,
  imageAboutLight,
  iconAngleLeft,
  iconAngleRight,
  logo,
  iconHamburger
} from '@/public/assets/images';
import { data } from '@/utils/data';
import Image from 'next/image';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useCallback, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<number | undefined>();
  const [isMobile, setIsMobile] = useState(false);
  const [isActive, setIsActive] = useState('');

  const macthes = useMediaQuery('(max-width: 767px)');

  const handleNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % data.length;
    setCurrentIndex(nextIndex);
    setDirection(1);
  }, [currentIndex]);

  const handlePrevious = useCallback(() => {
    const prevIndex = (currentIndex - 1 + data.length) % data.length;
    setCurrentIndex(prevIndex);
    setDirection(-1);
  }, [currentIndex]);

  const animationVariants = {
    initial: (direction: number) => {
      return { x: `${110 * direction}%`, opacity: 0 };
    },
    animate: { x: '0%', opacity: 1 },
    exit: (direction: number) => {
      return { x: `${-110 * direction}%`, opacity: 0 };
    }
  };

  const animationInfoVariants = {
    initial: {
      y: '100%',
      opacity: 0,
      scale: 0.8
    },
    animate: {
      y: '0%',
      scale: 1,
      opacity: 1
    },
    exit: {
      y: '100%',
      opacity: 0,
      scale: 0.8
    }
  };

  const links = ['home', 'shop', 'about', 'contact'];

  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12">
        <AnimatePresence mode="wait" initial={false}>
          {isMobile && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key="lightbox"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
              tabIndex={-1}
              className="fixed z-40 size-full bg-rooms-black/85 lg:hidden"
              onClick={() => setIsMobile(false)}
            >
              <motion.div
                initial={{ y: '-100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{
                  duration: 0.3,
                  type: 'spring',
                  bounce: 0
                }}
                onClick={(e) => e.stopPropagation()}
                className="z-50 flex w-full items-center gap-8 bg-rooms-white px-6 py-12"
              >
                <div onClick={() => setIsMobile(false)}>
                  <button
                    aria-label="Close mobile menu"
                    className="inline-block text-xl text-rooms-darkGray"
                  >
                    X
                  </button>
                </div>
                <ul className="flex items-center gap-8">
                  {links.map((link) => (
                    <li
                      className="text-base font-semibold"
                      role="menuitem"
                      key={link}
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence mode="popLayout" initial={false} custom={direction}>
          <div className="relative overflow-hidden lg:col-span-7">
            <div className="absolute z-20 flex  w-full items-center gap-[113px] px-6 py-12 lg:hidden">
              <div
                aria-label="Open mobile menu"
                onClick={() => setIsMobile(true)}
              >
                <Image src={iconHamburger} alt="icon hamburger" />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2">
                <Image src={logo} alt="Company logo" />
              </div>
            </div>
            <div className="hidden lg:absolute lg:z-30 lg:flex lg:items-center lg:gap-14 lg:p-16">
              <div>
                <Image src={logo} alt="logo" />
              </div>
              <ul className="flex items-center gap-[30px]">
                {links.map((link) => (
                  <motion.li
                    layout
                    onMouseOver={() => setIsActive(link)}
                    onMouseLeave={() => setIsActive(link)}
                    onFocus={() => setIsActive(link)}
                    className="relative cursor-pointer text-base font-semibold text-rooms-white"
                    key={link}
                  >
                    {link}
                    {isActive === link && (
                      <motion.div
                        layoutId="indicator"
                        className="absolute h-[2px] w-full bg-rooms-white"
                      />
                    )}
                  </motion.li>
                ))}
              </ul>
            </div>
            <motion.div
              variants={animationVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, type: 'spring', bounce: 0 }}
              className="size-full"
              key={data[currentIndex].title}
              custom={direction}
            >
              <Image
                className="size-full object-cover"
                src={
                  macthes
                    ? data[currentIndex].images.small
                    : data[currentIndex].images.large
                }
                alt="Furniture with chairs and tables"
              />
            </motion.div>
          </div>
        </AnimatePresence>
        <AnimatePresence mode="wait" initial={false}>
          <div className="relative lg:col-span-5">
            <div className="overflow-hidden px-8 py-[60px]  lg:px-[100px] lg:py-[120px]">
              <motion.div
                variants={animationInfoVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                key={data[currentIndex].title}
                transition={{
                  duration: 0.5,
                  type: 'spring',
                  delay: 0.1,
                  bounce: 0
                }}
                className="flex size-full flex-col items-start justify-center overflow-hidden"
              >
                <h1 className="text-[40px] font-semibold leading-9 text-rooms-black  lg:leading-none lg:tracking-[-2px]">
                  {data[currentIndex].title}
                </h1>
                <p className="mt-[18px] text-base font-medium leading-[22px] text-rooms-darkGray">
                  {data[currentIndex].description}
                </p>
                <button
                  className="mt-[26px] flex items-center gap-[30px] text-[15px] font-medium uppercase leading-4 tracking-[12.5px] text-rooms-black transition-colors hover:text-rooms-darkGray"
                  aria-label="Shop Now"
                >
                  Shop Now
                  <span>
                    <Image src={iconArrow} alt="icon right arrow" />
                  </span>
                </button>
              </motion.div>

              <div className="absolute -top-16 right-0 lg:bottom-0 lg:left-0 lg:top-auto">
                <button
                  aria-label="Previous slide"
                  onClick={handlePrevious}
                  className="bg-rooms-black px-[23px] py-5 transition-colors hover:bg-rooms-veryDarkGray lg:px-[34px] lg:py-7"
                >
                  <Image src={iconAngleLeft} alt="icon angle left" />
                </button>
                <button
                  aria-label="Next slide"
                  onClick={handleNext}
                  className="bg-rooms-black px-[23px] py-5  transition-colors hover:bg-rooms-veryDarkGray lg:px-[34px] lg:py-7"
                >
                  <Image src={iconAngleRight} alt="icon angle right" />
                </button>
              </div>
            </div>
          </div>
        </AnimatePresence>

        <section
          aria-labelledby="about-our-furniture"
          className="lg:col-span-3"
        >
          <Image
            className="size-full object-cover"
            src={imageAboutDark}
            alt="A room with dark decor featuring a chair and table"
          />
        </section>
        <section
          aria-labelledby="about-our-furniture"
          className="px-8 py-12 lg:col-span-6 lg:px-12 lg:py-[68px]"
        >
          <div className="flex size-full flex-col items-start justify-center">
            <h2
              id="about-our-furniture"
              className="text-base font-bold uppercase leading-[22px] tracking-[5px]"
            >
              About our furniture
            </h2>
            <p className="mt-[15px] text-base font-medium leading-[22px] text-rooms-darkGray">
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </p>
          </div>
        </section>
        <section aria-labelledby="light-room" className="lg:col-span-3">
          <Image
            className="size-full object-cover"
            src={imageAboutLight}
            alt="A bright, white-themed room featuring a chair"
          />
        </section>
      </div>
    </main>
  );
}

export default Home;
