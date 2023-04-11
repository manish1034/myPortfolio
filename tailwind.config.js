/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        './pages/**/*.{html,js}',
        './components/**/*.{html,js}',
    ],
    theme: {
        extend: {
            spacing: {
                "big": "48rem"
            }
        },
        screens: {
            sm: "480 px"
            md: "768px",
            lg: "1024px",
            xl: "1280px",
        },
        fontFamily: {
            nunito: ['Nunito', 'sans - serif']
        }
    },
    plugins: [],
}