import ClientSideRoute from '@/components/ClientSideRoute'
import {ArrowUpRightIcon} from '@heroicons/react/24/solid'
import {urlFor} from 'lib/helpers'
import Image from 'next/image'

import type {Post} from 'types'
type Props = {
  posts: Post[]
}

function BlogList({posts}: Props) {
  return (
    <div>
      {<hr className="mb-10 border-yellow-500" />}
      <div className="grid grid-cols-1 gap-x-10 gap-y-16 px-10 pb-24 md:grid-cols-2">
        {posts.map((post) => (
          <ClientSideRoute key={post._id} route={`/p/${post.slug.current}`}>
            <div className="group flex cursor-pointer flex-col">
              <div className="relative h-80 w-full drop-shadow-xl transition-transform duration-200 ease-out group-hover:scale-105">
                <Image
                  className="object-cover object-left lg:object-center"
                  src={urlFor(post.mainImage).url()}
                  alt={post.author.name}
                  fill
                />
                <div className="absolute bottom-0 flex w-full justify-between rounded bg-black bg-opacity-5 p-5 text-white drop-shadow-lg backdrop-blur-sm">
                  <div>
                    <p className="font-bold">{post.title}</p>
                    <p className="font-light">
                      {new Date(post._createdAt).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-y-2 md:flex-row md:gap-x-2">
                    {post.categories.map((category) => (
                      <div
                        key={category._id}
                        className="rounded-full bg-yellow-500 px-3 py-1 text-center text-sm font-semibold text-black"
                      >
                        <p>{category.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 flex-1">
                <p className="text-lg font-bold underline">{post.title}</p>
                <p className="text-gray-500 line-clamp-2">{post.description}</p>
              </div>

              <p className="mt-5 flex items-center font-bold group-hover:underline">
                Read Post <ArrowUpRightIcon className="ml-2 h-4 w-4" />
              </p>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  )
}

export default BlogList
