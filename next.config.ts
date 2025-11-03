import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Redirect gamla ?Page= URLs till nya clean URLs
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 'Page',
            value: 'prices',
          },
        ],
        destination: '/priser',
        permanent: true,
      },
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 'Page',
            value: 'main',
          },
        ],
        destination: '/',
        permanent: true,
      },
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 'Page',
            value: 'chiropractors',
          },
        ],
        destination: '/om-oss',
        permanent: true,
      },
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 'Page',
            value: 'about',
          },
        ],
        destination: '/om-oss',
        permanent: true,
      },
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 'Page',
            value: 'education',
          },
        ],
        destination: '/om-oss',
        permanent: true,
      },
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 'Page',
            value: 'treatment',
          },
        ],
        destination: '/behandlingar-kunskap',
        permanent: true,
      },
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 'Page',
            value: 'firstvisit2',
          },
        ],
        destination: '/behandlingar-kunskap',
        permanent: true,
      },
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 'Page',
            value: 'firstvisit4',
          },
        ],
        destination: '/behandlingar-kunskap',
        permanent: true,
      },
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 'Page',
            value: 'contactus',
          },
        ],
        destination: '/hitta-oss-kontakt',
        permanent: true,
      },
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 'Page',
            value: 'findus',
          },
        ],
        destination: '/hitta-oss-kontakt',
        permanent: true,
      },
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 'Page',
            value: 'straightenup',
          },
        ],
        destination: '/lankar',
        permanent: true,
      },
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 'Page',
            value: 'links',
          },
        ],
        destination: '/lankar',
        permanent: true,
      },
      // Redirect non-www to www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'kiro-jkpg.se',
          },
        ],
        destination: 'https://www.kiro-jkpg.se/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;