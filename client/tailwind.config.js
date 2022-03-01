module.exports = {
  content: [
    './src/components/Header.js',
    './src/components/Navbar.js',
    './src/components/LoginForm.js',
    './src/components/RegisterForm.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
