import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const steps = [
  {
    label: 'Masters in Computer Application, 2024',
    description: `I completed my Master in Computer Application at Sharda University, with an aggregate score of 8.2. This rigorous program equipped me with advanced knowledge and skills in software development, data structures, algorithms, and database management.`,
  },
  {
    label: 'Bachelors in Computer Application, 2022',
    description:
      'I earned my Bachelor of Computer Applications (BCA) from Galgotias University in 2022, graduating with an aggregate of 82%. This program provided me with a strong foundation in computer science principles, such as programming, web development, and system analysis. My education at Galgotias University included hands-on projects and collaborative learning experiences, which were instrumental in developing my technical and analytical skills',
  },
  {
    label: 'Intermediate, 2019',
    description: `I completed my intermediate education with a focus on Accountancy, Business Studies, and Economics under the CBSE board, with a background in Commerce.`,
  },
];

export default function WorkLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    
    <Box sx={{ maxWidth: 400, color: 'white', bgcolor: 'black', p: 2, borderRadius: 2 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption" sx={{ color: 'white' }}>Last step</Typography>
                ) : null
              }
              sx={{
                '& .MuiStepLabel-label': { color: 'white' },
                '& .MuiStepLabel-iconContainer': { color: '#5a4fcf' }, // Set the icon color to iris
                '& .MuiStepIcon-root': { color: '#5a4fcf' }, // Set the icon color to iris
              }}
            >
              <Typography sx={{ color: 'white' }}>{step.label}</Typography>
            </StepLabel>
            <StepContent>
              <Typography sx={{ color: 'white', textAlign: 'justify', fontSize: 14 }}>{step.description}</Typography> {/* Setting alignment and font size */}
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1, bgcolor: '#5a4fcf' }} // Set the button color to iris
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1, bgcolor: '#5a4fcf' }} // Set the button color to iris
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3, color: 'white', bgcolor: 'inherit' }}>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1, bgcolor: '#5a4fcf' }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  
  );
}

