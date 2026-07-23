import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Mail, Phone, MapPin, Download, BriefcaseBusiness, GraduationCap,
  Award, Code2, UserRound, Menu, X, ArrowUp, ExternalLink, Sparkles
} from "lucide-react";
import "./styles.css";

const profile = {
  name: "مفيد مهيوب عبدالسلام الشميري",
  shortName: "مفيد الشميري",
  title: "مشرف طلبات | التجارة الإلكترونية | المبيعات",
  location: "الدمام، المملكة العربية السعودية",
  email: "abwtrkyalshmyry027@gmail.com",
  phone: "0533946458",
  summary:
    "أتميز بالدقة، سرعة التعلم، والقدرة على العمل تحت الضغط. لدي خبرة في المبيعات والتجارة الإلكترونية وإدارة وتجهيز الطلبات، وأسعى للانضمام إلى جهة احترافية أساهم فيها بتطوير الأداء وتحسين سير العمل.",
};

const experiences = [
  {
    title: "مشرف طلبات / محضر طلبات",
    company: "قطاع التجارة الإلكترونية",
    period: "خبرة سنتين",
    text: "متابعة الطلبات الواردة عبر منصة زد، مراجعة الطلبات وترتيب الأولويات، إعطاء الأولوية للطلبات الفورية، تجهيز الطلبات والتنسيق مع مندوبي التوصيل السريع، وإدخال بيانات الطلبات على نظام أودو وإصدار بوليصات الشحن والتغليف.",
  },
  {
    title: "مندوب مبيعات",
    company: "خبرة في مجال المبيعات",
    period: "5 سنوات",
    text: "خبرة عملية في التعامل مع العملاء، عرض المنتجات، متابعة احتياجات العملاء، تحقيق أهداف المبيعات، وبناء علاقات جيدة مع العملاء.",
  },
];

const education = [
  "دبلوم صيدلة – المعهد الوحدة للعلوم الطبية",
  "دبلوم سكرتارية",
];

const courses = [
  "دورة في التطوير المهني",
  "دورة في أساسيات Excel",
  "دورة في تحليل البيانات على Excel",
  "دورة في الذكاء الاصطناعي التوليدي",
  "دورة في هندسة وأخلاقيات وتحيز الذكاء الاصطناعي",
  "دورة في الذكاء الاصطناعي: فهم النماذج والتكلفة والتحديات",
  "دورة / مشروع تجاري على Shopify",
];

