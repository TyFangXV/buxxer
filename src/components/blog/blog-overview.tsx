import { Box, Divider, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import theme from '../../styles/themes';
import { IBlog } from '../../utils/interfere';

const Theme = new theme();
const defaultTheme = Theme.getThemeByName('default');

const BlogOverview: React.FC<IBlog> = ({ id, title, content, date, tags }) => {
  return (
    <Box
      borderRadius={'10px'}
      padding="5px"
      id={id}
      maxWidth="50vw"
      minHeight={'35vh'}
      marginBottom={'4vh'}
      backgroundColor={defaultTheme?.colors.secondary}
    >
      <Heading color={defaultTheme?.colors.text} size="lg">
        {title}
      </Heading>
      <Divider orientation="horizontal" color={defaultTheme?.colors.border} />

      <Text color={defaultTheme?.colors.text} fontSize="larger" paddingTop={"10px"}>
        {content.substring(0, 250).concat('...')}
      </Text>

      <Box>
        <Box display={'flex'} position="absolute" >
          <Text color={defaultTheme?.colors.text}>{date.toDateString()}</Text>

            {tags.map((tag, index) => {
              return (
                <Box key={index} marginLeft={'1vw'}>
                  <Text color={defaultTheme?.colors.text}>{tag}</Text>
                </Box>
              );
            })}
            
        </Box>
      </Box>
    </Box>
  );
};

export default BlogOverview;
