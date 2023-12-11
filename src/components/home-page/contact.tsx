import Marquee from 'react-fast-marquee';
import React from 'react';

const Contact = () => {
	return (
		<section className="my-16">
			<Marquee
				gradient={ false }
				autoFill
				pauseOnHover
			>
				<a
					href="mailto:contact@axelcode.be"
					rel="noreferrer"
					target="_blank"
				>
					<h2 className="text-[96px] uppercase px-32 text-title font-semibold">Contact Me</h2>
				</a>
			</Marquee>
		</section>
	);
};

export default Contact;