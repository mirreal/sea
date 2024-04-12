import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Mirreal's Note</span>,
  project: {
    link: 'https://github.com/mirreal/sea',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/mirreal/sea/tree/main',
  primaryHue: 16,
  primarySaturation: 64,
  head: () => {
    return (
      <>
        <link
          rel="icon"
          type="image/icon"
          sizes="48*48"
          href="/favicon.ico"
        />
      </>
    )
  },
  footer: {
    text: 'Powered by Nextra',
  },
  toc: {
    backToTop: true,
  },
  feedback: {
    content: null,
  },
  useNextSeoProps: () => ({ titleTemplate: '%s - mirreal.net' }),
}

export default config
