import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  ssgName: 'vite',
  nodeVersion: '20',
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ['public/content'],
      models: [
        {
          name: 'DownloadSection',
          label: '下載區塊',
          type: 'object',
          fields: [
            { name: 'title', label: '標題', type: 'string', default: '文件下載中心' },
            { name: 'subtitle', label: '副標題', type: 'string', default: '獲取最新的產品手冊、技術規格及認證文件' },
            {
              name: 'items',
              label: '下載項目',
              type: 'list',
              items: {
                type: 'object',
                fields: [
                  { name: 'name', label: '文件名稱', type: 'string', default: '新文件' },
                  { name: 'description', label: '描述', type: 'string', default: '請輸入文件描述' },
                  { name: 'link', label: 'Google Drive 連結', type: 'string', default: 'https://drive.google.com/drive/my-drive' },
                  { name: 'type', label: '檔案類型', type: 'string', default: 'PDF' }
                ]
              }
            }
          ]
        }
      ],
      assetsConfig: {
        referenceType: 'static',
        staticDir: 'public',
        uploadDir: 'assets',
        publicPath: '/'
      }
    })
  ]
});
