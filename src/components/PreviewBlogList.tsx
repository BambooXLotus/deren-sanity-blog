'use client'
import {usePreview} from 'lib/sanity.preview'

import BlogList from '@/components/BlogList'
import type {Post} from 'types'

type PreviewBlogListProps = {
  query: string
}

export default function PreviewBlogList({query}: PreviewBlogListProps) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const posts: Post[] = usePreview(null, query)

  return <BlogList posts={posts} />
}
