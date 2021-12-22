import Head from 'next/head'
import ThemeToggle from '~/components/ThemeToggle'

const Home = (): JSX.Element => (
  <div>
    <Head>
      <title>Felix Kästner</title>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta
        data-hid="description"
        name="description"
        content="Felix Kästner. A software developer specialized in mobile and ubiquitous computing."
      />
      <meta data-hid="mobile-web-app-capable" name="mobile-web-app-capable" content="yes" />
      <meta
        data-hid="apple-mobile-web-app-title"
        name="apple-mobile-web-app-title"
        content="felix-kaestner.com"
      />
      <meta data-hid="author" name="author" content="Felix Kästner" />
      <meta data-hid="theme-color" name="theme-color" content="#03a9f4" />
      <meta data-hid="og:type" name="og:type" property="og:type" content="website" />
      <meta data-hid="og:title" name="og:title" property="og:title" content="felix-kaestner.com" />
      <meta
        data-hid="og:site_name"
        name="og:site_name"
        property="og:site_name"
        content="felix-kaestner.com"
      />
      <meta
        data-hid="og:description"
        name="og:description"
        property="og:description"
        content="Felix Kästner. A software developer specialized in mobile and ubiquitous computing."
      />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link
        rel="preload"
        href="/fonts/montserrat-v15-latin-300.woff2"
        as="font"
        type="font/woff2"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/montserrat-v15-latin-500.woff2"
        as="font"
        type="font/woff2"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/montserrat-v15-latin-600.woff2"
        as="font"
        type="font/woff2"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/montserrat-v15-latin-regular.woff2"
        as="font"
        type="font/woff2"
        crossOrigin=""
      />
    </Head>

    <ThemeToggle />

    <div className="container">
      <h1>Hi.</h1>
      <p className="subtitle">My name is Felix Kästner.</p>
      <div>
        <p>
          I am a software developer and solutions architect specialized in mobile and ubiquitous
          computing. I live in Dresden where I studied Computer Science at{' '}
          <a href="https://tu-dresden.de" rel="nofollow noopener noreferrer" target="_blank">
            Technische Universität Dresden
          </a>
          , receiving the academic title <i>Master of Science</i>.
        </p>

        <p>
          I work as a developer for the{' '}
          <a
            href="https://radverkehr-in-deutschland.de"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            RiDE
          </a>{' '}
          (previously{' '}
          <a href="https://www.movebis.org" rel="nofollow noopener noreferrer" target="_blank">
            Movebis
          </a>
          ) research project doing WebGL-powered data visualizations of large geographic datasets
          for traffic analysis. Besides, I currently work on developing mobile applications (mostly
          Android) together with my good friend{' '}
          <a href="https://philippmatth.es" rel="nofollow noopener noreferrer" target="_blank">
            Philipp Matthes
          </a>
          . We previously prototyped{' '}
          <a
            href="https://github.com/peerbridge"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            PeerBridge
          </a>{' '}
          an anonymous messenger based on Blockchain and DPoS. Additionally, we were rebuilding the{' '}
          <a href="https://output-dd.de" rel="nofollow noopener noreferrer" target="_blank">
            OUTPUT.DD
          </a>{' '}
          <a href="https://github.com/output-dd" rel="nofollow noopener noreferrer" target="_blank">
            Apps
          </a>
          .
        </p>
        <p>
          I was previously employed at{' '}
          <a href="https://markenzoo.de" rel="nofollow noopener noreferrer" target="_blank">
            MARKENZOO
          </a>
          , where I worked as a web developer, creating and maintaining a variety of different
          projects mainly focused around{' '}
          <a href="https://contao.org" rel="nofollow noopener noreferrer" target="_blank">
            Contao CMS
          </a>
          .
        </p>
        <p>
          If you find my work interesting, you might want to have a look at past conference talks at{' '}
          <a
            href="https://output-dd.de/projekte/"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            OUTPUT.DD 2021
          </a>{' '}
          together with{' '}
          <a href="https://philippmatth.es" rel="nofollow noopener noreferrer" target="_blank">
            Philipp Matthes
          </a>
          . We were hosting presentations on the topics of{' '}
          <a
            href="https://output-dd.de/blog/project-post/microservices-devops-und-containerisierung-im-cloud-computing/"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            &quot;Microservices, DevOps and Cloud Computing&quot;
          </a>
          (
          <a
            href="https://www.youtube.com/watch?v=QOMU53123Rc"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            YouTube
          </a>
          ) and{' '}
          <a
            href="https://output-dd.de/blog/project-post/kryptografie-in-messengern/"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            &quot;Cryptography in messengers&quot;
          </a>
          (
          <a
            href="https://www.youtube.com/watch?v=_o9YjtyxKbs"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            YouTube
          </a>
          ).
        </p>
        <p>
          I strive to learn new things and develop skills in a range of different areas. If you have
          an interesting project or want to ask me anything, you can reach out and send me a{' '}
          <a href="mailto:hello@felix-kaestner.com">mail</a>. You can also find me on{' '}
          <a
            href="https://twitter.com/kaestner_felix"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            Twitter
          </a>{' '}
          and{' '}
          <a
            href="https://www.linkedin.com/in/felix-kaestner"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          .
        </p>
        <p>
          I&apos;m currently accepting freelance work. You can contact me via{' '}
          <a
            href="mailto:hello@felix-kaestner.com"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            hello@felix-kaestner.com
          </a>
        </p>
        <p>Fun fact: I am the winner of the 1st Thuringian Computer Science Competition.</p>
      </div>
    </div>

    <style jsx>{`
      .container {
        padding: 5vh 10vw;
        display: flex;
        flex-direction: column;
      }

      .subtitle {
        font-size: 1.2em;
        padding-top: 0.75em;
        padding-bottom: 0.75em;
      }
    `}</style>
  </div>
)

export default Home
