import { Box, Container, Typography } from '@mui/material'
import { Metadata } from '@redwoodjs/web'
import mascarcareLogo from 'public/mascarcarelogo.png'

const AboutPage = () => {
  return (
    <>
      <Metadata title="Hakkımızda" description="Hakkımızda sayfası" />
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
            Mas Car Care Araç Bakımında Lider Teknoloji
          </Typography>
          <Typography sx={{ color: 'white', opacity: 0.85, textAlign: 'center', maxWidth: 600 }}>
           MAS Car Care olarak 2010 yılından bu güne kadar siz değerli müşterilerimize ve en iyi yol arkadaşımız olan araçlarımıza hak ettiği kaliteyi ve hizmeti sunmuş, sürekli markamızı geliştirerek sizlere hizmet vermeye devam etmekteyiz. Kalitemizle sektördeki yerimizi ön sıralarda almanın gururunu yaşarken, müşterilerimizi hizmetlerimiz ile memnun etmenin mutluluğunu da yaşamaktayız. "Önceliğimiz müşterilerimizin memnuniyetidir" sloganımızla çıktığımız bu yolda, hızla değişen ve gelişen bilgi ve teknoloji çağında değişmeyen tek anlayışımız bu oldu. Her gün kullandığımız araçlarımızı, iş makinelerimizi uzun ömürlü ve daha ekonomik seviyelerde kullanabilmenin avantajlarını sizlere sunuyoruz. Yüksek kaliteli ürünlerimizin bağımsız üreticisi olan Hollanda ARDINA Car Care BV, otomotiv kimyasalları, akaryakıt ve motor yağı katkı maddeleri, soğutma sistemi ve araç bakım ürünlerinde uluslararası şirketlerin güvenilir bir ortağıdır. MAS Car Care olarak, ARDINA Car Care BV markasının Türkiye Distribütörü olmak bizlere ayrıca gurur vermektedir.
          </Typography>
          <Typography variant="h3" sx={{ color: 'white', fontWeight: 900, mb: 4, mt:10, textAlign: 'center' }}>
            İNOVASYON
          </Typography>
          <Typography sx={{ color: 'white', opacity: 0.85, textAlign: 'center', maxWidth: 600 }}>
            Ardina Car Care BV, otomotiv pazarındaki gelişmelerle önde gelen otomobil üreticileri, motorlarının verimliliğini arttırmak için yeni bir teknolojiyi pazara sunduklarında Ardina ürünlerinin bu yeni teknolojiye uygun olup olmadığını görmek için, yeni gelişmeleri izler veya gerekirse yeni bir ürün geliştirmeye başlar. Ardina Car Care BV, tanınmış diğer otomotiv kimyasalları ve markalarının aksine, büyük bir deneyime sahiptir. Bu şekilde müşterilerine, tamamen özelleştirilmiş ve gereksinimlerine uygun benzersiz ürünler sunmaktadır. Ardina Car Care ürünleri çevre dostudur. Bu nedenle Ardina Car Care ürünleri kalitesini ve etkinliğini düşürmeden zararsız kimyasallar kullanarak ürünlerini hazırlar. Bu sayede gelecek nesiller için çevremizi daha yeşil ve sağlıklı tutmayı amaçlar.
          </Typography>
          <Typography variant="h3" sx={{ color: 'white', fontWeight: 900, mb: 4, mt:10, textAlign: 'center' }}>
            Kalite
          </Typography>
          <Typography sx={{ color: 'white', opacity: 0.85, textAlign: 'center', maxWidth: 600 }}>
            MAS Car Care, Ardina Car Care ürünlerini Türkiye pazarına sunarken mükemmel fiyat/kalite dengesini bozmadan her zaman elde edilebilecek en yüksek kaliteyi hedeflemektedir. Kalıcı kalite kontrol prosedürleri sayesinde, tüm süreçlerin yüksek ISO 9001:2015 standartlarına uygun olmasını sağlıyoruz. Ürünlerimiz Hollanda'da üretilmekte olup, ürünlerimizin tamamı AB menşelidir. Ürünülerimizin AB direktiflerine tam uyumlu olduğu anlamına gelmektedir. Bu aynı zamanda tüm ürünlerimizin birden fazla ülke etiketlerine sahip olduğu ve metrik hacimler kullanıldığı anlamına gelmektedir. Yanlızca motor ömrünü uzatan veya yakıt ekonomisi sağlayan ürünler sunmakla kalmıyoruz, aynı zamanda katkı maddelerinin motor performansını arttıracağını ve fosil yakıtlarla çalışan motorları kullanırken atmosfere salınan karbon emisyonlarını azaltıcağını da garanti ediyoruz.
          </Typography>
          <Typography variant="h3" sx={{ color: 'white', fontWeight: 900, mb: 4, mt:10, textAlign: 'center' }}>
            Hizmet
          </Typography>
          <Typography sx={{ color: 'white', opacity: 0.85, textAlign: 'center', maxWidth: 600 }}>
            MAS Car Care olarak, tenkik konularda sürekli destek vererek müşterilerimize mümkün olan en iyi hizmeti sunuyoruz. Müşterilerimizin sorunlarını çözümlemede yardımcı olmakla birlikte sorunları çözüyor, hatta sorunların oluşmasını engelleyecek ürünler tavsiye ediyoruz.
          </Typography>
        </Container>
      </Box>
    </>
  )
}

export default AboutPage
