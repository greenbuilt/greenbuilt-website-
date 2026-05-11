import React, { useState } from 'react';
import { Download, ExternalLink, FileText, BookOpen, Wrench, ShieldCheck, FileSignature, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FOLDER_LINK = "https://drive.google.com/drive/folders/1NfsyNOVQLkpJdC0IjaiJCyQsq7SgBPsc?usp=sharing";

const categories = [
  {
    id: "manuals",
    label: "產品手冊",
    icon: BookOpen,
    description: "產品介紹、應用手冊與使用指南",
    items: [
      {
        name: "Greenheal 產品手冊",
        description: "詳細介紹生物型自行修復水泥的應用與優勢",
        link: "https://drive.google.com/file/d/1aVhzyTAjNtKgSwdzZMzcTZXbAYGAytSv/view?usp=sharing",
        type: "PDF"
      },
      {
        name: "Greenbuilt Repair Product - Greenheal (VN)",
        description: "越南版 Greenheal 修復產品完整介紹手冊",
        link: FOLDER_LINK,
        type: "PDF"
      }
    ]
  },
  {
    id: "technical",
    label: "技術資料",
    icon: Wrench,
    description: "技術規格書、施工指南與產品參數",
    items: [
      {
        name: "Basilisk ER7 技術規格書",
        description: "混凝土裂縫修復產品的技術參數與施工指南",
        link: "https://drive.google.com/file/d/1HExSgrto4qKCzfDsqdjyVx-imytZGaSB/view?usp=sharing",
        type: "PDF"
      },
      {
        name: "技術資料 ER7 MR3 HA",
        description: "ER7、MR3、HA 系列產品完整技術規格與數據",
        link: FOLDER_LINK,
        type: "PDF"
      }
    ]
  },
  {
    id: "certifications",
    label: "認證文件",
    icon: ShieldCheck,
    description: "國際品質認證、測試報告與合規文件",
    items: [
      {
        name: "國際認證文件彙編",
        description: "包含 NEN-EN 1504-2 等多項國際品質認證",
        link: "https://drive.google.com/file/d/1EmNt11DcslzZYird54DLnEfRyd0-nam0/view?usp=sharing",
        type: "DOC"
      },
      {
        name: "越南 TCI 認證報告",
        description: "TCI1602-P041 越南產品品質測試認證報告",
        link: FOLDER_LINK,
        type: "PDF"
      },
      {
        name: "日本品質認證報告",
        description: "日本市場產品品質與安全認證文件",
        link: FOLDER_LINK,
        type: "PDF"
      },
      {
        name: "國際測試報告",
        description: "產品性能與耐久性國際測試報告",
        link: FOLDER_LINK,
        type: "PDF"
      }
    ]
  },
  {
    id: "contracts",
    label: "合約授權文件",
    icon: FileSignature,
    description: "合作備忘錄、保密協議與授權證書",
    items: [
      {
        name: "越南 MOU 中英證書",
        description: "越南合作備忘錄中英文對照證書文件（2026年4月版）",
        link: "https://drive.google.com/file/d/1CMd1AYyOK02yRklkkQ2sHAZbFHrSO_jz/view?usp=sharing",
        type: "PDF"
      },
      {
        name: "越南生物水泥保密協議",
        description: "生物型自癒水泥技術保密合作協議書",
        link: FOLDER_LINK,
        type: "PDF"
      },
      {
        name: "越南生物水泥授權書",
        description: "生物型自癒水泥產品代理授權文件",
        link: FOLDER_LINK,
        type: "PDF"
      }
    ]
  },
  {
    id: "videos",
    label: "影片資料",
    icon: Video,
    description: "產品展示影片與技術應用介紹",
    items: [
      {
        name: "Greenbuilt Repair Product - Greenheal 產品影片",
        description: "Greenheal 修復產品完整介紹與實際應用展示影片",
        link: FOLDER_LINK,
        type: "MP4"
      }
    ]
  }
];

const categoryColors = {
  manuals: { bg: "bg-blue-50", icon: "text-blue-600", badge: "bg-blue-100 text-blue-700", border: "border-blue-200" },
  technical: { bg: "bg-emerald-50", icon: "text-emerald-600", badge: "bg-emerald-100 text-emerald-700", border: "border-emerald-200" },
  certifications: { bg: "bg-amber-50", icon: "text-amber-600", badge: "bg-amber-100 text-amber-700", border: "border-amber-200" },
  contracts: { bg: "bg-purple-50", icon: "text-purple-600", badge: "bg-purple-100 text-purple-700", border: "border-purple-200" },
  videos: { bg: "bg-rose-50", icon: "text-rose-600", badge: "bg-rose-100 text-rose-700", border: "border-rose-200" }
};

const DownloadSection = ({
  title = "文件下載中心",
  subtitle = "獲取最新的產品手冊、技術規格及認證文件"
}) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCategories = activeCategory === "all"
    ? categories
    : categories.filter(cat => cat.id === activeCategory);

  return (
    <section className="py-20 bg-white" data-sb-field-path=".downloadSection">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" data-sb-field-path=".title">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-sb-field-path=".subtitle">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === "all"
                ? "bg-primary text-white shadow-md"
                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            全部文件
          </button>
          {categories.map(cat => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? "bg-primary text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {cat.label}
              </button>
            );
          })}
        </div>

        <div className="space-y-16">
          {filteredCategories.map(category => {
            const Icon = category.icon;
            const colors = categoryColors[category.id];
            return (
              <div key={category.id}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 ${colors.bg} rounded-lg flex items-center justify-center`}>
                    <Icon className={`h-5 w-5 ${colors.icon}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{category.label}</h3>
                    <p className="text-sm text-gray-500">{category.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, index) => (
                    <Card
                      key={index}
                      className={`hover:shadow-lg transition-all border ${colors.border} shadow-md group`}
                    >
                      <CardHeader className="pb-4">
                        <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                          <FileText className={`h-6 w-6 ${colors.icon}`} />
                        </div>
                        <CardTitle className="text-lg font-bold leading-tight">{item.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-6 text-sm line-clamp-2">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${colors.badge}`}>
                            {item.type}
                          </span>
                          <Button variant="outline" size="sm" asChild>
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center"
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
              </div>
            );
          })}
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
