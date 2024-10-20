import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, FormControl, InputLabel, Select, MenuItem, Button, Alert, Box } from '@mui/material';
import './index.css';

function App() {
  const [issue, setIssue] = useState('');
  const [solution, setSolution] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let solutionText = '';
    switch (issue) {
      case 'slow':
        solutionText = 'Try closing unnecessary programs, clearing your cache, or restarting your computer.';
        break;
      case 'noInternet':
        solutionText = 'Check your network cable, restart your router, or troubleshoot your network settings.';
        break;
      case 'noPower':
        solutionText = 'Ensure the power cable is plugged in, try a different outlet, or check for any hardware damage.';
        break;
      case 'softwareCrash':
        solutionText = 'Try updating the software, checking for compatibility issues, or reinstalling the application.';
        break;
      case 'overheating':
        solutionText = 'Make sure your computer has adequate ventilation, clean any dust buildup, or check if the fans are working properly.';
        break;
      case 'blueScreen':
        solutionText = 'Check if recent software/hardware changes caused the issue, update drivers, or run a system restore.';
        break;
      case 'peripheralIssues':
        solutionText = 'Make sure the peripherals are properly connected, try different USB ports, or reinstall drivers.';
        break;
      case 'diskFull':
        solutionText = 'Free up space by deleting unnecessary files, clearing temporary files, or uninstalling unused programs.';
        break;
      case 'displayIssues':
        solutionText = 'Check the monitor connections, update graphics drivers, or adjust display settings.';
        break;
      case 'audioIssues':
        solutionText = 'Check if the audio device is connected, update audio drivers, or ensure the volume is not muted.';
        break;
      default:
        solutionText = 'Please select a valid issue.';
    }
    setSolution(solutionText);
  };

  return (
    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center' }}>
      <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Computer Troubleshooting System
        </Typography>
        <Card>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <FormControl fullWidth margin="normal">
                <InputLabel id="issue-label">Select the issue you are facing</InputLabel>
                <Select
                  labelId="issue-label"
                  value={issue}
                  onChange={(e) => setIssue(e.target.value)}
                  label="Select the issue you are facing"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="slow">Computer is running slow</MenuItem>
                  <MenuItem value="noInternet">No internet connection</MenuItem>
                  <MenuItem value="noPower">Computer won't turn on</MenuItem>
                  <MenuItem value="softwareCrash">Software keeps crashing</MenuItem>
                  <MenuItem value="overheating">Computer is overheating</MenuItem>
                  <MenuItem value="blueScreen">Blue Screen of Death (BSOD)</MenuItem>
                  <MenuItem value="peripheralIssues">Peripherals not working (mouse/keyboard)</MenuItem>
                  <MenuItem value="diskFull">Disk is full</MenuItem>
                  <MenuItem value="displayIssues">Display is flickering or not working</MenuItem>
                  <MenuItem value="audioIssues">No sound or audio problems</MenuItem>
                </Select>
              </FormControl>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Diagnose Issue
              </Button>
            </form>
            {solution && (
              <Alert severity="info" sx={{ mt: 2 }}>
                {solution}
              </Alert>
            )}
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default App;



