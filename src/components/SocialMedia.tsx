import { Flex, IconButton, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaFacebook} from 'react-icons/fa'

export default function SocialMedia(){
    return(
        <Flex position='absolute' bottom='5'>
            <Link href='https://github.com/' target='_blank' >
                <IconButton 
                    aria-label='Github'
                    icon={<FaGithub/>}
                    isRound={true}
                    size='md'
                    m='1'
                /> 
            </Link>
            <Link href='https://www.linkedin.com/' target='_blank'>
                <IconButton 
                aria-label='Linkedin'
                icon={<FaLinkedin/>}
                isRound={true}
                size='md'
                m='1'
            /> 
            </Link>
            <Link href='https://www.instagram.com/' target='_blank'>
                <IconButton 
                aria-label='Instagram'
                icon={<FaInstagram/>}
                isRound={true}
                size='md'
                m='1'
            /> 
            </Link>
            <Link href='https://twitter.com/' target='_blank'>
                <IconButton 
                aria-label='Twitter'
                icon={<FaTwitter/>}
                isRound={true}
                size='md'
                m='1'
            /> 
            </Link>
            <Link href='https://www.facebook.com/' target='_blank'>
                <IconButton
                aria-label='Facebook' 
                icon={<FaFacebook/>}
                isRound={true}
                size='md'
                m='1'
            /> 
            </Link>
      </Flex>
    )
}