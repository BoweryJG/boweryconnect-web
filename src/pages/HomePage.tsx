import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Stack,
  Chip,
  useTheme,
  alpha,
} from '@mui/material';
import {
  Work as WorkIcon,
  People as PeopleIcon,
  TrendingUp as TrendingUpIcon,
  Security as SecurityIcon,
  PhoneAndroid as PhoneIcon,
  WifiOff as WifiOffIcon,
} from '@mui/icons-material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const features = [
  {
    icon: <WorkIcon fontSize="large" />,
    title: 'Job Matching',
    description: 'AI-powered job matching based on skills, not just credentials. Find opportunities that fit your abilities.',
  },
  {
    icon: <PeopleIcon fontSize="large" />,
    title: 'Support Network',
    description: 'Connect with case workers, mentors, and peers who understand your journey.',
  },
  {
    icon: <TrendingUpIcon fontSize="large" />,
    title: 'Skill Development',
    description: 'Access resources to build new skills and prepare for interviews.',
  },
  {
    icon: <SecurityIcon fontSize="large" />,
    title: 'Secure & Private',
    description: 'Your data is protected. Use phone verification instead of email for easier access.',
  },
  {
    icon: <PhoneIcon fontSize="large" />,
    title: 'Mobile First',
    description: 'Designed to work on any smartphone, even older models with limited data.',
  },
  {
    icon: <WifiOffIcon fontSize="large" />,
    title: 'Works Offline',
    description: 'Save jobs and applications offline. Sync when you have internet access.',
  },
];

const stats = [
  { value: '10,000+', label: 'Job Opportunities' },
  { value: '500+', label: 'Partner Employers' },
  { value: '85%', label: 'Success Rate' },
  { value: '24/7', label: 'Support Available' },
];

export default function HomePage() {
  const theme = useTheme();

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
          color: 'white',
          pt: { xs: 12, md: 16 },
          pb: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  mb: 3,
                  fontWeight: 600,
                  opacity: 0,
                  animation: 'fadeIn 1.2s ease-out 0.3s forwards',
                  '@keyframes fadeIn': {
                    '0%': { opacity: 0, transform: 'translateY(10px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                  },
                }}
              >
                Your Path to Meaningful Employment
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 4, 
                  opacity: 0,
                  animation: 'fadeIn 1.2s ease-out 0.6s forwards',
                  '@keyframes fadeIn': {
                    '0%': { opacity: 0, transform: 'translateY(10px)' },
                    '100%': { opacity: 0.9, transform: 'translateY(0)' },
                  },
                }}
              >
                BoweryConnect bridges the gap between those experiencing homelessness 
                and employers who believe in second chances.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: 'white',
                    color: theme.palette.primary.main,
                    '&:hover': {
                      backgroundColor: alpha('#FFFFFF', 0.9),
                    },
                  }}
                  href="https://github.com/BoweryJG/BoweryConnect"
                  target="_blank"
                >
                  Download the App
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: alpha('#FFFFFF', 0.1),
                    },
                  }}
                  href="#features"
                >
                  Learn More
                </Button>
              </Stack>
              <Box sx={{ mt: 4 }}>
                <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
                  In partnership with
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  The Bowery Mission
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  textAlign: 'center',
                  '& img': {
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: 2,
                    boxShadow: theme.shadows[20],
                  },
                }}
              >
                <Box
                  sx={{
                    width: { xs: 280, md: 400 },
                    height: { xs: 500, md: 600 },
                    backgroundColor: alpha('#FFFFFF', 0.1),
                    borderRadius: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    border: `2px solid ${alpha('#FFFFFF', 0.2)}`,
                  }}
                >
                  <Typography variant="h6" sx={{ opacity: 0.7 }}>
                    Mobile App Preview
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: 8, backgroundColor: theme.palette.background.default }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {stats.map((stat) => (
              <Grid item xs={6} md={3} key={stat.label}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      color: theme.palette.primary.main,
                      mb: 1,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box id="features" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Chip
              label="Features"
              color="primary"
              sx={{ mb: 2 }}
            />
            <Typography variant="h2" sx={{ mb: 2 }}>
              Built for Your Success
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              Every feature is designed with your unique needs in mind, 
              removing barriers and creating opportunities.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {features.map((feature) => (
              <Grid item xs={12} md={4} key={feature.title}>
                <Card
                  sx={{
                    height: '100%',
                    transition: 'box-shadow 0.3s ease, opacity 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 8px 25px rgba(30, 58, 138, 0.08)',
                      opacity: 0.95,
                    },
                  }}
                  elevation={0}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: 2,
                        backgroundColor: alpha(theme.palette.primary.main, 0.1),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                        color: theme.palette.primary.main,
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: theme.palette.primary.main,
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ mb: 3 }}>
            Ready to Start Your Journey?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Join thousands who have found meaningful employment through BoweryConnect.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: 'white',
                color: theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: alpha('#FFFFFF', 0.9),
                },
              }}
              href="https://github.com/BoweryJG/BoweryConnect"
              target="_blank"
            >
              Download for Mobile
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: alpha('#FFFFFF', 0.1),
                },
              }}
              href="/contact"
            >
              Partner With Us
            </Button>
          </Stack>
        </Container>
      </Box>

      <Footer />
    </>
  );
}