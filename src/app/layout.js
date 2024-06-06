import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from '../components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: '1년 뒤의 나에게 보내는 편지 웹사이트',
    description: '1년 뒤의 나에게 편지를 쓰는 웹사이트입니다. 사용자는 로그인하여 웹 에디터를 통해 편지를 작성하고, 작성된 편지는 1년 뒤에 사용자에게 이메일로 발송됩니다.',
    keywords: '편지, 미래, 예약 발송, 이메일, Firebase, Next.js, 구글 로그인',
    author: 'Your Name',
    viewport: 'width=device-width, initial-scale=1',
    themeColor: '#000000',
    openGraph: {
        type: 'website',
        url: 'https://youletter.vercel.app',
        title: '1년 뒤의 나에게 보내는 편지 웹사이트',
        description: '1년 뒤의 나에게 편지를 쓰는 웹사이트입니다. 사용자는 로그인하여 웹 에디터를 통해 편지를 작성하고, 작성된 편지는 1년 뒤에 사용자에게 이메일로 발송됩니다.',
        images: [
            {
                url: 'https://youletter.vercel.app/images/og-image.jpg',  // 실제 이미지 경로로 변경 필요
                width: 800,
                height: 600,
                alt: '1년 뒤의 나에게 보내는 편지 웹사이트',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@yourtwitterhandle',
        title: '1년 뒤의 나에게 보내는 편지 웹사이트',
        description: '1년 뒤의 나에게 편지를 쓰는 웹사이트입니다. 사용자는 로그인하여 웹 에디터를 통해 편지를 작성하고, 작성된 편지는 1년 뒤에 사용자에게 이메일로 발송됩니다.',
        image: 'https://youletter.vercel.app/images/twitter-image.jpg',  // 실제 이미지 경로로 변경 필요
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
        <head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
            <meta name="keywords" content={metadata.keywords} />
            <meta name="author" content={metadata.author} />
            <meta name="viewport" content={metadata.viewport} />
            <meta name="theme-color" content={metadata.themeColor} />
            <meta property="og:type" content={metadata.openGraph.type} />
            <meta property="og:url" content={metadata.openGraph.url} />
            <meta property="og:title" content={metadata.openGraph.title} />
            <meta property="og:description" content={metadata.openGraph.description} />
            <meta property="og:image" content={metadata.openGraph.images[0].url} />
            <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
            <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
            <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
            <meta name="twitter:card" content={metadata.twitter.card} />
            <meta name="twitter:site" content={metadata.twitter.site} />
            <meta name="twitter:title" content={metadata.twitter.title} />
            <meta name="twitter:description" content={metadata.twitter.description} />
            <meta name="twitter:image" content={metadata.twitter.image} />
        </head>
        <body className={inter.className}>
        <div className="flex flex-col lg:flex-row min-h-screen">
            <Sidebar />
            <main className="bg-gradient-to-r from-yellow-800 to-yellow-900 text-gray-900 flex-grow">
                {children}
            </main>
        </div>
        </body>
        </html>
    );
}
