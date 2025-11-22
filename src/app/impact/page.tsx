'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { HeartHandshake, Users, Target, ArrowRight, Sprout } from 'lucide-react';

const pillars = [
	{
		icon: HeartHandshake,
		title: 'Women’s economic empowerment',
		description:
			'Supporting female agripreneurs with tailored financing, training, and market access.',
	},
	{
		icon: Users,
		title: 'Youth mentorship',
		description:
			'Preparing the next generation of agritech leaders through career coaching and internships.',
	},
	{
		icon: Sprout,
		title: 'Sustainable farming',
		description:
			'Championing regenerative rice production and climate-smart practices across partner farms.',
	},
];

const impactStats = [
	{ value: '500+', label: 'Farmer households empowered' },
	{ value: '65%', label: 'Programme participants are women' },
	{ value: '12', label: 'Districts served across Ghana' },
];

const stories = [
	{
		title: 'Empowered by Jireh-Aidoo',
		subtitle: 'Driving inclusive entrepreneurship',
		description:
			'We equip women-owned farming enterprises with the tools to scale—providing mechanisation access, agronomy coaching, financing guidance, and product development support.',
		image: '/pics/IMG-20250315-WA0030.jpg',
		highlights: [
			'Mechanisation support & training',
			'Business planning & cooperative development',
			'Access to market linkages',
		],    cd "D:\All Programming Project Folder\KR-website"
    git status --porcelain
    # If there are changes:
    git add -A
    git commit -m "chore: save workspace changes"
    git push origin main --set-upstream
    # If there are no changes:
    git pull --ff-only origin main
    git push origin main
	},
	{
		title: 'Read by Jireh-Aidoo',
		subtitle: 'Fueling literacy & leadership',
		description:
			'Our literacy programme cultivates curiosity in young minds through reading clubs, mentorship, and digital skills that prepare students for agri-innovation careers.',
		image: '/pics/IMG-20250315-WA0015.jpg',
		highlights: [
			'Mobile library hubs',
			'Mentorship from agribusiness professionals',
			'STEM and agritech learning labs',
		],
	},
];

const sdgAlignment = [
	{
		goal: 'SDG 1 · No Poverty',
		description:
			'Income diversification, savings groups, and reliable off-take contracts increase household resilience.',
	},
	{
		goal: 'SDG 4 · Quality Education',
		description:
			'Literacy clinics and digital learning create pathways for youth to thrive in modern agriculture.',
	},
	{
		goal: 'SDG 5 · Gender Equality',
		description:
			'Women-led agribusiness mentorship and leadership incubators accelerate equitable growth.',
	},
	{
		goal: 'SDG 12 · Responsible Consumption & Production',
		description:
			'Regenerative farming practices and traceable supply chains protect Ghana’s natural resources.',
	},
];

