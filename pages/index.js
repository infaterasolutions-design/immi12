import React, { useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    const interval = setInterval(() => {
      if (typeof window !== 'undefined' && window.initApp && window.NewsData) {
        window.initApp();
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-on-surface overflow-x-hidden min-h-screen bg-[#f8f9fa] font-['Inter',sans-serif]">
      <Head>
        <title>The Digital Diplomat | Real-time US Immigration News</title>
        <meta name="description" content="The premier destination for accurate, real-time news and analysis regarding US immigration policy and global mobility." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </Head>

      <Script src="/data.js" strategy="beforeInteractive" />
      <Script src="/app.js" strategy="afterInteractive" />

      {/* Header: Multi-level Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 transition-all duration-200 ease-in-out">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-6 py-4 h-16">
          <div className="flex items-center">
            <a className="leading-none" href="#/home">
              <Image alt="Logo" width={200} height={48} className="w-auto h-12 object-contain" src="/Logo.png" priority />
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-1 h-full font-headline">
            {/* 1. Home */}
            <div className="nav-item group relative h-full flex items-center px-2">
              <a className="tracking-tight text-sm font-semibold text-blue-700 border-b-2 border-blue-700 pb-1 transition-all" data-nav="home" href="#/home">Home</a>
              <div className="nav-dropdown absolute top-full left-0 w-64 bg-white border border-slate-200 shadow-xl p-2 z-[60]">
                <a className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-100/50 hover:text-slate-900 transition-colors" href="#/home">Latest News</a>
                <a className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-100/50 hover:text-slate-900 transition-colors" href="#/category/visa-news">Trending Immigration News</a>
                <div className="mt-2 p-3 bg-blue-50 border-l-4 border-blue-700">
                  <p className="text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-1">Visa Alerts</p>
                  <p className="text-xs text-blue-900">USCIS expands premium processing for 2024</p>
                </div>
              </div>
            </div>
            {/* 2. Visa News */}
            <div className="nav-item group relative h-full flex items-center px-2">
              <a className="tracking-tight text-sm font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-0.5 transition-all" data-nav="visa-news" href="#/category/visa-news">
                Visa News <span className="material-symbols-outlined text-xs">expand_more</span>
              </a>
              <div className="nav-dropdown absolute top-full left-0 w-60 bg-white border border-slate-200 shadow-xl p-2 z-[60]">
                <a className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-100/50 hover:text-slate-900 transition-colors" href="#/category/visa-news/h1b-visa">H1B Visa</a>
                <a className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-100/50 hover:text-slate-900 transition-colors" href="#/category/visa-news/green-card">Green Card</a>
                <a className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-100/50 hover:text-slate-900 transition-colors" href="#/category/visa-news/f1-opt-cpt">F1 & OPT/CPT</a>
                <a className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-100/50 hover:text-slate-900 transition-colors" href="#/category/visa-news/b1-b2">B1/B2 (Tourist & Business)</a>
                <a className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-100/50 hover:text-slate-900 transition-colors" href="#/category/visa-news/uscis">USCIS Updates</a>
                <a className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-100/50 hover:text-slate-900 transition-colors" href="#/category/processing-times/consulate">Consulate Alerts</a>
              </div>
            </div>
            {/* 3. Visa Guides */}
            <div className="nav-item group relative h-full flex items-center px-2">
              <a className="tracking-tight text-sm font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-0.5 transition-all" data-nav="visa-guides" href="#/category/visa-guides">
                Visa Guides <span className="material-symbols-outlined text-xs">expand_more</span>
              </a>
              <div className="nav-dropdown absolute top-full left-0 w-56 bg-white border border-slate-200 shadow-xl p-2 z-[60]">
                <a className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-100/50 hover:text-slate-900 transition-colors" href="#/category/visa-guides/how-to">How-To Articles</a>
                <a className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-100/50 hover:text-slate-900 transition-colors" href="#/category/visa-guides/steps">Application Steps</a>
                <a className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-100/50 hover:text-slate-900 transition-colors" href="#/category/visa-guides/faqs">FAQs</a>
              </div>
            </div>
            {/* 4. Visa Bulletin */}
            <div className="h-full flex items-center px-2">
              <a className="tracking-tight text-sm font-semibold text-slate-600 hover:text-slate-900 transition-all font-headline" data-nav="visa-bulletin" href="#/category/visa-bulletin">Visa Bulletin</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden xl:flex items-center bg-slate-100 px-4 py-1.5 border border-slate-200 relative">
              <span className="material-symbols-outlined text-slate-400 text-sm">search</span>
              <input id="search-input" className="bg-transparent border-none focus:ring-0 text-sm w-48" placeholder="Search news..." type="text" autoComplete="off" />
              <div id="search-results" className="hidden absolute top-full right-0 mt-2 w-96 bg-white border border-slate-200 shadow-2xl z-[100] max-h-96 overflow-y-auto"></div>
            </div>
            <button className="bg-primary text-white px-6 py-2 font-bold text-sm tracking-wide uppercase hover:opacity-90 transition-all scale-100 active:scale-[0.98]">Subscribe</button>
            <button id="mobile-search-btn" className="lg:hidden mob-icon-btn ml-2" aria-label="Search">
              <span className="material-symbols-outlined">search</span>
            </button>
            <button id="mobile-menu-btn" className="lg:hidden mob-icon-btn ml-1" aria-label="Menu">
              <div className="hamburger-bars"><span></span><span></span><span></span></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Overlays */}
      <div id="smart-search-overlay" className="lg:hidden overflow-y-auto"></div>
      <div id="mobile-menu-overlay" className="lg:hidden"></div>
      <div id="mobile-menu" className="lg:hidden bg-white border-t border-slate-200 w-full overflow-y-auto shadow-2xl z-50 max-h-screen">
          <div className="p-4 space-y-0" id="mobile-menu-inner">
             {/* Dynamic insertion or manual port of full accordion menu */}
          </div>
      </div>

      <main className="mt-4 px-4 md:px-0 max-w-[1100px] mx-auto transition-all duration-500 ease-in-out">
        <div id="home-view" className="space-y-8">
           {/* Breaking News Banner */}
           <a href="#/live/h1b-visa-reform-2025" className="flex items-center gap-4 bg-white p-2 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
              <span className="bg-red-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-white live-dot inline-block"></span>Live</span>
              <p className="text-sm font-medium truncate group-hover:text-primary transition-colors">H-1B Visa Reform Act 2025: Live Congressional Updates</p>
              <span className="material-symbols-outlined text-primary ml-auto mr-2">arrow_forward</span>
           </a>

           {/* Hero Section */}
           <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-4">
              <a href="#/article/1" className="group cursor-pointer block relative">
                 <div className="relative aspect-[16/10] overflow-hidden mb-4">
                    <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATI85OtLzj_sQ0MJSzY7OKWNh756JbG2932o_Ri9ycQHBm4OUaRqbyh-FeoXP0XLK493eluw7EUp-4FIA4-9luW02by7tRs_mL_MR_Ws222g37OrmvEvjAYGl9unpTvv8orNCrC9rejkU4y7tGbBYbgwpbx9fjIe5PLKHuEmm0OMlCoPk09_tkiejWjtYv2DTF5AsYoI39e1G3_eTfY8wHtn03Bugod6gUkWAKFyunVqistTzLjMBr3-q_ODnv9-mLSblCOpny5Vs" alt="Featured" />
                 </div>
                 <h1 className="text-on-surface text-3xl font-extrabold headline-font leading-tight group-hover:text-primary transition-colors">Strategic Shifts: The Future of H-1B Visa Modernization</h1>
                 <p className="text-on-surface-variant text-base leading-relaxed line-clamp-3 mt-3">The Department of Homeland Security proposes significant changes to the specialty occupation visa program.</p>
              </a>
              <div id="top-row-grid" className="grid grid-cols-2 gap-6">
                 {/* Secondary items go here */}
              </div>
           </section>

           {/* Dynamic Sections */}
           <section className="py-4 border-y border-slate-100">
              <h2 className="text-xl font-extrabold headline-font border-l-4 border-primary pl-4 uppercase tracking-tight mb-6">Top Stories</h2>
              <div id="top-stories-scroll" className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar snap-x"></div>
           </section>

           <section className="py-4">
              <h2 className="text-xl font-extrabold headline-font border-l-4 border-primary pl-4 uppercase tracking-tight mb-6">Browse by Category</h2>
              <div id="category-grid-home" className="grid grid-cols-2 md:grid-cols-3 gap-4"></div>
           </section>

           <section className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-16">
              <div className="lg:col-span-8 space-y-12">
                 <div id="latest-updates-grid" className="space-y-8"></div>
                 <button id="home-load-more" className="w-full py-4 bg-slate-100 font-bold text-[11px] tracking-widest text-primary hover:bg-slate-200 transition-colors uppercase">Load More Stories</button>
              </div>
              <aside id="home-sidebar" className="lg:col-span-4 space-y-12"></aside>
           </section>
        </div>

        {/* View Switches handled by app.js */}
        <div id="category-view" className="hidden w-full">
           <h1 id="category-title" className="text-3xl font-extrabold headline-font border-l-4 border-primary pl-4 uppercase tracking-tight text-slate-900 mb-8">Category</h1>
           <div id="category-grid" className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
           <button id="load-more-btn" className="hidden w-full py-4 mt-8 bg-slate-100 font-bold text-[11px] tracking-widest text-primary hover:bg-slate-200 uppercase">Load More</button>
        </div>

        <div id="article-view" className="hidden w-full grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-16">
           <div id="article-scroll-container" className="lg:col-span-7 w-full space-y-24 mb-16"></div>
           <aside id="article-sidebar" className="lg:col-span-4 space-y-12"></aside>
        </div>

        <div id="live-view" className="hidden w-full mt-8 mb-16">
           <div id="live-timeline" className="space-y-0"></div>
        </div>
      </main>

      <template id="article-template">
        <article className="article-instance relative pb-12 border-b-2 border-slate-100" data-article-id="">
          <h1 className="article-title text-4xl font-extrabold font-headline leading-[1.1] text-slate-900 mb-6 tracking-tight">Title</h1>
          <div className="overflow-hidden shadow-2xl mb-8"><img className="article-image w-full aspect-[16/9] object-cover" src="" alt="" /></div>
          <div className="article-content-wrapper relative overflow-hidden" style={{ maxHeight: '400px' }}>
            <div className="article-body prose max-w-none text-lg text-slate-700 leading-relaxed"></div>
            <div className="article-gradient absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-10"></div>
          </div>
          <div className="article-keep-reading absolute bottom-0 left-0 right-0 flex justify-center translate-y-6 z-20">
            <button className="bg-slate-900 text-white font-bold text-xs tracking-widest uppercase px-8 py-4 shadow-xl hover:bg-primary flex items-center gap-2">
              Keep Reading <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>
          </div>
        </article>
      </template>

      <footer className="py-12 bg-[#F9FAFB] text-slate-600 border-t border-slate-100 font-body">
        <div className="w-full px-8 text-center text-xs text-slate-400">
           © 2024 The Digital Diplomat. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
