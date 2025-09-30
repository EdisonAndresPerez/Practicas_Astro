import rss from '@astrojs/rss'
import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'

export const GET: APIRoute = async ({ params, request, site }) => {


const blogPosts = await getCollection('blog')


  return rss({
    // `<title>` field in output xml
    title: 'Edison Perez - blog',
    // `<description>` field in output xml
    description: 'mini proyecto con astro para aprender lo basico :D',
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#site
    site: site ?? '',
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: blogPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,

    })),
    // (optional) inject custom xml
    customData: `<language>en-es</language>`
  })
}
