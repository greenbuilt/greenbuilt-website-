import React from 'react';
import { Download, ExternalLink, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DownloadSection = ({ 
  title = "文件下載中心", 
  subtitle = "獲取最新的產品手冊、技術規格及認證文件",
  items = [
    {
      name: "Greenheal 產品手冊",
      description: "詳細介紹生物型自行修復水泥的應用與優勢",
      link: "https://drive.google.com/drive/my-drive",
      type: "PDF"
    },
    {
      name: "Basilisk ER7 技術規格書",
      description: "混凝土裂縫修復產品的技術參數與施工指南",
      link: "https://drive.google.com/drive/my-drive",
      type: "PDF"
    },
      {
      name: "國際認證文件彙編",
      description: "包含 NEN-EN 1503-2 等多項國際品質認證",
      link: "https://drive.google.com/drive/my-drive",
      type: "DOC"
    },
    {
      name: "MOU 中英證書",
      description: "合作備忘錄中英文對照證書文件",
      link: "https://drive.google.com/drive/my-drive",
      type: "PDF"
    }
  ]
}) => {
  return (
    <section className="py-20 bg-gray-50" data-sb-field-path=".downloadSection">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" data-sb-field-path=".title">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-sb-field-path=".subtitle">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-sb-field-path=".items">
          {items.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-none shadow-md" data-sb-field-path={`.[${index}]`}>
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold" data-sb-field-path=".name">{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 line-clamp-2" data-sb-field-path=".description">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-gray-200 text-gray-800" data-sb-field-path=".type">
                    {item.type}
                  </span>
                  <Button variant="outline" size="sm" asChild>
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center"
                      data-sb-field-path=".link"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      下載
                      <ExternalLink className="ml-1 h-3 w-3 opacity-50" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            找不到您需要的文件？
            <a href="/contact" className="text-primary font-semibold ml-1 hover:underline">
              聯絡我們的技術團隊
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
