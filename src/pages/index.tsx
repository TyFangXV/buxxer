import { background, Box, Center } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import BlogOverview from '../components/blog/blog-overview'
import Nav from '../components/nav/nav'
import styles from '../styles/Home.module.css'
import theme from '../styles/themes'
import { IBlog } from '../utils/interfere'

const Theme = new theme();

//mock data 
const posts:IBlog[] = [
  {
    id: '1',
    title: 'Post 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc egestas nisi, eu aliquet nunc nisl eu nisl. Donec euismod, nisl eget consectetur tempor, nisl nunc egestas nisi, eu aliquet nunc nisl eu nisl. Donec euismod, nisl eget consectetur tempor, nisl nunc egestas nisi, eu aliquet nunc nisl eu nisl. Donec euismod, nisl eget consectetur tempor, nisl nunc egestas nisi, eu aliquet nunc nisl eu nisl. Donec euismod, nisl eget consectetur tempor, nisl nunc egestas nisi, eu aliquet nunc nisl eu nisl. Donec euismod, nisl eget consectetur tempor, nisl nunc egestas nisi, eu aliquet nunc nisl eu nisl. Donec euismod, nisl eget consectetur tempor, nisl nunc egestas nisi, eu aliquet nunc nisl eu nisl. Donec euismod, nisl eget consectetur tempor, nisl nunc egestas nisi, eu aliquet nunc nisl eu nisl. Donec euismod, nisl eget consectetur tempor, nisl nunc egestas nisi, eu aliquet nunc nisl eu nisl. Donec euismod, nisl eget consectetur tempor, nisl nunc egestas nisi, eu aliquet nunc nisl eu nisl. Donec euismod, nisl eget consectetur tempor, nisl nunc egestas nisi, eu aliquet nunc nisl eu nisl. Donec euismod, nisl eget consectetur tempor, nisl nunc egest',
    date: new Date(),
    tags: ['tag1, tag2, tag3']
  },
  {
    id: '2',
    title: 'Post 2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc egestas nisi, eu aliquet nunc nisl eu nisl. Donec euismod, nisl eget consectetur tempor, nisl nunc egestas nisi, eu aliquet nunc nisl eu nisl. Donec euismod, nisl eget consectetur tempor, nisl nunc egestas nisi, eu aliquet nunc nisl eu nisl. Donec euismod, nisl eget consectetur tempor, nisl nunc egestas nisi, eu aliquet nunc nisl eu nisl. Donec euismod, nisl eget consectetur tempor, nisl nunc egestas nisi, eu aliquet nunc nisl eu nisl. Donec euismod, nisl eget consectetur tempor, nisl nunc egestas nisi, eu aliquet nunc nisl eu nisl. Donec euismod, nisl eget consectetur tempor, nisl nunc egestas nisi, eu aliquet nunc nisl eu nisl. Donec euismod, nisl eget consectetur tempor, nisl nunc egestas nisi, eu aliquet nunc nisl eu nisl. Donec euismod, nisl eget consectetur tempor, nisl nunc egestas nisi, eu aliquet nunc nisl eu nisl. Donec euismod, nisl eget consectetur tempor, nisl nunc egestas nisi, eu aliquet nunc nisl eu nisl. Donec euismod, nisl eget consectetur tempor, nisl nunc egest',
    date: new Date(),
    tags: ['tag1, tag2, tag3']
  },
  {
    id: '3',
    title: 'Post 3',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc egestas nisi, eu aliquet nunc nisl eu nisl. Donec euismod, nisl eget consectetur tempor, nisl nunc egestas nisi, eu aliquet nunc nisl eu nisl. Donec euismod, nisl eget consectetur tempor, nisl nunc egestas nisi, eu aliquet nunc nisl eu nisl. Donec euismod, nisl eget consectetur tempor, nisl nunc egestas nisi, eu aliquet nunc nisl eu nisl. Donec euismod, nisl eget consectetur tempor, nisl nunc egestas nisi, eu aliquet nunc nisl eu nisl. Donec euismod, nisl eget consectetur tempor, nisl nunc egestas nisi, eu aliquet nunc nisl eu nisl. Donec euismod, nisl eget consectetur tempor, nisl nunc egestas nisi, eu aliquet nunc nisl eu nisl. Donec euismod, nisl eget consectetur tempor, nisl nunc egestas nisi, eu aliquet nunc nisl eu nisl. Donec euismod, nisl eget consectetur tempor, nisl nunc egestas nisi, eu aliquet nunc nisl eu nisl. Donec euismod, nisl eget consectetur tempor, nisl nunc egest',
    date: new Date(),
    tags: ['tag1, tag2, tag3']
  },
]


const Home: NextPage = () => {
  const defaultTheme = Theme.getThemeByName('default');
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
        <meta name="description" content="A blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box position={"absolute"} top={"0"}>
        <Nav/>
      </Box>
     
     <Box paddingTop="10vh" backgroundColor={defaultTheme?.colors.background}>
       <Center>
         <Box>
              {
                  posts.map(post => (
                    <BlogOverview key={post.id} {...post} />
                  ))
                  
              }             
         </Box>
       
       </Center>

     </Box>
    </div>
  )
}

export default Home
