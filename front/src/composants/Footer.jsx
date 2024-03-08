import React from 'react'
import { ButtonGroup, Container, IconButton, Stack, Text } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'


function Footer() {
    return (
      <Container as="footer" role="contentinfo" py={{ base: '8', md: '8' }} borderTop="1px solid" borderColor="blue.500" mt="8">
            <Stack spacing={{ base: '4', md: '5' }} direction={{ base: 'column', md: 'row' }} justifyContent="space-between" alignItems="center">
                <Stack justify="space-between" direction="row" align="center">
                    {/* <Logo /> */}
                    <ButtonGroup variant="tertiary">
                        <IconButton as="a" href="#" aria-label="LinkedIn" icon={<FaLinkedin />} />
                        <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub />} />
                        <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
                    </ButtonGroup>
                </Stack>
                <Text fontSize="sm" color="fg.subtle" alignItems='left'>
                    &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights reserved.
                </Text>
            </Stack>
        </Container>
    )
}

export default Footer;