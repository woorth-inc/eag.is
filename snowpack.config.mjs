export default {
  mount: {
    public: { url: '/', static: true },
    src: '/dist',
  },
  optimize: {
    minify: true,
  },
  plugins: [
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-webpack',
  ],
}
