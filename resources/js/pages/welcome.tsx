import { BentoCard } from '@/components/radiant/bento-card';
import { Button } from '@/components/radiant/button';
import { Container } from '@/components/radiant/container';
import { Footer } from '@/components/radiant/footer';
import { Gradient } from '@/components/radiant/gradient';
import { Keyboard } from '@/components/radiant/keyboard';
import { LogoCluster } from '@/components/radiant/logo-cluster';
import { Map } from '@/components/radiant/map';
import { Navbar } from '@/components/radiant/navbar';
import { Testimonials } from '@/components/radiant/testimonials';
import { Heading, Subheading } from '@/components/radiant/text';
import { cn } from '@/lib/utils';
import autoAnimate from '@formkit/auto-animate';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowBigRightIcon, StarIcon } from 'lucide-react';
import React from 'react';

export default function Welcome() {
    // const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="overflow-hidden">
                <Hero />
                <main>
                    <div className="mt-10 bg-linear-to-b from-white from-50% to-gray-100 py-32">
                        {/*<FeatureSection />*/}
                        <BentoSection />
                    </div>
                    {/*<DarkBentoSection />*/}
                </main>
                <Testimonials />
                <Footer />
            </div>
        </>
    );
}

function Hero() {
    return (
        <div className="relative">
            <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
            <Container className="relative">
                <Navbar
                // banner={
                // <Link
                //     href="/blog/radiant-raises-100m-series-a-from-tailwind-ventures"
                //     className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-fuchsia-950/30"
                // >
                //     Radiant raises $100M Series A from Tailwind Ventures
                //     <ChevronRightIcon className="size-4" />
                // </Link>
                // }
                />
                <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
                    <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
                        <span className={'text-brand-primary'}>Next</span>
                        <span className={'text-brand-secondary'}>Hop</span>
                    </h1>
                    <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">Make the next hop in your digital life.</p>
                    <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
                        <Button href="#">Get started</Button>
                        <Button variant="secondary" href="/pricing">
                            See pricing
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
}

// function FeatureSection() {
//     return (
//         <div className="overflow-hidden">
//             <Container className="pb-24">
//                 <Heading as="h2" className="max-w-3xl">
//                     A snapshot of your entire sales pipeline.
//                 </Heading>
//                 <Screenshot width={1216} height={768} src="/screenshots/app.png" className="mt-16 h-[36rem] sm:h-auto sm:w-[76rem]" />
//             </Container>
//         </div>
//     );
// }

function InboxItem({
    from,
    subject,
    preview,
    className,
    ...props
}: {
    from: React.ReactNode;
    subject: React.ReactNode;
    preview: React.ReactNode;
} & React.ComponentProps<'div'>) {
    return (
        <div className={cn('flex gap-2 px-3 py-2.5', className)} {...props}>
            <div>
                <div className={'mt-1 size-4 rounded border-[1.5px] border-gray-300'} />
            </div>
            <div className={'flex-1'}>
                <div className={'flex gap-2 font-bold'}>
                    <ArrowBigRightIcon className={'text-gray-300'} />
                    {from}
                </div>
                <div className={'flex gap-2 font-bold'}>{subject}</div>
                <div className={'text-gray-600'}>{preview}</div>
            </div>
            <div className={'flex flex-col items-end justify-around'}>
                <time className={'font-bold'}>12:47</time>
                <StarIcon className={'text-gray-300'} />
            </div>
        </div>
    );
}

function InboxCleanup() {
    const animatedContainer = React.useRef(null);

    React.useEffect(() => {
        if (animatedContainer.current) {
            autoAnimate(animatedContainer.current, {
                duration: 600,
                easing: 'ease-out',
            });
        }
    }, [animatedContainer]);

    const [messages, setMessages] = React.useState([
        { from: 'Random Company 1', subject: 'Yet another newsletter', preview: 'When did I even sign up for this?' },
        { from: 'Random Company 2', subject: 'Yet another newsletter', preview: 'When did I even sign up for this?' },
        { from: 'Random Company 3', subject: 'Yet another newsletter', preview: 'When did I even sign up for this?' },
    ]);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setMessages(([, ...messages]) => messages);
        }, 750);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className={'size-full rounded-xl bg-gray-50 px-4 py-6'}>
            {messages.length === 0 ? (
                <div className={'animate-in flex size-full items-center justify-center'}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
                        }}
                    >
                        <div className={'bg-brand-primary/80 rounded-full px-5 py-3 text-lg font-semibold text-white shadow'}>All tidy! 🎉</div>
                    </motion.div>
                </div>
            ) : (
                <div ref={animatedContainer} className={cn('h-full divide-y divide-gray-100', { hidden: !animatedContainer.current })}>
                    {messages.map((message, index) => (
                        <InboxItem key={index} {...message} />
                    ))}
                </div>
            )}
        </div>
    );
}

