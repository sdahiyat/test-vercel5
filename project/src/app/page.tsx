import { Camera, Users, Zap, Star } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Camera className="h-8 w-8 text-indigo-600" />
            <span className="text-2xl font-bold text-gray-900">PhotoBuddy</span>
          </div>
          <div className="flex space-x-4">
            <Link 
              href="/login" 
              className="px-4 py-2 text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Login
            </Link>
            <Link 
              href="/register"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Share Photos.
            <span className="text-indigo-600"> Get AI Feedback.</span>
            <br />
            Improve Your Craft.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            PhotoBuddy combines the power of community with AI-driven insights to help photographers 
            of all levels improve their skills and share their passion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/register"
              className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
            >
              Start Sharing Photos
            </Link>
            <Link 
              href="/upgrade"
              className="px-8 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors font-semibold"
            >
              View Pro Features
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Users className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Photography Community</h3>
            <p className="text-gray-600">
              Connect with fellow photographers, follow your favorites, and discover inspiring work 
              from around the world.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Zap className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Analysis</h3>
            <p className="text-gray-600">
              Get detailed feedback on composition, lighting, and technique. Our AI helps you 
              understand what makes a great photo.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Star className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Features</h3>
            <p className="text-gray-600">
              Auto-tagging, caption generation, and intelligent search make managing and 
              discovering photos effortless.
            </p>
          </div>
        </div>

        {/* Pricing Preview */}
        <div className="bg-white rounded-xl p-8 shadow-sm text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Start Free, Upgrade When Ready</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="text-left">
              <div className="text-lg font-semibold text-gray-900">Free</div>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• 10 uploads per month</li>
                <li>• Community features</li>
                <li>• Manual tagging</li>
              </ul>
            </div>
            <div className="text-left">
              <div className="text-lg font-semibold text-indigo-600">Pro - $10/month</div>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Unlimited uploads</li>
                <li>• AI feedback & analysis</li>
                <li>• Auto-tagging & captions</li>
                <li>• Priority support</li>
              </ul>
            </div>
          </div>
          <Link 
            href="/register" 
            className="inline-block mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Get Started Free
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-16 border-t border-gray-200">
        <div className="flex items-center justify-center space-x-2 text-gray-600">
          <Camera className="h-5 w-5" />
          <span>&copy; 2024 PhotoBuddy. Share your passion.</span>
        </div>
      </footer>
    </div>
  )
}
