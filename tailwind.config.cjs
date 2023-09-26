/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    './public/index.html', // HTML 文件
    './src/**/*.{js,jsx,ts,tsx}', // JavaScript 和 React 组件文件
  ],
  theme: {
    extend: {
      backgroundColor: {
        // primary: "rgb(var(--color-primary) / <alpha-value>)",// 可以接收透明度变量
        themeColor: "var(--themeColor)",
        themeColor1: "var(--themeColor1)",
        themeColor2: "var(--themeColor2)",
        switchOff: "var(--switchOff)",
        tip: "var(--tip)",
        bodyColor: "var(--bodyColor)",
        footerBg: "var(--footerBg)",
        codeBg: "var(--codeBg)",
        inlineCode: "var(--inlineCode)",
        hoverColor: "var(--hoverColor)"
      },
      textColor: {
        primary: "var(--textColor)",
        secondary: "var(--textColor2)",
        hoverColor: "var(--hoverColor)"
      },
      backgroundImage: {
        bodyImage: "var(--backgroundImage)"
      },
      btn: 'bg-blue-500 hover:bg-blue border border-blue-700'
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("@tailwindcss/typography")// 解决tailwind修改默认样式导致markdown出问题
  ],
}

