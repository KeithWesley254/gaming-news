import { Box, Typography } from '@mui/material'
import React from 'react'
import DOMPurify from 'dompurify';

const MmoNews = ({newsItems}) => {

  console.log(newsItems)
  return (
    <Box>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <Typography sx={{fontFamily: 'Rubik Distressed', fontSize: "70px", textAlign: 'center'}}>News</Typography>
      </Box>
      <Box sx={{overflowY: "scroll", maxHeight: "500px"}}>
        {newsItems.map(story => {
          return(
            <Box key={story.id}>
              <Typography sx={{fontFamily: 'Rubik Distressed', color: '#0bbb34', textAlign: 'center'}} >{story.title}</Typography>
              <br />
              <Box className="articleContent"
              dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(story.article_content)}}
              >
              </Box>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default MmoNews