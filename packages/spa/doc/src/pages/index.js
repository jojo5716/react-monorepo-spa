import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
    {
        title: <>Miguel Angel Figuerola</>,
        imageUrl: 'https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/5b28d7adbe73de20759aa279/281b694e-4b9e-4970-80b9-5be92a8c82ab/128',
        description: (
            <>
				External Slave
				Functional Guru and Juggler
            </>
        ),
    },
    {
        title: <>Pablo Grillo</>,
        imageUrl: 'https://api.media.atlassian.com/file/4369be20-e02b-4110-b694-712ed64f3934/image?token=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI3MmMwYzM0OS0yYzEyLTRlMDctOGM3MS0yYTE1ODU5MWRmMGMiLCJhY2Nlc3MiOnsidXJuOmZpbGVzdG9yZTpmaWxlOjQzNjliZTIwLWUwMmItNDExMC1iNjk0LTcxMmVkNjRmMzkzNCI6WyJyZWFkIl19LCJleHAiOjE1OTYwMTg4NTYsIm5iZiI6MTU5NjAxNTc5Nn0.b6EKjQQizMA82kODH3xuHFVh2Raf0LvBIQq8gOs6x40&client=72c0c349-2c12-4e07-8c71-2a158591df0c&name=glitched-image.png&max-age=2940&width=150&height=150',
        description: (
            <>
				Mr. Creative mind
				Mcgiver 2.0
            </>
        ),
    },
];

function Feature({ imageUrl, title, description }) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={clsx('col col--6', styles.feature)}>
            {imgUrl && (
                <div className="text--center">
                    <img className={styles.featureImage} src={imgUrl} alt={title} />
                </div>
            )}
            <h3 className="text--center">{title}</h3>
            <p className="text--center">{description}</p>
        </div>
    );
}

function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    return (
        <Layout
            title={siteConfig.title}
            description="">
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className={clsx(
                                'button button--outline button--secondary button--lg',
                                styles.getStarted,
                            )}
                            to={useBaseUrl('docs/')}>
							Ir a la documentación
            			</Link>
                    </div>
                </div>
            </header>
            <main>
                {features && features.length > 0 && (
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {features.map((props, idx) => (
                                    <Feature key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </Layout>
    );
}

export default Home;
