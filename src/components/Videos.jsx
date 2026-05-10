import { useState } from 'react'
import { Play, Clock, Eye } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)

  const videos = [
    {
      id: 23,
      title: 'Basilisk Self-healing Concrete: The future of sustainable construction',
      category: '技術說明',
      duration: '3:42',
      views: 'NEW',
      description: '深入了解 Basilisk 自癒混凝土技術：永續建築的未來。',
      thumbnail: 'https://i.ytimg.com/vi/1rJOLKVUbEY/hqdefault.jpg',
      embedId: '1rJOLKVUbEY',
      date: '2024-05-09',
      url: 'https://www.youtube.com/watch?v=1rJOLKVUbEY'
    },
    {
      id: 3,
      title: '日本超大型室內鮭魚養殖場(大和房屋工業)',
      category: '工程案例',
      duration: '12:45',
      views: '156K',
      description: '日本大和房屋工業超大型室內鮭魚養殖場建設案例。',
      thumbnail: 'https://i.ytimg.com/vi/CXYNJfi2pB4/hqdefault.jpg',
      embedId: 'CXYNJfi2pB4',
      date: '2023-09-12',
      url: 'https://www.youtube.com/watch?v=CXYNJfi2pB4'
    },
    {
      id: 5,
      title: 'CNN 媒體報導 - Self Healing Concrete',
      category: '媒體報導',
      duration: '3:45',
      views: '125K',
      description: 'CNN國際媒體深度報導自癒混凝土技術的革命性突破，展示其在建築業的應用前景。',
      thumbnail: 'https://i.ytimg.com/vi/eN-vJB7yeJI/hqdefault.jpg',
      embedId: 'eN-vJB7yeJI',
      date: '2023-08-15',
      url: 'https://www.youtube.com/watch?v=eN-vJB7yeJI'
    },
    {
      id: 6,
      title: 'MR3乾拌砂漿施工影片',
      category: '施工教學',
      duration: '15:20',
      views: '78K',
      description: 'MR3乾拌砂漿的專業施工方法和技術要點示範。',
      thumbnail: 'https://i.ytimg.com/vi/LRCMyPxTWtw/hqdefault.jpg',
      embedId: 'LRCMyPxTWtw',
      date: '2023-08-08',
      url: 'https://www.youtube.com/watch?v=LRCMyPxTWtw'
    },
    {
      id: 7,
      title: 'TED演講 - 自癒混凝土技術',
      category: '技術說明',
      duration: '18:30',
      views: '256K',
      description: 'TED論壇關於自癒混凝土技術的專業演講。',
      thumbnail: 'https://i.ytimg.com/vi/0l_9NDZ8VZA/hqdefault.jpg',
      embedId: '0l_9NDZ8VZA',
      date: '2023-09-05',
      url: 'https://www.youtube.com/watch?v=0l_9NDZ8VZA'
    },
    {
      id: 8,
      title: 'ER7液體修護劑使用說明',
      category: '施工教學',
      duration: '10:45',
      views: '65K',
      description: 'ER7液體修護劑的正確使用方法和操作指南。',
      thumbnail: 'https://i.ytimg.com/vi/qm-Hi_V2ijY/hqdefault.jpg',
      embedId: 'qm-Hi_V2ijY',
      date: '2023-07-15',
      url: 'https://www.youtube.com/watch?v=qm-Hi_V2ijY'
    },
    {
      id: 9,
      title: '隧道工程動畫',
      category: '工程案例',
      duration: '8:30',
      views: '134K',
      description: '隧道工程中自癒混凝土技術應用的動畫演示。',
      thumbnail: 'https://i.ytimg.com/vi/4deVfT8cYhA/hqdefault.jpg',
      embedId: '4deVfT8cYhA',
      date: '2023-08-25',
      url: 'https://www.youtube.com/watch?v=4deVfT8cYhA'
    },
    {
      id: 10,
      title: '大型蓄水池工程(使用自癒原劑)',
      category: '工程案例',
      duration: '16:20',
      views: '189K',
      description: '大型蓄水池工程中使用自癒原劑的施工案例記錄。',
      thumbnail: 'https://i.ytimg.com/vi/M7i_Xv9tWnw/hqdefault.jpg',
      embedId: 'M7i_Xv9tWnw',
      date: '2023-07-08',
      url: 'https://www.youtube.com/watch?v=M7i_Xv9tWnw'
    },
    {
      id: 11,
      title: '日本會澤高圧コンクリート株式会社演講(日語同步口譯)',
      category: '技術說明',
      duration: '25:15',
      views: '87K',
      description: '日本會澤高圧混凝土公司關於自癒混凝土技術的專業演講，提供日語同步口譯。',
      thumbnail: 'https://i.ytimg.com/vi/fe5HKMlWBBw/hqdefault.jpg',
      embedId: 'fe5HKMlWBBw',
      date: '2023-05-12',
      url: 'https://www.youtube.com/watch?v=fe5HKMlWBBw'
    },
    {
      id: 12,
      title: 'TED論壇：若是混凝土能夠自行修復呢？(可選擇中文字幕)',
      category: '技術說明',
      duration: '16:45',
      views: '189K',
      description: 'TED論壇探討自癒混凝土技術的可能性和未來發展，提供中文字幕選項。',
      thumbnail: 'https://i.ytimg.com/vi/znSeL66e8qE/hqdefault.jpg',
      embedId: 'znSeL66e8qE',
      date: '2023-07-30',
      url: 'https://www.youtube.com/watch?v=znSeL66e8qE'
    },
    {
      id: 13,
      title: 'World Breaking News - 自癒混凝土技術',
      category: '媒體報導',
      duration: '2:45',
      views: '98K',
      description: 'World Breaking News關於自癒混凝土技術的國際新聞報導。',
      thumbnail: 'https://i.ytimg.com/vi/pz5RZV-Jn0Y/hqdefault.jpg',
      embedId: 'pz5RZV-Jn0Y',
      date: '2023-04-10',
      url: 'https://www.youtube.com/watch?v=pz5RZV-Jn0Y'
    },
    {
      id: 14,
      title: '荷蘭Basilisk生物型自癒混凝土技術簡介',
      category: '技術說明',
      duration: '8:20',
      views: '134K',
      description: '荷蘭Basilisk公司生物型自癒混凝土技術的詳細介紹。',
      thumbnail: 'https://i.ytimg.com/vi/gvBUG_EjV98/hqdefault.jpg',
      embedId: 'gvBUG_EjV98',
      date: '2023-06-25',
      url: 'https://www.youtube.com/watch?v=gvBUG_EjV98'
    },
    {
      id: 15,
      title: '混凝土路面修復過程 (ER7液體修復系統)',
      category: '施工教學',
      duration: '18:30',
      views: '112K',
      description: '使用ER7液體修復系統進行混凝土路面修復的完整過程示範。',
      thumbnail: 'https://i.ytimg.com/vi/qJOKG3zY0Lw/hqdefault.jpg',
      embedId: 'qJOKG3zY0Lw',
      date: '2023-06-02',
      url: 'https://www.youtube.com/watch?v=qJOKG3zY0Lw'
    },
    {
      id: 16,
      title: '札幌市水道局工程案例',
      category: '工程案例',
      duration: '11:30',
      views: '98K',
      description: '札幌市水道局使用自癒混凝土技術的工程應用案例。',
      thumbnail: 'https://i.ytimg.com/vi/BZHjGrqzukw/hqdefault.jpg',
      embedId: 'BZHjGrqzukw',
      date: '2023-05-30',
      url: 'https://www.youtube.com/watch?v=BZHjGrqzukw'
    },
    {
      id: 17,
      title: '會澤高圧コンクリート株式会社鵡川工場混凝土養護槽',
      category: '工程案例',
      duration: '9:45',
      views: '76K',
      description: '會澤高圧混凝土公司鵡川工場的混凝土養護槽工程案例。',
      thumbnail: 'https://i.ytimg.com/vi/iRWUpO6jGBA/hqdefault.jpg',
      embedId: 'iRWUpO6jGBA',
      date: '2023-03-28',
      url: 'https://www.youtube.com/watch?v=iRWUpO6jGBA'
    },
    {
      id: 18,
      title: '低碳永續家園形象廣告',
      category: '媒體報導',
      duration: '1:30',
      views: '45K',
      description: '低碳永續家園建設的形象廣告，展示自癒混凝土技術的環保價值。',
      thumbnail: 'https://i.ytimg.com/vi/mTWUu-5KJ5c/hqdefault.jpg',
      embedId: 'mTWUu-5KJ5c',
      date: '2023-03-15',
      url: 'https://www.youtube.com/watch?v=mTWUu-5KJ5c'
    },
    {
      id: 19,
      title: '癒合過程縮時攝影',
      category: '技術說明',
      duration: '3:15',
      views: '167K',
      description: '自癒混凝土裂縫癒合過程的縮時攝影記錄。',
      thumbnail: 'https://i.ytimg.com/vi/ztAmktMQDb4/hqdefault.jpg',
      embedId: 'ztAmktMQDb4',
      date: '2023-04-28',
      url: 'https://www.youtube.com/watch?v=ztAmktMQDb4'
    },
    {
      id: 20,
      title: 'ER7施工影片(日文)',
      category: '施工教學',
      duration: '14:15',
      views: '58K',
      description: 'ER7產品的施工方法和技術要點，日文解說版本。',
      thumbnail: 'https://i.ytimg.com/vi/FpDn9yj_n4w/hqdefault.jpg',
      embedId: 'FpDn9yj_n4w',
      date: '2023-04-20',
      url: 'https://www.youtube.com/watch?v=FpDn9yj_n4w'
    },
    {
      id: 21,
      title: '自癒混凝土原理說明(英文)',
      category: '技術說明',
      duration: '12:30',
      views: '145K',
      description: '自癒混凝土技術原理的詳細說明，英文版本。',
      thumbnail: 'https://i.ytimg.com/vi/9vMs2DuBYJk/hqdefault.jpg',
      embedId: '9vMs2DuBYJk',
      date: '2023-03-22',
      url: 'https://www.youtube.com/watch?v=9vMs2DuBYJk'
    },
    {
      id: 22,
      title: '自癒混凝土原理說明(日文)',
      category: '技術說明',
      duration: '11:45',
      views: '92K',
      description: '自癒混凝土技術原理的詳細說明，日文版本。',
      thumbnail: 'https://i.ytimg.com/vi/RgJT_cjzXko/hqdefault.jpg',
      embedId: 'RgJT_cjzXko',
      date: '2023-02-18',
      url: 'https://www.youtube.com/watch?v=RgJT_cjzXko'
    }
  ]

  const categories = [
    { id: 'all', label: '全部影片' },
    { id: '媒體報導', label: '媒體報導' },
    { id: '技術說明', label: '技術說明' },
    { id: '施工教學', label: '施工教學' },
    { id: '工程案例', label: '工程案例' }
  ]

  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredVideos = selectedCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory)

  const openVideo = (video) => {
    setSelectedVideo(video)
  }

  const closeVideo = () => {
    setSelectedVideo(null)
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-[#009100] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">影片專區</h1>
            <p className="text-xl max-w-3xl mx-auto">
              透過影片深入了解自癒混凝土技術，觀看實際應用案例和專業解說
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
              <Card key={video.id} className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group" onClick={() => openVideo(video)}>
                <div className="relative aspect-video">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <Play fill="currentColor" size={24} />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded flex items-center">
                    <Clock size={12} className="mr-1" />
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="text-xs">{video.category}</Badge>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Eye size={12} className="mr-1" />
                      {video.views}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">{video.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">{video.description}</p>
                  <div className="text-xs text-gray-400">{video.date}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90">
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
            <button onClick={closeVideo} className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors p-2 bg-black bg-opacity-50 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${selectedVideo.embedId}?autoplay=1`} title={selectedVideo.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      )}
    </div>
  )
}

export default Videos
