import * as React from 'react'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

function App() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container>
                <Grid
                    container
                    justify='center'
                    maxWidth='lg'
                    spacing={0}
                    direction='column'
                    alignItems='center'
                >
                    <Typography variant='h2' align='center' component='div' gutterBottom>
                        Two Rules of Life
                    </Typography>
                    <Typography variant='button' display='block' gutterBottom>
                        "There are only two rules of life," my father would say, "it's not fair, and
                        it doesn't make sense."
                    </Typography>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default App
