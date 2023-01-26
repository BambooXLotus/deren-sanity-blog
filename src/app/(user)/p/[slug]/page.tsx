import {urlFor} from 'lib/helpers'
import {client} from 'lib/sanity.client'
import {groq} from 'next-sanity'
import Image from 'next/image'
import PortableText from 'react-portable-text'

import type {Post} from 'types'

type SlugPageProps = {
  params: {
    slug: string
  }
}

export const revalidate = 60
export async function generateStaticParams() {
  const slugQuery = groq`
  *[_type=='post']
  {
    slug
  }
`
  const posts: Post[] = await client.fetch(slugQuery)

  const slugRoutes = posts.map((post) => post.slug.current)

  return slugRoutes.map((slug) => ({
    slug,
  }))
}

async function SlugPage({params: {slug}}: SlugPageProps) {
  const postQuery = groq`
  *[_type=='post' && slug.current == $slug][0]
  {
    ...,
    author->,
    categories[]->
  }
`
  const post: Post = await client.fetch(postQuery, {slug})

  return (
    <article className="px-10 pb-28">
      <section className="space-y-2 border-yellow-500 text-white">
        <div className="relative flex h-56 min-h-full flex-col justify-between md:flex-row">
          <div className="absolute top-0 h-full w-full p-10 opacity-30 blur-sm">
            <Image
              className="mx-auto object-cover object-center"
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>

          <section className="w-full bg-yellow-500 p-5">
            <div className="flex flex-col justify-between gap-y-5 md:flex-row">
              <div>
                <h1 className="text-4xl font-extrabold">{post.title}</h1>
                <p className="font-light">
                  {new Date(post._createdAt).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Image
                  className="rounded-full"
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  height={48}
                  width={48}
                />
                <div className="w-64">
                  <h3 className="text-lg font-bold">{post.author.name}</h3>
                  <div>{/* {AUTHOR BIO} */}</div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="pt-10 italic">{post.description}</h2>
              <div className="mt-auto flex items-center justify-end space-x-2">
                {post.categories.map((category) => (
                  <p
                    key={category._id}
                    className="mt-4 rounded-full bg-gray-800 px-3 py-1 text-sm font-semibold text-white"
                  >
                    {category.title}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <div className="mx-10">
        <PortableText
          content={post.body}
          serializers={{
            h1: ({children}: {children: React.ReactNode}) => (
              <h1 className="py-10 text-5xl font-bold">{children}</h1>
            ),
            h2: ({children}: {children: React.ReactNode}) => (
              <h2 className="py-10 text-4xl font-bold">{children}</h2>
            ),
            h3: ({children}: {children: React.ReactNode}) => (
              <h3 className="py-10 text-3xl font-bold">{children}</h3>
            ),
            h4: ({children}: {children: React.ReactNode}) => (
              <h4 className="py-10 text-2xl font-bold">{children}</h4>
            ),
            li: ({children}: {children: React.ReactNode}) => (
              <li className="ml-4 list-disc">{children}</li>
            ),
            link: ({href, children}: any) => (
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              <a href={href} className="hove:underline text-blue-500">
                {children}
              </a>
            ),
          }}
        />
      </div>
    </article>
  )
}

export default SlugPage
