import { useState } from 'react';
import './App.css'
import { Container, TextField, Typography } from '@mui/material';

function App() {
  const [emailContent, setEmailCount] = useState('');
  const[tone,setTone] = useState('');
  const[generatedReply, setGeneratedReply] = useState('');
  const[loading, setLoading] = useState(false);
  const[error, setError] = useState('');

  return (
    <Container maxWidth = "md" sx={{py:4}}>
      <Typography variant='h3' component="h1" gutterBottom>
        Email Reply Generator
      </Typography>

      <Box sx={{mx:3}}>
        <TextField
        fullWidth
        multiline
        rows={6}
        variant='outlined'
        label="Original Email Content"
        value={emailContent || ''}
        onChange={(e) => setEmailCount(e.target.value)}
        sx={{ mb:2}}/>
        
      </Box>
    </Container>
  )
}

export default App
