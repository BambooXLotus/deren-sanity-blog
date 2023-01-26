import {urlFor} from 'lib/helpers'
import * as NextImage from 'next/image'
import Link from 'next/link'
import React from 'react'
import type {Image} from 'types'

export const RichTextComponents = {
  image: ({value}: {value: Image}) => (
    <div className="relative m-10 mx-auto h-96 w-full">
      <NextImage.default className="object-contain" src={urlFor(value).url()} alt="Image" fill />
    </div>
  ),
  list: {
    bullet: ({children}) => <ul className="ml-10 list-disc space-y-5 py-5">{children}</ul>,
    number: ({children}: {children: React.ReactNode}) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({children}) => <h1 className="py-10 text-5xl font-bold">{children}</h1>,
    h2: ({children}: {children: React.ReactNode}) => (
      <h2 className="py-10 text-4xl font-bold">{children}</h2>
    ),
    h3: ({children}: {children: React.ReactNode}) => (
      <h3 className="py-10 text-3xl font-bold">{children}</h3>
    ),
    h4: ({children}: {children: React.ReactNode}) => (
      <h4 className="py-10 text-2xl font-bold">{children}</h4>
    ),
    blockquote: ({children}: {children: React.ReactNode}) => (
      <blockquote className="my-5 border-l-4 border-l-yellow-500 py-5 pl-5">{children}</blockquote>
    ),
  },
  marks: {
    link: ({children, value}: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-yellow-500 hover:decoration-black"
        >
          {children}
        </Link>
      )
    },
  },
}
