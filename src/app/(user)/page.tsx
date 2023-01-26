import {previewData} from 'next/headers'
import {groq} from 'next-sanity'
import {client} from 'lib/sanity.client'

import PreviewSuspense from '@/components/PreviewSuspense'
import BlogList from '@/components/BlogList'
import type {Post} from 'types'
import PreviewBlogList from '@/components/PreviewBlogList'

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`

export const revalidate = 60
async function HomePage() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="animate-pulse text-center text-lg text-yellow-500">
              Loading Preview Data...
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    )
  }

  const posts: Post[] = await client.fetch(query)

  return (
    <div>
      <BlogList posts={posts} />
    </div>
  )
}

export default HomePage
