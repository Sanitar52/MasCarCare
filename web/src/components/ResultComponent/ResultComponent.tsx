import { Box, Typography } from '@mui/material';

const ResultComponent = () => {
  return (
    <Box component="section" sx={{
      py: { xs: 8, md: 12 },
      background: 'linear-gradient(135deg, #fff 60%, #e3e6f5 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      mb: 0,
      minHeight: { xs: 400, md: 520 },
    }}>
      <Typography variant="h3" sx={{ fontWeight: 900, mb: 4, color: '#1a237e', textAlign: 'center' }}>
        Sonuç Ekranı:
      </Typography>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', mb: { xs: 4, md: 6 } }}>
        <Box component="img" src="/sonuc.png" alt="Sonuç Ekranı" sx={{ width: { xs: '95%', sm: 700, md: 900 }, maxWidth: 900, height: 'auto', borderRadius: 3, boxShadow: '0 4px 24px rgba(26,35,126,0.13)', background: 'rgba(255,255,255,0.12)', p: 1, objectFit: 'contain', display: 'block' }} />
      </Box>
      <Typography sx={{ color: '#1a237e', fontWeight: 700, textAlign: 'center', fontSize: 26, mb: 2 }}>
        Partikül Doluluk Oranı: %0
      </Typography>
      <Typography sx={{ color: '#1a237e', opacity: 0.85, textAlign: 'center', maxWidth: 700, fontSize: 18 }}>
        Bu ekran, videoda gösterilen işlemin ardından elde edilen DPF rejenerasyon sonuçlarını göstermektedir.
      </Typography>
    </Box>
  );
}

export default ResultComponent;
