import { Box, Container, Typography, Grid, Button } from "@mui/material"
import { Link } from "@redwoodjs/router"
import Reveal from "src/components/Reveal"

const products = [
	{
		title: "Q2 SERAMİK KAPLAMALAR",
		description:
			"Gelişmiş seramik bazlı ürünlerden oluşan kapsamlı bir seri. Q2 serisi, hem meraklılar hem de profesyonel detaycılar için yüksek teknoloji kaplamalar sunar.",
		image: "/q2-ceramic.webp", // örnek görsel yolu, kendi görsellerinizi ekleyin
		button: {
			label: "KAPLAMA KOLEKSİYONU",
			to: "/products/q2-ceramic",
		},
	},
	{
		title: "Q2 MOHS KAPLAMA",
		description:
			"Yüzey korumasında üstün performans ve dayanıklılık. MOHS kaplama, aracınızın parlaklığını ve korumasını maksimuma çıkarır.",
		image: "/q2-ceramic.webp",
		button: {
			label: "MOHS'U KEŞFET",
			to: "/products/q2-mohs",
		},
	},
	{
		title: "Q2 PURE KAPLAMA",
		description:
			"Saf SiO₂ teknolojisi ile uzun ömürlü ve etkili koruma. PURE kaplama, aracınızın yüzeyini çevresel etkilere karşı korur.",
		image: "/q2-ceramic.webp",
		button: {
			label: "PURE'U KEŞFET",
			to: "/products/q2-pure",
		},
	},
]

const ProductUsages = () => {
	return (
		<Box
			component="section"
			sx={{ py: { xs: 10, md: 10 }, background: "#eaf2fb" }}
		>
			<Container>
				<Grid container spacing={8}>
					{products.map((product, i) => (
						<Grid
							container
							item
							xs={12}
							key={product.title}
							alignItems="center"
						>
							{/* Left column: Text & Button */}
							<Grid item xs={12} md={6}>
								<Reveal y={18} delay={0.04}>
									<Typography
										variant="h3"
										sx={{ fontWeight: 900, mb: 2, color: "#323956" }}
									>
										{product.title}
									</Typography>
									<Typography
										sx={{ opacity: 0.85, mb: 4, color: "#323956" }}
									>
										{product.description}
									</Typography>
									<Button
										variant="outlined"
										component={Link}
										to={product.button.to}
										sx={{
											px: 4,
											py: 2,
											fontWeight: 800,
											fontSize: 18,
											color: "#323956",
											border: "2px solid #323956",
											background: "transparent",
											borderRadius: 0,
											boxShadow: "none",
											letterSpacing: 1,
											transition: "all 0.2s",
											"&:hover": {
												background: "#323956",
												color: "#fff",
												borderColor: "#323956",
											},
										}}
									>
										{product.button.label}
									</Button>
								</Reveal>
							</Grid>
							{/* Right column: Image */}
							<Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
								<Reveal y={18} delay={0.08}>
									<Box
										component="img"
										src={product.image}
										alt={product.title}
										sx={{
											width: { xs: "100%", md: 380 },
											maxWidth: "100%",
											borderRadius: 4,
											boxShadow: "0 4px 32px rgba(50,57,86,0.08)",
											background: "#fff",
											objectFit: "cover",
										}}
									/>
								</Reveal>
							</Grid>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	)
}

export default ProductUsages
