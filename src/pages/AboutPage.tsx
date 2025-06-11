import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  Stack,
  useTheme,
  alpha,
} from '@mui/material';
import {
  Favorite as FavoriteIcon,
  Handshake as HandshakeIcon,
  EmojiObjects as EmojiObjectsIcon,
} from '@mui/icons-material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const values = [
  {
    icon: <FavoriteIcon fontSize="large" />,
    title: 'Dignity First',
    description: 'Every person deserves respect and the opportunity to rebuild their life with dignity.',
  },
  {
    icon: <HandshakeIcon fontSize="large" />,
    title: 'Community Partnership',
    description: 'We work hand-in-hand with shelters, missions, and support organizations.',
  },
  {
    icon: <EmojiObjectsIcon fontSize="large" />,
    title: 'Innovation for Good',
    description: 'Using technology to remove barriers and create opportunities for those who need it most.',
  },
];

const timeline = [
  {
    year: '2024',
    title: 'Project Inception',
    description: 'BoweryConnect was conceived as a solution to help homeless individuals find employment.',
  },
  {
    year: '2024',
    title: 'Partnership with Bowery Mission',
    description: 'Formed strategic partnership with The Bowery Mission to understand user needs.',
  },
  {
    year: '2025',
    title: 'Platform Development',
    description: 'Built mobile-first platform with offline capabilities and accessibility features.',
  },
  {
    year: 'Future',
    title: 'Expansion Plans',
    description: 'Scaling to serve more cities and partnering with additional organizations.',
  },
];

export default function AboutPage() {
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
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Chip
              label="About Us"
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
              Building Bridges to Employment
            </Typography>
            <Typography
              variant="h5"
              sx={{
                maxWidth: 800,
                mx: 'auto',
                opacity: 0.9,
              }}
            >
              BoweryConnect is more than an app—it's a movement to transform 
              how society supports individuals experiencing homelessness.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Mission Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" sx={{ mb: 3, fontWeight: 700 }}>
                Our Mission
              </Typography>
              <Typography variant="h6" sx={{ mb: 3, lineHeight: 1.8 }}>
                To create a world where homelessness is not a barrier to meaningful 
                employment and everyone has the opportunity to rebuild their life.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                We believe that with the right tools and support, anyone can overcome 
                their circumstances and find fulfilling work. BoweryConnect removes the 
                traditional barriers that prevent homeless individuals from accessing 
                job opportunities.
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap">
                <Chip label="Inclusive Design" color="primary" />
                <Chip label="Privacy First" color="primary" />
                <Chip label="Community Driven" color="primary" />
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: 3,
                  backgroundColor: theme.palette.grey[50],
                  textAlign: 'center',
                }}
              >
                <Typography variant="h3" color="primary" sx={{ mb: 2, fontWeight: 700 }}>
                  10,000+
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Lives to be transformed through meaningful employment
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Values Section */}
      <Box sx={{ py: 8, backgroundColor: theme.palette.grey[50] }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 6,
              fontWeight: 700,
            }}
          >
            Our Values
          </Typography>
          <Grid container spacing={4}>
            {values.map((value) => (
              <Grid item xs={12} md={4} key={value.title}>
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    p: 3,
                  }}
                >
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      mx: 'auto',
                      mb: 3,
                      backgroundColor: alpha(theme.palette.primary.main, 0.1),
                      color: theme.palette.primary.main,
                    }}
                  >
                    {value.icon}
                  </Avatar>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {value.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Partnership Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: 3,
                  backgroundColor: alpha(theme.palette.secondary.main, 0.1),
                  textAlign: 'center',
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    mb: 2,
                    fontWeight: 700,
                    color: theme.palette.secondary.dark,
                  }}
                >
                  The Bowery Mission
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Serving New Yorkers since 1879
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
                Strategic Partnership
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Our partnership with The Bowery Mission provides invaluable insights 
                into the real needs of homeless individuals. This collaboration ensures 
                that BoweryConnect addresses actual challenges faced by our users.
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Together, we're creating a comprehensive support system that combines 
                The Bowery Mission's on-ground expertise with innovative technology 
                solutions.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Timeline Section */}
      <Box sx={{ py: 8, backgroundColor: theme.palette.grey[50] }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 6,
              fontWeight: 700,
            }}
          >
            Our Journey
          </Typography>
          <Grid container spacing={3}>
            {timeline.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={item.year}>
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    borderTop: `4px solid ${theme.palette.primary.main}`,
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      color="primary"
                      sx={{ mb: 1, fontWeight: 700 }}
                    >
                      {item.year}
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                      {item.title}
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