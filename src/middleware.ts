import type { MiddlewareNext } from 'astro'
import { defineMiddleware } from 'astro:middleware'

const privateRoutes = ['/protected']

export const onRequest = defineMiddleware(async({ url, request }, next) => {
  const authHeaders = request.headers.get('authorization') || ''
  console.log(authHeaders)

  console.log('=== MIDDLEWARE ACTIVO ===')

  if (privateRoutes.includes(url.pathname)) {
    return checkLocalAuth(authHeaders, next)
  }

  return next()
})

const checkLocalAuth = (authHearders: string, next: MiddlewareNext) => {
  if (authHearders) {
    const authValue = authHearders.split(' ').at(-1) ?? 'user:pass'
    const decodedValue = atob(authValue).split(':')
    const [user, password] = decodedValue
    //console.log(decodedValue)

    if (user === 'admin' && password === 'admin') {
      return next()
    }
  }

  return new Response('No autorizado', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic real="Secure Area"'
    }
  })
}
