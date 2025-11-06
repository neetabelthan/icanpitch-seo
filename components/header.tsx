import Image from 'next/image';

export function Header() {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <a
            href="https://icanpitch.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logo.png"
              alt="ICanPitch"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ICanPitch
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="/learn/"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Learn
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
