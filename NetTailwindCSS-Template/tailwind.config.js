/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'selector',
    content: [
        "./wwwroot/js/*.js",
        "./Views/**/*.cshtml",
        "./Pages/**/*.cshtml",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
