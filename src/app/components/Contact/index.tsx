"use client";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import Link from "next/link";
import { FormEvent } from "react";

export default function Contact() {
	const handleClick = () => {
		const scriptURL =
			"https://script.google.com/macros/s/AKfycbxk5wFU7JdMUY-BoHAQeMZQ9gp3dl0U2-gMl0cdm1AYlC-Pf642oRXti-hwKmThRDs/exec";
		const form = document.forms["contact-form"];

		form.addEventListener("submit", (e: FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			fetch(scriptURL, { method: "POST", body: new FormData(form) })
				.then((response) => {
					form.reset();
				})
				.catch((error) => console.error("Error!", error.message));
		});
	};

	return (
		<>
			<div id="contact"></div>
			<section className="container p-5 mx-auto mt-20 overflow-hidden lg:max-w-4xl">
				<h1 className="text-2xl font-bold text-center mb-10">CONTACT</h1>
				<div className="w-full shadow-lg border border-slate-700/10 rounded-md">
					<div className="flex flex-col justify-center items-center gap-10 p-5 bg-slate-50 text-center">
						<h2 className="text-xl font-semibold ">Let&apos;s get in touch</h2>
						<div className="flex flex-col gap-2">
							<div className="flex items-center gap-2">
								<FaLocationDot size={20} />
								<p>Citra Garden 3, Kalideres, West Jakarta</p>
							</div>
							<div className="flex items-center gap-2">
								<MdEmail size={20} />
								<p>sonywijayalim@gmail.com</p>
							</div>
							<div className="flex items-center gap-2">
								<FaPhoneVolume size={20} />
								<p>+6283873803247</p>
							</div>
						</div>
						<div className="flex flex-col gap-1">
							<h3>Social Media</h3>
							<div className="flex gap-1">
								<Link
									href="https://github.com/lebahkayu"
									target="_blank"
									className="flex gap-1 items-center p-3 text-white bg-black border rounded-md transition cursor-pointer hover:bg-transparent hover:border-black hover:text-black"
								>
									<FiGithub size={20} />
									GitHub
								</Link>
								{/* <Link
									href="https://instagram.com/einmanns_"
									target="_blank"
									className="flex gap-1 items-center p-3 text-white bg-black border rounded-md transition cursor-pointer hover:bg-transparent hover:border-black hover:text-black"
								>
									<FaInstagram size={20} />
									Instagram
								</Link> */}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
