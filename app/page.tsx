'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  BookOpen,
  ChevronDown,
  FileText,
  Mail,
  MapPin,
  Menu,
  Terminal,
  X,
} from 'lucide-react'

const springArticles = [
  ['Spring Boot Tutorial for Beginners: Introduction, Project Setup & Layered Architecture', 'https://springbootbynandini.hashnode.dev/spring-boot-tutorial-for-beginners-introduction-project-setup-layered-architecture'],
  ['Struggling with Maven? A Simple Guide to Maven & Its Lifecycle', 'https://springbootbynandini.hashnode.dev/struggling-with-maven-here-s-a-simple-guide-to-maven-its-lifecycle'],
  ['Spring Boot Annotations Explained Simply: From Basics to REST APIs', 'https://springbootbynandini.hashnode.dev/spring-boot-annotations-explained-simply-from-basics-to-rest-apis'],
  ['Spring Boot Deep Dive: Beans, Lifecycle & Dependency Injection', 'https://springbootbynandini.hashnode.dev/spring-boot-deep-dive-beans-lifecycle-dependency-injection'],
  ['Understanding Spring Bean Scopes: Singleton, Prototype, Request & Session', 'https://springbootbynandini.hashnode.dev/understanding-spring-bean-scopes-singleton-prototype-request-session'],
]

const javaGroups = [
  {
    title: 'Fundamentals',
    articles: [
      ['Java Basics Explained: What, Why and How to Get Started', 'https://corejavabynandini.hashnode.dev/java-basics-explained-what-why-and-how-to-get-started'],
      ['Java Variables and Data Types (Primitive & Non-Primitive Explained)', 'https://corejavabynandini.hashnode.dev/java-variables-and-data-types-primitive-and-non-primitive-explained'],
      ['Java Operators Explained Simply: A Complete Guide with Examples', 'https://corejavabynandini.hashnode.dev/java-operators-explained-simply-a-complete-guide-with-examples'],
      ['Java Control Flow Statements', 'https://corejavabynandini.hashnode.dev/java-control-flow-statements'],
      ['Java Methods and Constructors: A Comprehensive Guide', 'https://corejavabynandini.hashnode.dev/java-methods-and-constructors-a-comprehensive-guide'],
      ['Java Memory Management: Stack, Heap, GC and References', 'https://corejavabynandini.hashnode.dev/java-memory-management-stack-heap-gc-and-references'],
    ],
  },
  {
    title: 'OOP & Interfaces',
    articles: [
      ['Mastering Classes in Core Java: Complete Interview Guide for Freshers', 'https://corejavabynandini.hashnode.dev/mastering-classes-in-core-java-complete-interview-guide-for-freshers'],
      ['Understanding OOPS Concepts in Java', 'https://corejavabynandini.hashnode.dev/understanding-oops-concepts-in-java'],
      ['Complete Guide to Interfaces in Java: From Basics to Functional Interfaces, Lambda Expressions, and Real-World Usage', 'https://corejavabynandini.hashnode.dev/complete-guide-to-interfaces-in-java-from-basics-to-functional-interfaces-lambda-expressions-and-real-world-usage'],
      ["How Reflection and Annotations Power Spring Boot - Deep Dive into Java's Runtime Magic", 'https://corejavabynandini.hashnode.dev/how-reflection-and-annotations-power-spring-boot-deep-dive-into-java-s-runtime-magic'],
    ],
  },
  {
    title: 'Data Structures & Streams',
    articles: [
      ['Exception Handling in Java: A Complete Guide', 'https://corejavabynandini.hashnode.dev/exception-handling-in-java-a-complete-guide'],
      ['Complete Guide to Java Collections Framework (JCF) - From Basics to Advanced', 'https://corejavabynandini.hashnode.dev/complete-guide-to-java-collections-framework-jcf-from-basics-to-advanced'],
      ['Java Streams API - Complete Guide for Developers', 'https://corejavabynandini.hashnode.dev/java-streams-api-complete-guide-for-developers'],
    ],
  },
  {
    title: 'Concurrency',
    articles: [
      ['Complete Guide to Multithreading in Java', 'https://corejavabynandini.hashnode.dev/complete-guide-to-multithreading-in-java'],
      ['Mastering Java Concurrency: Thread pools, Future, CompletableFuture, ForkJoinPool & Scheduled Executors', 'https://corejavabynandini.hashnode.dev/mastering-java-concurrency-thread-pools-future-completablefuture-forkjoinpool-scheduled-executors'],
    ],
  },
  {
    title: 'Modern Java',
    articles: [
      ['Project Lombok in Java: Eliminate Boilerplate Code Like a Pro', 'https://corejavabynandini.hashnode.dev/project-lombok-in-java-eliminate-boilerplate-code-like-a-pro'],
      ['Modern Java Language Features Every Developer Should Know (Records, Sealed Classes, Pattern Matching)', 'https://corejavabynandini.hashnode.dev/modern-java-language-features-every-developer-should-know-records-sealed-classes-pattern-matching'],
      ['Complete Guide to Java Optional: Avoid NullPointerException with Modern Java', 'https://corejavabynandini.hashnode.dev/complete-guide-to-java-optional-avoid-nullpointerexception-with-modern-java'],
      ['Modern Java Features Every Developer Should Know: Switch Expressions (Java 14) & Text Blocks (Java 15)', 'https://corejavabynandini.hashnode.dev/modern-java-features-every-developer-should-know-switch-expressions-java-14-text-blocks-java-15'],
    ],
  },
]

