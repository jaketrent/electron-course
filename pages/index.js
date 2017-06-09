import Head from 'next/head'
// TODO: head

import Container from '../components/container'
import GlobalStyles from '../components/global-styles'
import Header from '../components/header'
import Preview from '../components/preview'
import Section from '../components/section'
import SectionHeader from '../components/section-header'
import ToC from '../components/toc'

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
    <ToC.List>
      <ToC.Item href="https://app.pluralsight.com/player?course=electron-fundamentals&author=jake-trent&name=electron-fundamentals-m1&clip=0&mode=live"
                title="Learn About Electron"
                length="06:47">
        Determine what Electron is, where its sweet spot is, and what it's best at.  
      </ToC.Item>
  <ToC.Item href="https://app.pluralsight.com/player?course=electron-fundamentals&author=jake-trent&name=electron-fundamentals-m2&clip=0&mode=live"
title="Try Out Electron"
length="17:36">
  Get basic Electron setup running using all basic tech.  Introduce inter-process communication.
      </ToC.Item>
  <ToC.Item href="https://app.pluralsight.com/player?course=electron-fundamentals&author=jake-trent&name=electron-fundamentals-m3&clip=0&mode=live"
title="Experiment with Native APIs"
length="36:39">
  Learn highlight Electron APIs.  Use each in a small project.
  </ToC.Item>
  <ToC.Item href="https://app.pluralsight.com/player?course=electron-fundamentals&author=jake-trent&name=electron-fundamentals-m4&clip=0&mode=live"
title="Make an Electron App"
length="31:01">
  Combine your Electron skills in a fun and interesting project.
  </ToC.Item>
  <ToC.Item href="https://app.pluralsight.com/player?course=electron-fundamentals&author=jake-trent&name=electron-fundamentals-m5&clip=0&mode=live"
title="Package Native Apps"
length="17:36">
  Get your app ready for distribution.  Test on different operating systems.
  </ToC.Item>
  <ToC.Total length="1h 50m" />
    </ToC.List>
  </Section>

  <Section>
  <SectionHeader>Catch a preview</SectionHeader>
  <Preview />
  </Section>

  <Section>
  <SectionHeader>Watch the course</SectionHeader>
  
  </Section>
    </Container>
  </div>
