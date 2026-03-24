import { motion } from "motion/react";
import { 
  Mail, 
  Phone, 
  GraduationCap, 
  Medal, 
  Briefcase, 
  Target, 
  ChevronRight,
  ExternalLink
} from "lucide-react";

const experiences = [
  {
    date: "2016 - 2025",
    title: "지투지 파트너스 대표",
    desc: "반도체, 통신, IT 분야 특화 서치펌 운영. 고난도 임원 및 핵심 인재 포지션 다수 성공 클로징 및 기업 파트너십 구축."
  },
  {
    date: "2006 - 2009",
    title: "GCT Semiconductor 이사",
    desc: "RF Transceiver, Mobile TV & Wibro SOC 프로젝트 총괄. UMC 및 삼성 System LSI 파운드리 협력사 관리."
  },
  {
    date: "2001 - 2004",
    title: "Silterra (Malaysia) Section Manager",
    desc: "Logic Product 불량 분석 및 수율 개선(Yield Enhancement) 총괄. 0.25um/0.18um 공정 신뢰성 확보."
  },
  {
    date: "1990 - 2001",
    title: "삼성반도체 Manager",
    desc: "메모리 제품 고객 서비스 및 신뢰성 엔지니어. Intel, Sun Micro 등 글로벌 고객사 품질 관리 및 필드 지원 주도."
  }
];

const badges = [
  "한양대학교 금속공학",
  "ROTC #26",
  "반도체 19년",
  "서치펌 대표 10년"
];

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="relative bg-primary text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-blue-200 font-light mb-4 tracking-wide"
          >
            30년 반도체 현장 전문가에서 인재 경영 리더로
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            김 종 욱
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 mb-10 font-medium"
          >
            전문 헤드헌터 <span className="mx-2 text-accent">|</span> 하이테크 인재 전략가
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {badges.map((badge, idx) => (
              <span 
                key={idx} 
                className="bg-accent/90 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg backdrop-blur-sm"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Vision Section */}
        <section className="py-20 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-10">
              <Target className="text-accent w-8 h-8" />
              <h2 className="text-3xl font-bold text-primary border-l-4 border-accent pl-4">인재 경영 비전</h2>
            </div>
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border-r-8 border-primary relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-accent opacity-20" />
              <p className="text-xl md:text-2xl font-bold text-slate-800 mb-6 leading-tight">
                "기술의 깊이를 읽고, 사람의 가치를 연결합니다."
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                단순한 이력서 매칭이 아닌, 고객사의 비즈니스 메커니즘과 기술적 난이도를 깊이 있게 이해합니다. 
                삼성반도체 및 글로벌 하이테크 현장에서 쌓은 19년의 경험을 바탕으로, 
                조직에 즉시 기여할 수 있는 <b className="text-primary underline decoration-accent underline-offset-4">'숨은 핵심 인재'</b>를 발굴하는 데 탁월한 강점을 보유하고 있습니다.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <Briefcase className="text-accent w-8 h-8" />
              <h2 className="text-3xl font-bold text-primary border-l-4 border-accent pl-4">주요 경력</h2>
            </div>
            
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
              {experiences.map((exp, idx) => (
                <motion.div 
                  key={idx}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                >
                  {/* Dot */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-200 group-hover:bg-accent group-hover:text-white text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-300">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                  {/* Content */}
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <time className="font-bold text-accent text-sm uppercase tracking-wider">{exp.date}</time>
                    </div>
                    <div className="text-xl font-bold text-slate-800 mb-2">{exp.title}</div>
                    <div className="text-slate-500 text-sm leading-relaxed">{exp.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-10">
              <GraduationCap className="text-accent w-8 h-8" />
              <h2 className="text-3xl font-bold text-primary border-l-4 border-accent pl-4">학력 및 기타</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <GraduationCap className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">한양대학교</h3>
                  <p className="text-slate-500">금속공학과 (학사)</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Medal className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">ROTC #26</h3>
                  <p className="text-slate-500">체계적인 조직 관리 및 책임감 배양</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4 tracking-tight">Contact Partner</h3>
          <p className="text-slate-400 mb-12 max-w-md mx-auto">
            귀사의 비즈니스 성장을 가속화할 최적의 인재를 제안합니다.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
            <a 
              href="mailto:jwkim2k@naver.com" 
              className="flex items-center gap-3 group hover:text-accent transition-colors"
            >
              <div className="bg-white/5 p-4 rounded-full group-hover:bg-accent/20 transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-lg font-medium">jwkim2k@naver.com</span>
            </a>
            <div className="flex items-center gap-3 group">
              <div className="bg-white/5 p-4 rounded-full">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-lg font-medium">010-7145-1629</span>
            </div>
          </div>

          <div className="pt-12 border-t border-white/10">
            <p className="text-slate-500 text-sm mb-4">
              &copy; {new Date().getFullYear()} J.W. KIM. All rights reserved.
            </p>
            <div className="flex justify-center gap-4 text-slate-600">
              <ExternalLink className="w-4 h-4" />
              <span className="text-xs uppercase tracking-widest">Professional Talent Management</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
