import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Stack,
  IconButton,
  Divider,
  useTheme,
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
} from '@mui/icons-material';

const footerLinks = {
  product: [
    { label: 'Features', href: '/features' },
    { label: 'How It Works', href: '/about' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
  resources: [
    { label: 'Documentation', href: 'https://github.com/BoweryJG/BoweryConnect' },
    { label: 'Support', href: '/contact' },
    { label: 'FAQ', href: '#' },
    { label: 'Blog', href: '#' },
  ],
  organization: [
    { label: 'About Us', href: '/about' },
    { label: 'The Bowery Mission', href: 'https://www.bowery.org' },
    { label: 'Partners', href: '#' },
    { label: 'Careers', href: '#' },
  ],
};

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.grey[50],
        borderTop: `1px solid ${theme.palette.divider}`,
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: theme.palette.primary.main,
                mb: 2,
              }}
            >
              BoweryConnect
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Bridging the gap between homeless individuals and meaningful employment opportunities.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton
                href="https://github.com/BoweryJG/BoweryConnect"
                target="_blank"
                sx={{ color: theme.palette.text.secondary }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                href="mailto:support@boweryconnect.org"
                sx={{ color: theme.palette.text.secondary }}
              >
                <EmailIcon />
              </IconButton>
              <IconButton
                href="tel:+12122266214"
                sx={{ color: theme.palette.text.secondary }}
              >
                <PhoneIcon />
              </IconButton>
            </Stack>
          </Grid>

          <Grid item xs={12} md={8}>
            <Grid container spacing={4}>
              <Grid item xs={6} sm={4}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Product
                </Typography>
                <Stack spacing={1}>
                  {footerLinks.product.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      underline="hover"
                      color="text.secondary"
                      sx={{
                        transition: 'color 0.2s',
                        '&:hover': {
                          color: theme.palette.primary.main,
                        },
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Stack>
              </Grid>

              <Grid item xs={6} sm={4}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Resources
                </Typography>
                <Stack spacing={1}>
                  {footerLinks.resources.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      underline="hover"
                      color="text.secondary"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      sx={{
                        transition: 'color 0.2s',
                        '&:hover': {
                          color: theme.palette.primary.main,
                        },
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Stack>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Organization
                </Typography>
                <Stack spacing={1}>
                  {footerLinks.organization.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      underline="hover"
                      color="text.secondary"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      sx={{
                        transition: 'color 0.2s',
                        '&:hover': {
                          color: theme.palette.primary.main,
                        },
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', sm: 'flex-start' },
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} BoweryConnect. All rights reserved.
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ color: theme.palette.text.secondary }}
          >
            <LocationIcon fontSize="small" />
            <Typography variant="body2">
              227 Bowery, New York, NY 10002
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}