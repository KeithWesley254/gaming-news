import { Box, Typography } from '@mui/material'
import React from 'react'
import DOMPurify from 'dompurify';

const MmoNews = ({newsItems}) => {

  // console.log(newsItems)
  return (
    <Box>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <Typography sx={{fontFamily: 'Rubik Distressed', fontSize: {xs: "40px", md: "70px"}, textAlign: 'center'}}>Gaming News</Typography>
      </Box>
      <Box sx={{overflowY: "scroll", maxHeight: {xs: "500px", md: "1200px"}}}>
        {newsItems?.map(story => {
          return(
            <Box key={story.id}>
              <Typography sx={{fontFamily: 'cinzel', fontSize: "25px", fontWeight: "bolder", textAlign: 'center'}} >{story.title}</Typography>
              <br />
              <Box className="articleContent"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(story.article_content).replace(/<a /g, '<a target="_blank" rel="noopener noreferrer" ') }}
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