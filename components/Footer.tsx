import Link from 'next/link'

type Props = {}

const Footer = (props: Props) => {
    return (
        <section className="bg-primary h-20 md:-px-32 md:rounded-b-lg text-extraLight flex items-center justify-center">
            <Link href={''}>Made with ❤️, Stress and Anxiety</Link>
        </section>
    )
}

export default Footer
