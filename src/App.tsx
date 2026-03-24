import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mail, 
  Phone, 
  GraduationCap, 
  Medal, 
  Briefcase, 
  Target, 
  ChevronRight,
  ExternalLink,
  Cpu,
  Users,
  Search,
  CheckCircle2,
  Menu,
  X,
  ArrowRight
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

const expertise = [
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "반도체/하이테크",
    desc: "삼성전자 19년 현장 경험을 바탕으로 기술적 난이도가 높은 핵심 엔지니어 및 리더 발굴"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "임원/핵심인재 서치",
    desc: "기업의 미래를 결정짓는 C-Level 및 핵심 보직자에 대한 정밀한 평판 조회와 매칭"
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "인재 경영 컨설팅",
    desc: "단순 채용을 넘어 조직의 기술 로드맵에 맞춘 최적의 인력 구성 전략 제안"
  }
];

const processSteps = [
  { step: "01", title: "비즈니스 분석", desc: "고객사의 기술 환경과 조직 문화를 심층 분석합니다." },
  { step: "02", title: "인재 타겟팅", desc: "글로벌 네트워크를 통해 'Active'하지 않은 숨은 인재를 찾습니다." },
  { step: "03", title: "정밀 검증", desc: "기술 역량과 인성을 다각도로 검증하여 리스크를 최소화합니다." },
  { step: "04", title: "최종 매칭", desc: "성공적인 온보딩까지 책임지는 파트너십을 유지합니다." }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "비전", href: "#vision" },
    { name: "전문분야", href: "#expertise" },
    { name: "경력", href: "#experience" },
    { name: "프로세스", href: "#process" },
    { name: "연락처", href: "#contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-accent/30">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className={`text-2xl font-bold tracking-tighter transition-colors ${scrolled ? "text-primary" : "text-white"}`}>
            J.W. KIM
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium hover:text-accent transition-colors ${scrolled ? "text-slate-600" : "text-white/80"}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${scrolled ? "bg-primary text-white hover:bg-primary/90" : "bg-white text-primary hover:bg-white/90"}`}
            >
              인재 문의하기
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className={`md:hidden p-2 ${scrolled ? "text-primary" : "text-white"}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white shadow-xl p-6 md:hidden flex flex-col gap-4"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-slate-800 font-medium py-2 border-b border-slate-100"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center bg-primary text-white pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary to-primary" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent text-sm font-bold mb-6 border border-accent/30 backdrop-blur-sm">
                30년 경력의 하이테크 인재 전략가
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight">
                기술의 깊이를 읽고,<br />
                <span className="text-accent">사람의 가치</span>를 연결합니다.
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed font-light">
                삼성반도체 19년의 현장 전문성과 10년의 서치펌 경영 노하우로<br className="hidden md:block" />
                귀사의 비즈니스 성장을 가속화할 최적의 핵심 인재를 제안합니다.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="group bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-accent/20"
                >
                  인재 채용 문의 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#experience" 
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center border border-white/20 transition-all"
                >
                  주요 경력 보기
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white/30 rounded-full" />
          </div>
        </motion.div>
      </header>

      <main>
        {/* Vision Section */}
        <section id="vision" className="py-32 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -30 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Our Vision</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
                기술의 깊이를 읽고,<br />사람의 가치를 연결합니다.
              </h3>
              <div className="space-y-6 text-slate-600 text-lg">
                <p>
                  기술의 난이도를 이해하지 못하는 헤드헌팅은 시간 낭비일 뿐입니다. 
                  저는 <b>삼성반도체 매니저</b>와 <b>GCT Semiconductor 이사</b>를 거치며 
                  직접 프로젝트를 리딩했던 현장 전문가입니다.
                </p>
                <p>
                  고객사의 기술 로드맵을 읽고, 그 길을 함께 걸어갈 수 있는 
                  <b>'숨은 핵심 인재'</b>를 발굴하는 것이 저의 소명입니다.
                </p>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop" 
                  alt="Professional Meeting" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
                <p className="text-primary font-bold text-lg mb-2">10+ Years</p>
                <p className="text-slate-500 text-sm">서치펌 지투지 파트너스 운영 및 수많은 핵심 보직 클로징 성공</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="py-32 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Expertise</h2>
              <h3 className="text-4xl font-bold text-primary">전문 분야 및 강점</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {expertise.map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all"
                >
                  <div className="text-accent mb-6 bg-accent/5 w-16 h-16 flex items-center justify-center rounded-2xl">
                    {item.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-primary mb-4">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Career Journey</h2>
                <h3 className="text-4xl font-bold text-primary">30년 현장 전문가의 발자취</h3>
              </div>
              <div className="flex gap-4">
                <div className="text-center px-6 py-3 bg-primary/5 rounded-2xl border border-primary/10">
                  <p className="text-2xl font-bold text-primary">19년</p>
                  <p className="text-xs text-slate-500 uppercase tracking-tighter">Tech Field</p>
                </div>
                <div className="text-center px-6 py-3 bg-accent/5 rounded-2xl border border-accent/10">
                  <p className="text-2xl font-bold text-accent">10년</p>
                  <p className="text-xs text-slate-500 uppercase tracking-tighter">Executive Search</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {experiences.map((exp, idx) => (
                <motion.div 
                  key={idx}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group p-8 rounded-3xl bg-white border border-slate-100 hover:border-accent/30 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-accent font-bold text-sm tracking-widest">{exp.date}</span>
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-primary mb-4">{exp.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{exp.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-32 px-6 bg-primary text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-1/2" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Our Process</h2>
              <h3 className="text-4xl font-bold">인재 매칭 프로세스</h3>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((item, idx) => (
                <div key={idx} className="relative group">
                  <div className="text-6xl font-black text-white/5 absolute -top-10 -left-4 group-hover:text-accent/10 transition-colors">
                    {item.step}
                  </div>
                  <div className="relative">
                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <CheckCircle2 className="text-accent w-5 h-5" />
                      {item.title}
                    </h4>
                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                  {idx < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-white/10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-8 rounded-3xl flex items-start gap-6">
                <div className="bg-white p-4 rounded-2xl shadow-sm">
                  <GraduationCap className="text-accent w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-accent uppercase tracking-widest mb-2">Education</h3>
                  <p className="text-2xl font-bold text-primary mb-1">한양대학교</p>
                  <p className="text-slate-500">금속공학과 (학사)</p>
                </div>
              </div>
              <div className="bg-slate-50 p-8 rounded-3xl flex items-start gap-6">
                <div className="bg-white p-4 rounded-2xl shadow-sm">
                  <Medal className="text-accent w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-accent uppercase tracking-widest mb-2">Leadership</h3>
                  <p className="text-2xl font-bold text-primary mb-1">ROTC #26</p>
                  <p className="text-slate-500">체계적인 조직 관리 및 책임감</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-32 px-6 bg-slate-50">
          <div className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row">
            <div className="bg-primary text-white p-12 md:w-2/5 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-6">Contact Partner</h3>
                <p className="text-slate-400 mb-10">귀사의 비즈니스 성장을 가속화할 최적의 인재를 제안합니다.</p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-bold">Email</p>
                      <p className="font-medium">jwkim2k@naver.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-bold">Phone</p>
                      <p className="font-medium">010-7145-1629</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-12 border-t border-white/10">
                <p className="text-sm text-slate-500 italic">"기술의 깊이를 읽고,<br />사람의 가치를 연결합니다."</p>
              </div>
            </div>
            
            <div className="p-12 md:w-3/5">
              <h4 className="text-2xl font-bold text-primary mb-8">인재 채용 문의하기</h4>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">성함</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="홍길동" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">회사명</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="(주)테크컴퍼니" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">이메일</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="example@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">문의 내용</label>
                  <textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all h-32 resize-none" placeholder="채용하고자 하는 포지션이나 궁금하신 점을 남겨주세요."></textarea>
                </div>
                <button className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 transition-all">
                  메시지 보내기
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-12 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold tracking-tighter text-primary">J.W. KIM</div>
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} J.W. KIM. All rights reserved.
          </p>
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm text-slate-400 hover:text-primary transition-colors">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
