import { CurrencyDollarIcon, HomeIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

const landingPageImageURL = process.env.LANDING_PAGE_IMAGE_URL;

export default function Index() {
    return (
        <>
            <header className="bg-gray-800 shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-white flex items-center gap-2">
                    <HomeIcon className="h-8 w-8 text-fuchsia-500" />
                    Welcome to RentalAI</h1>
                </div>
            </header>
            <main className="bg-gray-800">
                <div className="mx-auto max-w-7xl py-5 sm:px-6 lg:px-8">
                    <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                        <svg
                            viewBox="0 0 1024 1024"
                            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                            aria-hidden="true"
                        >
                            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                                    fillOpacity="0.7"/>
                            <defs>
                                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                    <stop stopColor="#7775D6"/>
                                    <stop offset={1} stopColor="#E935C1"/>
                                </radialGradient>
                            </defs>
                        </svg>
                        <div
                            className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                            <h2 className="text-3xl font-bold tracking-tight text-fuchsia-700 sm:text-4xl">
                                Boost your rental search.
                                <span style={{ borderBottom: '1px solid white', display: 'block' }}></span>
                                Predict rent with ease.
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                Explore housing options and make accurate rent predictions, tailored to your preferences, using our advanced Machine Learning AI.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                <Link
                                    href="/predictions"
                                    className="rounded-md bg-gray-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-fuchsia-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Get started
                                </Link>
                                <Link href="/dashboard" className="text-sm font-semibold leading-6 text-white">
                                    Learn more <span aria-hidden="true">→</span>
                                </Link>
                            </div>
                        </div>
                        <div className="relative mt-16 h-80 lg:mt-8">
                            <Image
                                src={landingPageImageURL || '/images/landing-image.png'}
                                alt="App Icon"
                                width={1824}
                                height={1080}
                                className="absolute left-0 top-0 lg:w-[57rem] md:w-[47rem] sm:w-[37rem] lg:max-w-none"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