const skills = [
  "إدارة وتجهيز الطلبات",
  "التجارة الإلكترونية",
  "منصة زد",
  "نظام Odoo",
  "إصدار بوليصات الشحن",
  "خدمة العملاء",
  "المبيعات",
  "Microsoft Excel",
  "تحليل البيانات",
  "العمل تحت الضغط",
  "سرعة التعلم",
  "تنظيم الوقت",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      <header className="navbar">
        <div className="container nav-inner">
          <a href="#home" className="brand" onClick={closeMenu}>
            <span className="brand-mark">م</span>
            <span>{profile.shortName}</span>
          </a>

          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="فتح القائمة">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            {[
              ["home", "الرئيسية"],
              ["about", "نبذة عني"],
              ["experience", "الخبرات"],
              ["education", "التعليم"],
              ["courses", "الدورات"],
              ["skills", "المهارات"],
              ["contact", "تواصل معي"],
            ].map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><Sparkles size={16} /> سيرة ذاتية إلكترونية احترافية</div>
              <h1>مرحبًا، أنا <span>{profile.shortName}</span></h1>
              <h2>{profile.title}</h2>
              <p>{profile.summary}</p>
              <div className="hero-actions">
                <a className="btn primary" href="#contact">تواصل معي <ExternalLink size={18} /></a>
                <button className="btn secondary" onClick={() => window.print()}>
                  <Download size={18} /> حفظ / طباعة السيرة
                </button>
              </div>
              <div className="quick-info">
                <span><MapPin size={17} /> {profile.location}</span>
                <a href={`mailto:${profile.email}`}><Mail size={17} /> البريد الإلكتروني</a>
              </div>
            </div>

            <div className="hero-card">
              <div className="profile-avatar">م</div>
              <h3>{profile.shortName}</h3>
              <p>{profile.title}</p>
              <div className="stats">
                <div><strong>5+</strong><span>سنوات مبيعات</span></div>
                <div><strong>2+</strong><span>سنوات تجارة إلكترونية</span></div>
                <div><strong>12+</strong><span>مهارة وخبرة</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <SectionHeading icon={<UserRound />} title="نبذة عني" subtitle="تعرف على خبرتي وطموحي المهني" />
            <div className="about-box">
              <p>{profile.summary}</p>
              <p>أمتلك خبرة عملية في بيئة التجارة الإلكترونية، ومتابعة الطلبات من لحظة استقبالها حتى التجهيز والتغليف والشحن، مع استخدام منصات وأنظمة العمل الرقمية. كما أمتلك خبرة سابقة في المبيعات والتعامل المباشر مع العملاء.</p>
            </div>
          </div>
        </section>

        <section id="experience" className="section alt">
          <div className="container">
            <SectionHeading icon={<BriefcaseBusiness />} title="الخبرات العملية" subtitle="خبرات عملية في المبيعات والتجارة الإلكترونية" />
            <div className="timeline">
              {experiences.map((item, i) => (
                <article className="timeline-item" key={i}>
                  <div className="timeline-dot" />
                  <div className="card">
                    <div className="card-top">
                      <div>
                        <h3>{item.title}</h3>
                        <p className="company">{item.company}</p>
                      </div>
                      <span className="period">{item.period}</span>
                    </div>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="container">
            <SectionHeading icon={<GraduationCap />} title="التعليم والمؤهلات" subtitle="المؤهلات الأكاديمية التي حصلت عليها" />
            <div className="cards-grid two">
              {education.map((item, i) => (
                <div className="simple-card" key={i}><GraduationCap size={25} /><h3>{item}</h3></div>
              ))}
            </div>
          </div>
        </section>

        <section id="courses" className="section alt">
          <div className="container">
            <SectionHeading icon={<Award />} title="الدورات والشهادات" subtitle="التطوير المستمر وبناء المهارات" />
            <div className="cards-grid">
              {courses.map((item, i) => (
                <div className="simple-card course" key={i}><span className="course-number">{String(i + 1).padStart(2, "0")}</span><h3>{item}</h3></div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <SectionHeading icon={<Code2 />} title="المهارات" subtitle="مجموعة من المهارات العملية والشخصية" />
            <div className="skills-wrap">
              {skills.map((skill, i) => <span className="skill" key={i}>{skill}</span>)}
            </div>
            <div className="language-box">
              <div><strong>العربية</strong><span>اللغة الأم</span></div>
              <div><strong>الإنجليزية</strong><span>مستوى مقبول</span></div>
              <div><strong>القيادة</strong><span>قيادة السيارات الصغيرة والمتوسطة</span></div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-card">
            <div>
              <div className="eyebrow"><Mail size={16} /> تواصل معي</div>
              <h2>هل لديك فرصة مناسبة؟</h2>
              <p>يسعدني التواصل معكم ومناقشة فرص العمل والتعاون.</p>
            </div>
            <div className="contact-links">
              <a href={`mailto:${profile.email}`}><Mail size={20} /><span>{profile.email}</span></a>
              <a href={`tel:${profile.phone}`}><Phone size={20} /><span>{profile.phone}</span></a>
              <span><MapPin size={20} /><span>{profile.location}</span></span>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} {profile.shortName}</span>
          <a href="#home" aria-label="العودة للأعلى"><ArrowUp size={18} /></a>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({ icon, title, subtitle }) {
  return (
    <div className="section-heading">
      <div className="section-icon">{icon}</div>
      <div><h2>{title}</h2><p>{subtitle}</p></div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);