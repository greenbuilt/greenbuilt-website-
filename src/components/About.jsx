import { Users, Award, Globe, Heart, Lightbulb } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Link } from 'react-router-dom'

import teamImage from '../assets/DJ86w14YcdNd.jpg'
import meetingImage from '../assets/G05ua7kgP0lc.jpg'
import officeImage from '../assets/AY6yux6bX3F2.webp'

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: '創新',
      description: '持續推動建築材料技術的創新發展，為客戶提供最先進的解決方案'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: '品質',
      description: '堅持最高品質標準，確保每一個產品都能達到客戶的期望'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: '服務',
      description: '以客戶為中心，提供專業、及時、全面的技術支援與服務'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: '永續',
      description: '致力於環保永續發展，為下一代創造更美好的建築環境'
    }
  ]

  const milestones = [
    {
      year: '2026',
      title: '公司成立',
      description: '正式引進荷蘭GreenBuilt自癒混凝土技術到台灣'
    },
    {
      year: '',
      title: '首個項目',
      description: '完成第一個商業項目，證明技術在台灣環境下的有效性'
    },
    {
      year: '',
      title: '技術認證',
      description: '獲得台灣建材相關認證，建立本地化技術標準'
    },
    {
      year: '',
      title: '規模擴張',
      description: '業務快速成長，服務範圍擴展至全台各地'
    },
    {
      year: '',
      title: '重大突破',
      description: '完成台北101等指標性項目，技術獲得市場廣泛認可'
    },
    {
      year: '',
      title: '持續創新',
      description: '持續技術研發，推出更多創新產品和解決方案'
    }
  ]

  const team = [
    {
      name: '張建國',
      position: '執行長',
      description: '擁有20年建築業經驗，致力於推動台灣建築技術創新',
      image: teamImage
    },
    {
      name: '李美玲',
      position: '技術總監',
      description: '材料工程博士，專精於混凝土技術研發和應用',
      image: meetingImage
    },
    {
      name: '王志明',
      position: '營運總監',
      description: '豐富的項目管理經驗，確保每個工程的順利執行',
      image: officeImage
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-[#009100] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">關於我們</h1>
            <p className="text-xl max-w-3xl mx-auto">
              GreenBuilt Taiwan致力於將世界領先的自癒混凝土技術帶到台灣，為建築業創造更永續的未來
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                引領台灣建築業的技術革命
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                綠築再生科技有限公司(GreenBuilt Taiwan)是台灣領先的建築科技企業，專注於引進和推廣全球最先進的自癒混凝土技術。
              </p>
              <p className="text-lg text-gray-600 mb-6">
                我們的使命是通過創新的生物技術，解決建築物長期面臨的滲漏和維護難題，延長建築壽命，降低維修成本，並為減少碳足跡做出貢獻。
              </p>
              <p className="text-lg text-gray-600">
                作為荷蘭Basilisk在台灣的戰略合作夥伴，我們將台夫特理工大學(TU Delft)研發的專利技術與台灣本地建築需求相結合，提供全方位的技術諮詢、產品供應和工程服務。
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-primary/5 border-none shadow-none">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">10+</div>
                  <div className="text-gray-600">專利技術</div>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-none shadow-none">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">30%</div>
                  <div className="text-gray-600">延長壽命</div>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-none shadow-none">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">25%</div>
                  <div className="text-gray-600">減碳排放</div>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-none shadow-none">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">40%</div>
                  <div className="text-gray-600">節省成本</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">核心價值</h2>
            <p className="text-xl text-gray-600">我們堅持的原則與信念</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-none shadow-md">
                <CardContent className="p-8">
                  <div className="text-primary mb-6 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">發展歷程</h2>
            <p className="text-xl text-gray-600">見證我們從創立到成長的每一個重要時刻</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        {milestone.year && (
                          <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                        )}
                        <h3 className="text-xl font-semibold mb-3">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              領導團隊
            </h2>
            <p className="text-xl text-gray-600">
              經驗豐富的專業團隊，為您提供最優質的服務
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <div className="text-primary font-semibold mb-3">{member.position}</div>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partnership */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={meetingImage}
                alt="技術合作"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                國際技術合作
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                我們與荷蘭台夫特理工大學建立緊密的技術合作關係，這所被稱為歐洲MIT的頂尖學府是自癒混凝土技術的發源地。
              </p>
              <p className="text-lg text-gray-600 mb-6">
                通過與原創技術團隊的直接合作，我們確保能夠為台灣客戶提供最正宗、最先進的自癒混凝土技術和產品。
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-primary mr-3" />
                  <span>2015年歐洲發明獎決賽入圍技術</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-primary mr-3" />
                  <span>歐盟CE認證和卓越印章</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-primary mr-3" />
                  <span>日本國土交通省(NETIS)認可</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            加入我們的創新之旅
          </h2>
          <p className="text-xl mb-8">
            無論您是建築業專業人士、工程承包商，還是對創新技術感興趣的朋友，我們都歡迎您與我們聯絡
          </p>
          <div className="space-x-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              聯絡我們
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors"
            >
              查看案例
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