export default function ImpactPage() {
	return (
		<div className="space-y-20 pb-20">
			<section className="relative overflow-hidden">
				<div className="absolute inset-0" aria-hidden="true">
					<Image
						src="/pics/IMG-20250315-WA0026.jpg"
						alt="Kyidom community impact"
						fill
						className="object-cover"
						priority
					/>
					<div className="absolute inset-0 bg-brown-900/80" />
				</div>
				<div className="relative container grid gap-10 px-4 py-24 lg:grid-cols-[1.1fr,0.9fr] text-white">
					<div>
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="max-w-3xl font-display text-4xl font-semibold md:text-6xl"
						>
							Empowering communities across Ghana’s rice belt
						</motion.h1>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
							className="mt-6 max-w-2xl text-lg text-white/80"
						>
							Kyidom Foods invests in women, youth, and farming households
							through programmes that combine agronomy, education, and
							entrepreneurship.
						</motion.p>
						<div className="mt-10 grid gap-4 sm:grid-cols-3">
							{impactStats.map((stat) => (
								<div
									key={stat.label}
									className="rounded-2xl bg-white/10 p-4 text-center"
								>
									<p className="text-2xl font-semibold text-gold-300">
										{stat.value}
									</p>
									<p className="text-xs font-semibold uppercase tracking-wide text-white/80">
										{stat.label}
									</p>
								</div>
							))}
						</div>
					</div>
					<div className="card-surface bg-white/95 p-8 text-brown-900">
						<h2 className="text-lg font-semibold">Our approach</h2>
						<ul className="mt-5 space-y-3 text-sm text-brown-700">
							<li>• Community-led programme design and feedback loops</li>
							<li>• Partnerships with schools, cooperatives, and local leaders</li>
							<li>• Data-driven impact tracking and transparent reporting</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="container px-4">
				<h2 className="section-title text-center">
					What impact means to Kyidom
				</h2>
				<p className="section-subtitle mx-auto mt-4 max-w-3xl text-center">
					Beyond premium rice, we nurture resilient livelihoods, elevate
					literacy, and cultivate a thriving agrifood ecosystem.
				</p>
				<div className="mt-12 grid gap-8 md:grid-cols-3">
					{pillars.map(
						({ icon: Icon, title, description }, index) => (
							<motion.article
								key={title}
								initial={{ opacity: 0, y: 25 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.08 }}
								viewport={{ once: true }}
								className="card-surface p-6"
							>
								<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/15 text-gold-600">
									<Icon className="h-6 w-6" aria-hidden="true" />
								</div>
								<h3 className="text-lg font-semibold text-brown-900">
									{title}
								</h3>
								<p className="mt-3 text-sm text-brown-600">
									{description}
								</p>
							</motion.article>
						)
					)}
				</div>
			</section>

			{stories.map((story, index) => (
				<section
					key={story.title}
					className={`${
						index % 2 === 1 ? 'bg-amber-50' : 'bg-white'
					} py-16`}
				>
					<div className="container grid gap-10 px-4 lg:grid-cols-[1fr,1fr] lg:items-center">
						<div
							className={`${
								index % 2 === 1 ? 'lg:order-2' : ''
							} card-surface p-8`}
						>
							<span className="text-xs font-semibold uppercase tracking-wide text-gold-600">
								{story.subtitle}
							</span>
							<h3 className="mt-3 text-2xl font-semibold text-brown-900">
								{story.title}
							</h3>
							<p className="mt-4 text-sm text-brown-600">
								{story.description}
							</p>
							<ul className="mt-5 space-y-2 text-sm text-brown-600">
								{story.highlights.map((item) => (
									<li key={item}>• {item}</li>
								))}
							</ul>
						</div>
						<div
							className={`${
								index % 2 === 1 ? 'lg:order-1' : ''
							} relative min-h-[320px] overflow-hidden rounded-3xl`}
						>
							<Image
								src={story.image}
								alt={story.title}
								fill
								className="object-cover"
							/>
							<div className="absolute inset-0 bg-brown-900/15" />
						</div>
					</div>
				</section>
			))}

			<section className="container grid gap-10 px-4 py-16 lg:grid-cols-[1fr,0.9fr]">
				<div className="space-y-6">
					<h2 className="section-title text-white">
						Community mobilisation
					</h2>
					<p className="section-subtitle">
						From farmer co-ops to urban markets, we partner with grassroots
						leaders to expand access to agritech, finance, and nutrition.
					</p>
					<div className="grid gap-4 md:grid-cols-2">
						<div className="rounded-2xl border border-white/15 bg-white/10 p-5 text-sm text-white/80">
							<p className="font-semibold text-white">Farm advisory hubs</p>
							<p className="mt-2">
								Local centres providing soil testing, input access, and
								regenerative farming guidance.
							</p>
						</div>
						<div className="rounded-2xl border border-white/15 bg-white/10 p-5 text-sm text-white/80">
							<p className="font-semibold text-white">Youth leadership labs</p>
							<p className="mt-2">
								Mentorship programmes helping students explore agribusiness,
								STEM, and entrepreneurship.
							</p>
						</div>
					</div>
				</div>
				<div className="card-surface relative min-h-[360px] overflow-hidden">
					<Image
						src="/pics/IMG-20250315-WA0035.jpg"
					