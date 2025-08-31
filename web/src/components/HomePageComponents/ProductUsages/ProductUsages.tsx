import { Box, Container, Typography, Grid, Button } from "@mui/material"
import { Link } from "@redwoodjs/router"
import Reveal from "src/components/Reveal"

const products = [
	{
		title: "DPF, BPF, KATALİZÖR, EGR, TURBO, MANİFOLD TEMİZLEYİCİ 68334",
		description:
			"Turboşarz'lı ve turboşarz'sız tüm benzinli, lpg'li ve dizel motorlarda güvenle kullanılır.",
		image: "/asd.png", // örnek görsel yolu, kendi görsellerinizi ekleyin
		button: {
			label: "ÜRÜNÜ KEŞFET",
			to: "/products/q2-ceramic",
		},
	}
	
]

const ProductUsages = () => {
	return (
		<Box
			component="section"
			sx={{ py: { xs: 10, md: 4 }, background: "#eaf2fb" }}
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
							sx={{ position: 'relative', minHeight: { md: 640 } }}
						>
							{/* Background image on right side with animated Reveal */}
							<Reveal y={1} delay={0.04}>
								<Box
									sx={{
										position: 'absolute',
										top: 0,
										right: 0,
										bottom: 0,
										width: { xs: '100%', md: 1215 }, // 1.5x previous md width (810 * 1.5)
										height: { xs: 640, md: '100%' },
										zIndex: 0,
										display: { xs: 'none', md: 'block' },
										background: `url(${product.image}) no-repeat right center`,
										backgroundSize: 'contain',
										opacity: 1,
										pointerEvents: 'none',
										transition: 'transform 0.8s cubic-bezier(0.4,0,0.2,1)',
									}}
								/>
							</Reveal>
							{/* Left column: Text & Button */}
							<Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
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
							{/* Right column: Image for mobile only */}
							<Grid item xs={12} md={6} sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', alignItems: 'center', zIndex: 1 }}>
								<Reveal y={18} delay={0.08}>
									<Box
										component="img"
										src={product.image}
										alt={product.title}
										sx={{
											width: { xs: "100%", md: 380 },
											maxWidth: "80%",
											maxHeight: "%80",
											borderRadius: 4,
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
