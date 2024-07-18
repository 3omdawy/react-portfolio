import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {

  const topNav = useRef();

  useEffect(() => {
    let scrollPos = null;
    const handleScroll = (e) => {
      if (scrollPos !== null) {
        if (window.scrollY > scrollPos) topNav.current.style.transform = "translateY(-200px)";
        else topNav.current.style.transform = "translateY(0)";
      }
      scrollPos = window.scrollY;
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const SocialMediaLinks = () => {
    return (
      <HStack spacing={4}>
        {
          socials.map(item => <a key={item.url} href={item.url}><FontAwesomeIcon icon={item.icon} size="2x" /></a>)
        }
      </HStack>
    )
  }

  const InternalLinks = () => {
    return (
      <>
        <a onClick={handleClick('projects')} href="/#projects">Projects</a>
        <a onClick={handleClick('contactme')} href="/#contact-me">Contact Me</a>
      </>
    )
  }

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={topNav}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {
              /* Add social media links based on the `socials` data */
              <SocialMediaLinks />
            }
          </nav>
          <nav>
            <HStack spacing={8}>
              {
                /* Add links to Projects and Contact me section */
                <InternalLinks />
              }
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
