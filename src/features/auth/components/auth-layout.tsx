import classes from "./auth-layout.module.css";

type Props = {
    title: string,
    desc: string,
    form: React.ReactNode,
    footerText: React.ReactNode,
}

export default function AuthLayout({ title, form, footerText, desc }: Props) {
    return <section className={classes.container}>
        <h2 className={classes.title}>{title}</h2>
        <p>{desc}</p>

        {form}

        <p className={classes.footer}>
            {footerText}
        </p>
    </section>
}