import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Youtube, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#003060] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-2">綠築再生科技有限公司</h3>
            <h3 className="text-lg font-semibold mb-4 leading-tight">Greenbuilt Regeneration Technology Co.,LTD.</h3>
            <p className="text-gray-300 mb-4">
              「療癒系」自我修復水泥，讓您告別滲漏的隱患！
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">快速連結</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/technology" className="text-gray-300 hover:text-white transition-colors">
                  產品原理
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
                  產品介紹
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-white transition-colors">
                  工程實績
                </Link>
              </li>
              <li>
                <Link to="/videos" className="text-gray-300 hover:text-white transition-colors">
                  影片專區
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">服務項目</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">自癒混凝土</li>
              <li className="text-gray-300">防水砂漿</li>
              <li className="text-gray-300">技術諮詢</li>
              <li className="text-gray-300">工程服務</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">聯絡資訊</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span className="text-gray-300">+886 3 3931500</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span className="text-gray-300">greenbuilt2023@gmail.com</span>
              </div>
              <div className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  桃園市大園區航翔路 107 號 2 樓 W2047B 室<br />
                  Room W2047B, 2nd Floor, No. 107, Hangxiang Rd., Dayuan District, Taoyuan City
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2026 綠築再生科技有限公司. All rights reserved. | 
            <Link to="/privacy" className="hover:text-white ml-2">隱私政策</Link> | 
            <Link to="/terms" className="hover:text-white ml-2">使用條款</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
