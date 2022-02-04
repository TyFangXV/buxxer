import { Box, Heading, Input, InputGroup, InputRightElement} from "@chakra-ui/react";
import {SearchIcon, SettingsIcon} from '@chakra-ui/icons'
import React from "react";
import theme from "../../styles/themes";
const Theme = new theme();



const Nav: React.FC = () => {
    const defaultTheme = Theme.getThemeByName('default');
    return (
        <Box background={defaultTheme?.colors.secondary} minWidth={"100vw"} minHeight={"7vh"} borderBottom={`1px ${defaultTheme?.colors.border}`}>
            <Box padding="1vh 0 1vh 0" display={"flex"} justifyContent={"space-between"}>
                <Heading size={"lg"} color={defaultTheme?.colors.logo} marginLeft="1vw" fontFamily={defaultTheme?.font.primary}>
                    blog
                </Heading>

                <Box display="flex">
                    <SettingsIcon color="white" fontSize="x-large" margin="1vh 1vw 0 0" cursor="pointer"/>
                    <InputGroup marginRight="2vw">
                        <Input placeholder={"Search"} color="white" backgroundColor={defaultTheme?.colors.foreground} border="none"/>
                        <InputRightElement>
                            <SearchIcon color="whitesmoke" fontSize={"large"} />
                        </InputRightElement>
                    </InputGroup>
                </Box> 

            </Box>

        </Box>
    )   
}


export default Nav;