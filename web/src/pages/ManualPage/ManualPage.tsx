// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

// ...existing code...

import { Box, Container, Typography, Divider } from '@mui/material';
import mascarcareLogo from 'public/mascarcarelogo.png';

const ManualPage = () => {
  return (
    <>
      <Metadata title="Kullanım Talimatı" description="Ürün kullanım talimatları ve uygulama rehberi" />
      <Box sx={{
        background: 'linear-gradient(135deg, #1a237e 60%,rgb(209, 203, 203) 100%)',
        minHeight: '100vh',
        py: 14,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* SVG racing lines background */}
        <Box sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
          <svg width="100%" height="100%" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.18 }}>
            <linearGradient id="racingLine" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fff" stopOpacity="0.7" />
              <stop offset="1" stopColor="#1a237e" stopOpacity="0.1" />
            </linearGradient>
            <path d="M0,80 Q720,0 1440,80" stroke="url(#racingLine)" strokeWidth="8" strokeLinecap="round" fill="none" />
            <path d="M0,200 Q720,120 1440,200" stroke="url(#racingLine)" strokeWidth="6" strokeLinecap="round" fill="none" />
            <path d="M0,320 Q720,240 1440,320" stroke="url(#racingLine)" strokeWidth="4" strokeLinecap="round" fill="none" />
          </svg>
        </Box>
        <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <Box sx={{ mb: 6 }}>
            <img src={mascarcareLogo} alt="MasCarCare Logo" style={{ width: 180, display: 'block', margin: '0 auto' }} />
          </Box>
          <Typography variant="h3" sx={{ color: 'white', fontWeight: 900, mb: 4, textAlign: 'center' }}>
            ARDİNA Ürün Kullanım Talimatı
          </Typography>
          <Typography sx={{ color: 'white', opacity: 0.85, textAlign: 'center', maxWidth: 700, mb: 4 }}>
            Dizel ve benzinli araçlarda DPF, BPF, Katalizör, EGR, Turbo ve Emme Manifoldu sistem temizleyici ürünümüzün kullanım talimatları aşağıda detaylı olarak sunulmuştur. Lütfen uygulamaları bir uzman usta tarafından yaptırınız.
          </Typography>
          <Divider sx={{ bgcolor: 'white', opacity: 0.3, my: 4, width: '80%' }} />
          <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, mb: 2, textAlign: 'center' }}>
            Ürün Özellikleri ve Faydaları
          </Typography>
          <Box sx={{ color: 'white', opacity: 0.85, mb: 4, fontSize: 18, maxWidth: 700 }}>
            <ul style={{ paddingLeft: 20 }}>
              <li>Turbo şarjlı ve şarjsız dizel, benzinli ve LPG’li tüm motorlarda güvenle kullanılır.</li>
              <li>DPF, BPF ve katalizör filtreyi sökmeden garantili çözüm sunar.</li>
              <li>Emme manifoldu, silindir kapağı, subaplar, EGR, turbo, gaz kelebeği ve yanma odasını lak, katran, kurum ve benzeri zararlı bileşenlerden etkili şekilde temizler.</li>
              <li>Katalizör ve DPF gibi hassas motor parçalarının ömrünü uzatır.</li>
              <li>Oksijen sensörü ve LPG’li araçlarda motor arıza uyarı problemlerini çözer.</li>
              <li>Zararlı emisyonları azaltır, motor performansını artırır, yakıt ekonomisi sağlar.</li>
            </ul>
          </Box>
          <Divider sx={{ bgcolor: 'white', opacity: 0.3, my: 4, width: '80%' }} />
          <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, mb: 2, textAlign: 'center' }}>
            DPF, BPF ve Katalizör Temizliği Nasıl Yapılır?
          </Typography>
          <Typography sx={{ color: 'white', opacity: 0.85, mb: 4, fontSize: 18, maxWidth: 700 }}>
            Motor soğukken katalizör veya DPF/BPF giriş müşürü sökülerek 400 ml (1 kutu) temizleyici filtrenin içerisine sıkılır. Yeni nesil araçlarda birden fazla katalizör ve partikül filtre bulunabilir, bu durumda 1,5-2 kutu ürün kullanılır. Sensörler neme ve ıslağa karşı hassas olduğundan işlem bitene kadar sensör hortumu ve oksijen sensörü soketi sökülmelidir. Ürün, filtrenin giriş ve çıkış noktalarından uygulanır. Araç çalıştırılıp 2500 devirde 1.5-2 dakika çalıştırılır, egzozdan yoğun koku/duman gelene kadar devam edilir. Araç stop edilip 1 saat bekletilir. Sonrasında 10-15 km, 3000-3500 devirde yol sürüşü yapılır. Araç bilgisayarına bağlanıp arıza kayıtları silinir ve DPF menüsünden yenileme yapılır. Gerekirse manuel veya cihazla rejenerasyon uygulanır.
          </Typography>
          <Divider sx={{ bgcolor: 'white', opacity: 0.3, my: 4, width: '80%' }} />
          <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, mb: 2, textAlign: 'center' }}>
            Emme Manifoldu, Silindir Kapağı, Subaplar, EGR, Turbo ve Bileşenlerin Temizliği
          </Typography>
          <Typography sx={{ color: 'white', opacity: 0.85, mb: 4, fontSize: 18, maxWidth: 700 }}>
            Motor sıcakken hava debimetre arkasından veya turbo girişinden hortum sökülerek 400 ml temizleme spreyi, 2000 sabit devirde kısa aralıklarla 10-12 defa uygulanır. Motor 2500 sabit devirde 15 saniye çalıştırılır, ardından tekrar 2000 devirde işlem tekrarlanır. Sprey bitene kadar devam edilir. Sonrasında 10-15 km yol sürüşü ile işlem tamamlanır. Bazı araçlarda aşırı kurum varsa, ürünün 1/3’ü hava akış metre arkasından, 2/3’ü manifold girişinden direkt verilir.
          </Typography>
          <Divider sx={{ bgcolor: 'white', opacity: 0.3, my: 4, width: '80%' }} />
          <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, mb: 2, textAlign: 'center' }}>
            Önemli Uyarılar ve Bilgiler
          </Typography>
          <Box sx={{ color: 'white', opacity: 0.85, mb: 4, fontSize: 18, maxWidth: 700 }}>
            <ul style={{ paddingLeft: 20 }}>
              <li>İşlemler mutlaka uzman usta tarafından yapılmalıdır.</li>
              <li>Sistem temizleme spreyi, sökülemeyen veya korozyona uğramış parçalarda 15-20 dakika bekletilerek güvenli söküm sağlar.</li>
              <li>Ürün yanıcı/parlayıcı değildir, solvent içermez. Dizel araçlarda motor çalışırken uygulama sırasında motor ambeleye kalkmaz.</li>
              <li>Son derece güvenli bir kullanıma sahiptir.</li>
              <li>Araç tesliminde bir hafta boyunca devirli kullanım tavsiye edilir.</li>
            </ul>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default ManualPage;
