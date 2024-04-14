import { UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

//vite config
export default (): UserConfig => {
  return {
    //插件
    plugins: [react()],
    //less配置
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    //开发服务器配置
    server: {
      host: '0.0.0.0',
      port: 3000,
      open: true,
      proxy: {
        '/api': {
          target: 'https://yapi.pro/mock/352783',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    resolve: {
      //路径别名
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  }
}
