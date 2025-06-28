import { useEffect } from "react";
import { Code2, Home, Layout, RefreshCcw } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Services page styled for a **dark‑background** site.
 * Uses Tailwind only – no shadcn/ui.
 */
export default function ServicesPage() {
	// Load Stripe buy‑button script once per SPA session
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://js.stripe.com/v3/buy-button.js";
		script.async = true;
		document.body.appendChild(script);
		return () => {
			document.body.removeChild(script);
		};
	}, []);

	const services = [
		{
			title: "WordPress Website Design",
			description:
				"Custom, responsive WordPress sites that balance aesthetics, performance, and SEO best practices.",
			Icon: Layout,
		},
		{
			title: "WordPress Maintenance",
			description:
				"Ongoing updates, backups, security hardening, and performance tuning to keep your site healthy.",
			Icon: RefreshCcw,
		},
		{
			title: "Full-Stack Web Applications",
			description:
				"Robust React / Next.js apps with scalable back-ends, APIs, and cloud-native deployment.",
			Icon: Code2,
		},
	];

	return (
		<section className="w-full  text-gray-100">
			{/* Hero */}
			<Link
				to="/"
				className="mx-auto mt-6 inline-flex items-center gap-2 rounded-lg
               bg-indigo-600 px-6 py-3 text-base font-medium text-white
               shadow hover:bg-indigo-500 focus:outline-none focus:ring-2
               focus:ring-indigo-400">
				<Home className="h-5 w-5" />
				Home
			</Link>
			<div className="container mx-auto max-w-6xl px-4 py-20 text-center">
				<h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
					Nourish&nbsp;Consulting
				</h1>
				<p className="mx-auto mt-4 max-w-3xl text-xl font-light text-gray-400">
					Elevate&nbsp;your&nbsp;business with our expert services
				</p>
				<p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
					From full‑stack development to ongoing support, we provide everything
					you need to launch, scale, and maintain high‑quality digital products.
				</p>
			</div>

			{/* Services grid */}
			<div className="container mx-auto max-w-6xl grid gap-6 px-4 pb-20 md:grid-cols-2 lg:grid-cols-3">
				{services.map(({ title, description, Icon }) => (
					<div
						key={title}
						className="group relative overflow-hidden rounded-2xl border border-gray-700 bg-gray-800 p-6 shadow-md transition hover:border-indigo-500/80 hover:shadow-indigo-500/20">
						<span className="mb-4 inline-flex rounded-full bg-indigo-700/20 p-3 transition group-hover:bg-indigo-600/30">
							<Icon className="h-6 w-6 text-indigo-400" />
						</span>
						<h3 className="text-lg font-semibold text-white">{title}</h3>
						<p className="mt-2 text-sm text-gray-400">{description}</p>
					</div>
				))}
			</div>

			{/* CTA */}
			<div className="container mx-auto max-w-xl px-4 pb-24">
				<div className="rounded-2xl border border-gray-700 bg-gray-800 p-10 shadow-lg">
					<h2 className="mb-4 text-center text-2xl font-bold text-white">
						Premium Website Design and Development
					</h2>
					<p className="mx-auto mb-8 max-w-md text-center text-gray-400">
						Unlock the full potential of your website with our premium services.
					</p>

					<div className="mx-auto mb-6 flex w-full max-w-xs justify-center">
						<stripe-buy-button
							buy-button-id="buy_btn_1Rf5JkDz21Lz2dZm2UaiPLgM"
							publishable-key="pk_live_51Rf5EcDz21Lz2dZmr6RhRjozz809d7pgkzBcXf6B2O075GDjAuQhlqJAqRlEAzNO9G1Gld5wOnauQ9wtdPdZvVPw00wBLZafyo"></stripe-buy-button>
					</div>
				</div>
			</div>
			<div className="container mx-auto max-w-xl px-4 pb-24">
				<div className="rounded-2xl border border-gray-700 bg-gray-800 p-10 shadow-lg">
					<div className="mx-auto mt-6 mb-6 flex w-full max-w-xs justify-center">
						<stripe-buy-button
							buy-button-id="buy_btn_1Rf5eiDz21Lz2dZmoKVjN0km"
							publishable-key="pk_live_51Rf5EcDz21Lz2dZmr6RhRjozz809d7pgkzBcXf6B2O075GDjAuQhlqJAqRlEAzNO9G1Gld5wOnauQ9wtdPdZvVPw00wBLZafyo"></stripe-buy-button>
					</div>
				</div>
			</div>
		</section>
	);
}
