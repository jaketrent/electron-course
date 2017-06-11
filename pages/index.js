import Head from 'next/head'
// TODO: head

import Api from '../components/api'
import Container from '../components/container'
import Footer from '../components/footer'
import GlobalStyles from '../components/global-styles'
import Header from '../components/header'
import Learn from '../components/learn'
import Join from '../components/join'
import Preview from '../components/preview'
import Section from '../components/section'
import SectionHeader from '../components/section-header'
import Start from '../components/start'
import Watch from '../components/watch'

const now = _ => new Date().getFullYear()

export default _ =>
  <div>
    <GlobalStyles />

    <Head>
      <title>Electron Course | Jake Trent</title>
      <link
        rel="shortcut icon"
        type="image/png"
        href="/static/img/favicon.png"
      />

      <meta
        name="author"
        content="https://plus.google.com/115032056022257436849"
      />
      <meta
        name="description"
        content="Learn Electron in this project-based course."
      />
      <meta
        name="keywords"
        content="electron, electron.js, native desktop, javascript to native, learn electron, electron lesson, electron course"
      />
      <meta name="copyright" content={`${now()} Jake Trent`} />

      <meta property="og:title" content="Electron Course" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://electroncourse.com" />
      <meta
        property="og:description"
        content="Learn Electron in this project-based course."
      />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Learn Electron" />
      <meta
        name="twitter:description"
        content="Learn Electron in this project-based course."
      />
      <meta name="twitter:site" content="@jaketrent" />
      <meta name="twitter:creator" content="@jaketrent" />

      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link
        href="https://fonts.googleapis.com/css?family=Raleway:100,300"
        rel="stylesheet"
      />
    </Head>

    <Container>

      <Header />

      <Section>
        <SectionHeader>Things you'll learn</SectionHeader>
        <Learn />
      </Section>

      <Section>
        <SectionHeader>Catch a preview</SectionHeader>
        <Preview />
      </Section>

      <Section>
        <SectionHeader>Watch the course</SectionHeader>
        <Watch />
      </Section>

      <Section>
        <SectionHeader>Easy to get started</SectionHeader>
        <Start />
      </Section>

      <Section>
        <SectionHeader>Awesome APIs to try</SectionHeader>
        <Api />
      </Section>

      <Section>
        <SectionHeader>Join the fun</SectionHeader>
        <Join />
      </Section>

      <Footer />

    </Container>
  </div>