function ExternalLink({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) {
  return <a className={className} href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight aria-hidden="true" className="size-4" /></a>
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-copy">{copy}</p>
    </div>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState('Fundamentals')

  return (
    <main>
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Nandini Karnakota home"><span>NK</span><strong>Nandini Karnakota</strong></a>
        <button className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Primary navigation">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#writing" onClick={() => setMenuOpen(false)}>Writing</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </header>

      <section id="top" className="hero shell">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Available for software engineering opportunities</p>
            <h1>Building backend systems.<br /><em>Explaining how they work.</em></h1>
            <p className="hero-intro">Java &amp; Spring Boot Developer <span className="slash">/</span> Technical Writer turning complex backend concepts into clear, practical guides.</p>
            <div className="hero-actions">
              <ExternalLink href="https://github.com/NandiniKarnakota1" className="button button-primary"><span aria-hidden="true">GH</span> GitHub</ExternalLink>
              <ExternalLink href="https://www.linkedin.com/in/nandini-karnakota-a46a322b1" className="button button-secondary"><span aria-hidden="true">in</span> LinkedIn</ExternalLink>
            </div>
          </div>
          <div className="hero-aside">
            <div className="terminal-card">
              <div className="terminal-top"><span /><span /><span /><small>nandini.java</small></div>
              <div className="terminal-body"><span className="code-muted">01</span> <span className="code-keyword">public class</span> <span className="code-name">Nandini</span> {'{'}<br /><span className="code-muted">02</span> &nbsp;&nbsp;<span className="code-keyword">static</span> <span className="code-type">String</span> focus = <span className="code-string">&quot;backend&quot;</span>;<br /><span className="code-muted">03</span> &nbsp;&nbsp;<span className="code-keyword">static</span> <span className="code-type">int</span> articles = <span className="code-number">24</span>;<br /><span className="code-muted">04</span> {'}'}<span className="cursor" /></div>
            </div>
            <div className="location-line"><MapPin /> Hyderabad, India <span>•</span> <span className="mono">UTC+5:30</span></div>
          </div>
        </div>
        <div className="hero-foot"><span>Scroll to explore</span><span className="scroll-line" /></div>
      </section>

      <section id="about" className="about-section shell section-rule">
        <div className="about-label"><span className="section-number">01</span><span>About</span></div>
        <div className="about-content"><h2>Learning in public,<br /><em>one concept at a time.</em></h2><p>Java &amp; Spring Boot learner writing beginner-friendly technical articles and exploring backend development, based in Hyderabad, India.</p><p>My writing spans core fundamentals, object-oriented programming, concurrency, modern Java, and the Spring ecosystem. I believe a good explanation is a form of engineering: structured, precise, and built for the person reading it.</p></div>
        <div className="about-stat"><strong>24</strong><span>published articles<br />and counting</span></div>
      </section>

      <section id="writing" className="writing-section shell section-rule">
        <SectionHeading eyebrow="02 / Writing" title="Writing that makes backend development feel approachable." copy="A growing library of practical guides for developers who want the why behind the code." />
        <div className="subsection-title"><BookOpen /><h3>Spring Boot articles</h3><span>05 featured guides</span></div>
        <div className="article-grid">{springArticles.map(([title, href], index) => <ExternalLink key={href} href={href} className="article-card"><span className="article-index">0{index + 1}</span><strong>{title}</strong><span className="read-link">Read article <ArrowUpRight /></span></ExternalLink>)}</div>
        <ExternalLink href="https://springbootbynandini.hashnode.dev" className="text-link">More Spring Boot articles</ExternalLink>

        <div className="java-heading"><div className="subsection-title"><Terminal /><h3>Core Java series</h3><span>19 articles / basics to advanced</span></div><p>Follow the path from first principles to modern language features, with each topic broken down into practical, beginner-friendly explanations.</p></div>
        <div className="accordion">{javaGroups.map((group, index) => { const isOpen = openGroup === group.title; return <div className={isOpen ? 'accordion-item is-open' : 'accordion-item'} key={group.title}><button className="accordion-trigger" onClick={() => setOpenGroup(isOpen ? '' : group.title)} aria-expanded={isOpen}><span><b>0{index + 1}</b>{group.title}</span><ChevronDown /></button><div className="accordion-content"><div>{group.articles.map(([title, href]) => <ExternalLink key={href} href={href} className="java-article"><span>{title}</span><ArrowUpRight /></ExternalLink>)}</div></div></div> })}</div>
      </section>

      <section id="skills" className="skills-section shell section-rule"><SectionHeading eyebrow="03 / Skills" title="Tools I use to think, build, and explain." copy="A practical toolkit shaped by learning the fundamentals before reaching for abstractions." /><div className="skills-list">{['Java', 'Spring Boot', 'Hibernate', 'REST APIs', 'PostgreSQL', 'SQL', 'Technical Writing'].map((skill, index) => <div className="skill-item" key={skill}><span>0{index + 1}</span><strong>{skill}</strong></div>)}</div></section>

      <section className="publication-section shell section-rule"><SectionHeading eyebrow="04 / Publications" title="Research beyond the codebase." copy="A published exploration of the technology that powers modern digital infrastructure." /><div className="publication-card"><div className="publication-icon"><FileText /></div><div className="publication-copy"><p className="eyebrow">Journal paper</p><h3>A Brief Overview Of Cloud Computing</h3><p>Co-authored with Dr. Algubelly Yashwanth Reddy</p><p className="citation">Global Journal For Research Analysis (GJRA), Volume XIII, Issue I, January 2024</p></div><ExternalLink href="https://www.doi.org/10.36106/gjra/6003461" className="button button-secondary">View Publication</ExternalLink></div></section>

      <section id="contact" className="contact-section shell section-rule"><div><p className="eyebrow">05 / Contact</p><h2>Let&apos;s build something<br /><em>worth explaining.</em></h2><p>Whether you&apos;re looking for a backend developer, a technical writer, or simply want to talk Java, I&apos;d love to hear from you.</p></div><div className="contact-links"><ExternalLink href="mailto:svnnandini@gmail.com" className="contact-link"><Mail /><span><small>Email</small>svnnandini@gmail.com</span></ExternalLink><ExternalLink href="https://www.linkedin.com/in/nandini-karnakota-a46a322b1" className="contact-link"><span className="social-mark" aria-hidden="true">in</span><span><small>Connect on</small>LinkedIn</span></ExternalLink><ExternalLink href="https://github.com/NandiniKarnakota1" className="contact-link"><span className="social-mark" aria-hidden="true">GH</span><span><small>Find me on</small>GitHub</span></ExternalLink></div></section>
      <footer className="site-footer shell"><span>© 2024 Nandini Karnakota</span><span>Designed &amp; written with intention.</span><a href="#top">Back to top ↑</a></footer>
    </main>
  )
}
