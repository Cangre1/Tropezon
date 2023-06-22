const environment = process.env.NODE_ENV;
const PROD_ENV = 'production';
const prodUrl = 'https://html-travelata.wpzoro.com'; // Change this to your Production URL
const devUrl = 'https://html-travelata.wpzoro.com';
const baseUrl = environment === PROD_ENV ? prodUrl : devUrl;
const isProd = environment === PROD_ENV;

const folder = {
    assets: 'assets',
    input: 'src',
    output: 'dist',
};

const dir = {
    img: `/${folder.assets}/img/`,
}

module.exports = {
    "title": "Travelata - Travel Agency & Tour Booking HTML Template",
    "description": "Great for travel agency & tour booking sites, built with modern technologies like Tailwind, Eleventy and AlpineJS, fully responsive, clean, modern design with speed and SEO optimization",
    siteImage: `${baseUrl}${dir.img}site-image.jpg`,
    "buildTime": new Date(),
    environment,
    isProd,
    folder,
    base: {
        site: baseUrl,
        img: `${baseUrl}${dir.img}`,
    },
    tracking: {
        gtag: 'YOUR_GOOGLE_ANALYTICS_CODE', // YOUR_GOOGLE_ANALYTICS_CODE
        gmaps_key: 'YOUR_GOOGLE_MAPS_API_KEY', // YOUR_GOOGLE_MAPS_API_KEY
    },
    settings: {
        showTopNavToolbar: true,
        showInstagramFooter: true,
    },
    instagram: {
        accessToken: 'YOUR_INSTAGRAM_API_KEY', // YOUR_INSTAGRAM_API_KEY
        limit: 8,
    }
}
