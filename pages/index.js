import Head from 'next/head'
// TODO: head

import Api from '../components/api'
import Container from '../components/container'
import Footer from '../components/footer'
import GlobalStyles from '../components/global-styles'
import Header from '../components/header'
import Join from '../components/join'
import Preview from '../components/preview'
import Section from '../components/section'
import SectionHeader from '../components/section-header'
import Start from '../components/start'
import Watch from '../components/watch'
import YoullLearn from '../components/youll-learn'

export default _ =>
  <div>
    <GlobalStyles />
    <Head>
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Container>
      <Header />
      <Section>
        <SectionHeader>Things you'll learn</SectionHeader>
        <YoullLearn />
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
