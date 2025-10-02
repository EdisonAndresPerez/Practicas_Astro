
import { initializeApp } from 'firebase/app'
import { getAuth, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBWJsdhZp5A4anA_WTx9b_flRNsFeCyukY',
  authDomain: 'astro-autenticacion-17e73.firebaseapp.com',
  projectId: 'astro-autenticacion-17e73',
  storageBucket: 'astro-autenticacion-17e73.firebasestorage.app',
  messagingSenderId: '237430201097',
  appId: '1:237430201097:web:a6fc28e52a69278a36d1d8',
  measurementId: 'G-V9K4JXPZ2Z'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const githubAuthProvider = new GithubAuthProvider()
export const googleAuthProvider = new GoogleAuthProvider()



// Initialize Analytics only in the browser
let analytics: any = null
if (typeof window !== 'undefined') {
  import('firebase/analytics').then(async analyticsModule => {
    const isSupported = await analyticsModule.isSupported()
    if (isSupported) {
      analytics = analyticsModule.getAnalytics(app)
    }
  })
}

export const firebase = {
  app,
  auth,
  githubAuthProvider,
  GoogleAuthProvider,
  get analytics() {
    return analytics
  }
}
