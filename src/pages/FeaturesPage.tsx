import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  useTheme,
  alpha,
} from '@mui/material';
import {
  Check as CheckIcon,
  PersonSearch as PersonSearchIcon,
  Psychology as PsychologyIcon,
  Support as SupportIcon,
  School as SchoolIcon,
} from '@mui/icons-material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const featureCategories = [
  {
    title: 'Job Search & Matching',
    icon: <PersonSearchIcon fontSize="large" />,
    description: 'Find opportunities that match your skills and circumstances',
    features: [
      'AI-powered job matching based on skills, not just experience',
      'Filter by location, schedule, and transportation access',
      'Second-chance employer identification',
      'Day labor and flexible work options',
      'Real-time job alerts',
      'Save jobs for offline viewing',
    ],
  },
  {
    title: 'Smart Profile Creation',
    icon: <PsychologyIcon fontSize="large" />,
    description: 'Build a profile that highlights your strengths',
    features: [
      'Voice-to-text for easy profile creation',
      'Skills-based matching system',
      'Flexible address options',
      'Photo optional profiles',
      'Multi-language support',
      'Offline profile editing',
    ],
  },
  {
    title: 'Support Network',
    icon: <SupportIcon fontSize="large" />,
    description: 'Connect with people who can help you succeed',
    features: [
      'Direct messaging with case workers',
      'Peer mentorship program',
      'Employer communication tools',
      'Community support forums',
      'Anonymous help requests',
      'Crisis support resources',
    ],
  },
  {
    title: 'Learning & Resources',
    icon: <SchoolIcon fontSize="large" />,
    description: 'Build skills and prepare for success',
    features: [
      'Interview preparation guides',
      'Digital literacy tutorials',
      'Resume building assistance',
      'Workplace etiquette training',
      'Benefits eligibility calculator',
      'Transportation planning tools',
    ],
  },
];

export default function FeaturesPage() {
  const theme = useTheme();

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
          color: 'white',
          pt: { xs: 12, md: 16 },
          pb: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Chip
              label="Features"
              sx={{
                mb: 2,
                backgroundColor: alpha('#FFFFFF', 0.2),
                color: 'white',
              }}
            />
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                mb: 3,
                fontWeight: 800,
              }}
            >
              Everything You Need to Succeed
            </Typography>
            <Typography
              variant="h5"
              sx={{
                maxWidth: 800,
                mx: 'auto',
                opacity: 0.9,
              }}
            >
              BoweryConnect provides comprehensive tools and support designed 
              specifically for individuals experiencing homelessness.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Features Grid */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          {featureCategories.map((category, index) => (
            <Box
              key={category.title}
              sx={{
                mb: 8,
                '&:last-child': { mb: 0 },
              }}
            >
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={5} order={{ xs: 2, md: index % 2 === 0 ? 1 : 2 }}>
                  <Box
                    sx={{
                      p: 4,
                      borderRadius: 3,
                      backgroundColor: alpha(theme.palette.primary.main, 0.05),
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Box sx={{ textAlign: 'center' }}>
                      <Box
                        sx={{
                          width: 120,
                          height: 120,
                          borderRadius: '50%',
                          backgroundColor: theme.palette.primary.main,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 3,
                          color: 'white',
                        }}
                      >
                        {category.icon}
                      </Box>
                      <Typography variant="h6" color="text.secondary">
                        Feature Preview
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={7} order={{ xs: 1, md: index % 2 === 0 ? 2 : 1 }}>
                  <Typography
                    variant="h3"
                    sx={{
                      mb: 2,
                      fontWeight: 700,
                      color: theme.palette.primary.main,
                    }}
                  >
                    {category.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ mb: 3 }}
                  >
                    {category.description}
                  </Typography>
                  <List>
                    {category.features.map((feature) => (
                      <ListItem key={feature} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 40 }}>
                          <CheckIcon color="success" />
                        </ListItemIcon>
                        <ListItemText
                          primary={feature}
                          primaryTypographyProps={{
                            variant: 'body1',
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Container>
      </Box>

      {/* Additional Features */}
      <Box sx={{ py: 8, backgroundColor: theme.palette.grey[50] }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              mb: 6,
              fontWeight: 700,
            }}
          >
            Designed for Real-World Challenges
          </Typography>
          <Grid container spacing={3}>
            {[
              { label: 'Works Offline', description: 'Save data and sync when connected' },
              { label: 'Low Data Usage', description: 'Optimized for limited data plans' },
              { label: 'Large Touch Targets', description: 'Easy to use on any device' },
              { label: 'Voice Navigation', description: 'Hands-free operation available' },
              { label: 'High Contrast Mode', description: 'Better visibility in all conditions' },
              { label: 'Multiple Languages', description: 'English, Spanish, and Chinese' },
            ].map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.label}>
                <Card elevation={0} sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                      {item.label}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Footer />
    </>
  );
}