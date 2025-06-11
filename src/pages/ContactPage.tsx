import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Stack,
  Chip,
  Alert,
  Avatar,
  useTheme,
  alpha,
  MenuItem,
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Send as SendIcon,
} from '@mui/icons-material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const contactInfo = [
  {
    icon: <EmailIcon />,
    title: 'Email',
    content: 'support@boweryconnect.org',
    link: 'mailto:support@boweryconnect.org',
  },
  {
    icon: <PhoneIcon />,
    title: 'Phone',
    content: '(212) 226-6214',
    link: 'tel:+12122266214',
  },
  {
    icon: <LocationIcon />,
    title: 'Address',
    content: '227 Bowery, New York, NY 10002',
    link: 'https://maps.google.com/?q=227+Bowery+New+York+NY',
  },
];

const inquiryTypes = [
  'General Inquiry',
  'Partnership Opportunity',
  'Employer Registration',
  'Technical Support',
  'Media Inquiry',
  'Other',
];

export default function ContactPage() {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the form data to a server
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    setFormData({
      name: '',
      email: '',
      organization: '',
      inquiryType: '',
      message: '',
    });
  };

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
              label="Contact"
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
              Get in Touch
            </Typography>
            <Typography
              variant="h5"
              sx={{
                maxWidth: 600,
                mx: 'auto',
                opacity: 0.9,
              }}
            >
              Whether you're an employer, partner organization, or someone 
              seeking help, we're here to assist you.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Contact Form Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={7}>
              <Typography variant="h3" sx={{ mb: 4, fontWeight: 700 }}>
                Send Us a Message
              </Typography>
              
              {showSuccess && (
                <Alert severity="success" sx={{ mb: 3 }}>
                  Thank you for your message! We'll get back to you soon.
                </Alert>
              )}

              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Organization (Optional)"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      select
                      label="Inquiry Type"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    >
                      {inquiryTypes.map((type) => (
                        <MenuItem key={type} value={type}>
                          {type}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid container>
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      multiline
                      rows={6}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid container>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      endIcon={<SendIcon />}
                      sx={{ minWidth: 200 }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>

            <Grid item xs={12} md={5}>
              <Box sx={{ position: 'sticky', top: 100 }}>
                <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
                  Contact Information
                </Typography>
                
                <Stack spacing={3}>
                  {contactInfo.map((info) => (
                    <Card key={info.title} elevation={0}>
                      <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                          <Avatar
                            sx={{
                              backgroundColor: alpha(theme.palette.primary.main, 0.1),
                              color: theme.palette.primary.main,
                            }}
                          >
                            {info.icon}
                          </Avatar>
                          <Box>
                            <Typography variant="h6" sx={{ mb: 0.5, fontWeight: 600 }}>
                              {info.title}
                            </Typography>
                            <Typography
                              component="a"
                              href={info.link}
                              target={info.title === 'Address' ? '_blank' : undefined}
                              sx={{
                                color: theme.palette.text.secondary,
                                textDecoration: 'none',
                                '&:hover': {
                                  color: theme.palette.primary.main,
                                  textDecoration: 'underline',
                                },
                              }}
                            >
                              {info.content}
                            </Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  ))}
                </Stack>

                <Box sx={{ mt: 4, p: 3, backgroundColor: theme.palette.grey[50], borderRadius: 2 }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    For Immediate Assistance
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    If you're experiencing homelessness and need immediate help:
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    Visit The Bowery Mission
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    227 Bowery, New York, NY 10002
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Open 24/7 for emergency assistance
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Partner CTA Section */}
      <Box
        sx={{
          py: 8,
          backgroundColor: theme.palette.grey[50],
        }}
      >
        <Container maxWidth="md">
          <Card elevation={0}>
            <CardContent sx={{ p: { xs: 4, md: 6 }, textAlign: 'center' }}>
              <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
                Become a Partner Employer
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                Join hundreds of employers who are making a difference by providing 
                second-chance employment opportunities.
              </Typography>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                justifyContent="center"
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => {
                    setFormData({
                      ...formData,
                      inquiryType: 'Employer Registration',
                    });
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Register Your Company
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  href="/about"
                >
                  Learn More
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Container>
      </Box>

      <Footer />
    </>
  );
}