import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  server: { port: 8080, host: '192.168.174.130' },
  integrations: [
    starlight({
      title: '数据库原理',
      customCss: [
        './src/styles/custom.css',
      ],
      locales: {
        root: {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },
      social: {
        github: 'https://bitbucket.org/wngding/dbms',
      },
      sidebar: [
        {
          label: '基础篇',
          autogenerate: { directory: 'basic' },
        },
        {
          label: '设计篇',
          autogenerate: { directory: 'design' },
        },
        {
          label: '原理篇',
          autogenerate: { directory: 'theory' },
        },
        {
          label: '附录',
          autogenerate: { directory: 'appendix' },
        },
      ],
    }),
  ],
});