function BentoSection() {
    return (
        <Container>
            <Subheading>Services</Subheading>
            <Heading as="h3" className="mt-2 max-w-3xl">
                Take the NextHop in your digital life.
            </Heading>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
                <BentoCard
                    eyebrow="Small Businesses"
                    title="Get your name out there"
                    description="A (nice) business website, visibility on Google, and a custom email address can help your business stand out."
                    graphic={
                        <div className="h-80 bg-[url(/screenshots/profile.png)] bg-[size:1000px_560px] bg-[left_-109px_top_-112px] bg-no-repeat" />
                    }
                    fade={['bottom']}
                    className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
                />
                <BentoCard
                    eyebrow="Individuals"
                    title="Tidy up your digital world"
                    description="Empty your inbox, tidy your desktop, sync your devices and backup your precious data."
                    graphic={
                        <div className={'size-full overflow-hidden'}>
                            <InboxCleanup />
                        </div>
                    }
                    fade={['bottom']}
                    className="lg:col-span-3 lg:rounded-tr-4xl"
                />
                <BentoCard
                    eyebrow="Speed"
                    title="Built for power users"
                    description="It’s never been faster to cold email your entire contact list using our streamlined keyboard shortcuts."
                    graphic={
                        <div className="flex size-full pt-10 pl-10">
                            <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
                        </div>
                    }
                    className="lg:col-span-2 lg:rounded-bl-4xl"
                />
                <BentoCard
                    eyebrow="Source"
                    title="Get the furthest reach"
                    description="Bypass those inconvenient privacy laws to source leads from the most unexpected places."
                    graphic={<LogoCluster />}
                    className="lg:col-span-2"
                />
                <BentoCard
                    eyebrow="Limitless"
                    title="Sell globally"
                    description="Radiant helps you sell in locations currently under international embargo."
                    graphic={<Map />}
                    className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
                />
            </div>
        </Container>
    );
}

// function DarkBentoSection() {
//     return (
//         <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
//             <Container>
//                 <Subheading dark>Outreach</Subheading>
//                 <Heading as="h3" dark className="mt-2 max-w-3xl">
//                     Customer outreach has never been easier.
//                 </Heading>
//
//                 <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
//                     <BentoCard
//                         dark
//                         eyebrow="Networking"
//                         title="Sell at the speed of light"
//                         description="Our RadiantAI chat assistants analyze the sentiment of your conversations in real time, ensuring you're always one step ahead."
//                         graphic={<div className="h-80 bg-[url(/screenshots/networking.png)] bg-[size:851px_344px] bg-no-repeat" />}
//                         fade={['top']}
//                         className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
//                     />
//                     <BentoCard
//                         dark
//                         eyebrow="Integrations"
//                         title="Meet leads where they are"
//                         description="With thousands of integrations, no one will be able to escape your cold outreach."
//                         graphic={<LogoTimeline />}
//                         // `overflow-visible!` is needed to work around a Chrome bug that disables the mask on the graphic.
//                         className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
//                     />
//                     <BentoCard
//                         dark
//                         eyebrow="Meetings"
//                         title="Smart call scheduling"
//                         description="Automatically insert intro calls into your leads' calendars without their consent."
//                         graphic={<LinkedAvatars />}
//                         className="lg:col-span-2 lg:rounded-bl-4xl"
//                     />
//                     <BentoCard
//                         dark
//                         eyebrow="Engagement"
//                         title="Become a thought leader"
//                         description="RadiantAI automatically writes LinkedIn posts that relate current events to B2B sales, helping you build a reputation as a thought leader."
//                         graphic={<div className="h-80 bg-[url(/screenshots/engagement.png)] bg-[size:851px_344px] bg-no-repeat" />}
//                         fade={['top']}
//                         className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
//                     />
//                 </div>
//             </Container>
//         </div>
//     );
// }
