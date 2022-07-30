import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<div className="grid h-screen place-content-center">
			<h1 className="text-4xl font-bold">
				NextJs + Tailwind + DaisyUI template
			</h1>
			<p className="mt-4 text-2xl text-center">
				Starter template for building prototypes
			</p>
		</div>
	);
};

export default Home;
