  /* ─── DATA ─── */
      const flutterCards = [
        {
          icon: "flutter-svg",
          title: "State Management",
          tags: [
            "BLoC / flutter_bloc",
            "Provider",
            "Riverpod",
            "GetX",
            "setState",
          ],
        },
        {
          icon: "fa fa-cloud",
          title: "Backend & Real-time",
          tags: [
            "Firebase Firestore",
            "Cloud Storage",
            "REST (Dio/http)",
            "GraphQL",
            "WebSocket / Socket.io",
          ],
        },
        {
          icon: "fa fa-shield-alt",
          title: "Authentication",
          tags: [
            "Auth0",
            "Firebase Auth",
            "Google Sign-In",
            "LinkedIn OAuth",
            "Facebook",
            "Twitter Auth",
          ],
        },
        {
          icon: "fa fa-database",
          title: "Local Storage & DB",
          tags: [
            "SQLite (sqflite)",
            "Shared Preferences",
            "Hive",
            "Secure Storage",
            "MySQL",
          ],
        },
        {
          icon: "fa fa-mobile-alt",
          title: "Platform & Native",
          tags: [
            "Google Maps API",
            "WebRTC (Audio/Video)",
            "Push Notifications",
            "In-App Messaging",
            "Google ML Kit",
            "Cupertino Library",
          ],
        },
        {
          icon: "fa fa-sitemap",
          title: "Architecture & DX",
          tags: [
            "Domain Driven Design",
            "MVVM",
            "Clean Architecture",
            "Repository Pattern",
            "Dependency Injection",
            "Jira · Azure · Notion",
          ],
        },
        {
          icon: "fa fa-server",
          title: "DevOps & Infrastructure",
          tags: [
            "Self-Hosted Servers",
            "Node.js Hosting",
            "Internet Exposure",
            "Security Hardening",
            "Cost-Optimized Deployment",
            "Local Infrastructure Mgmt",
          ],
        },
      ];
      const skillBarsData = [
        { name: "Flutter & Dart", pct: 92 },
        { name: "BLoC / State Management", pct: 88 },
        { name: "Firebase & Cloud Backend", pct: 85 },
        { name: "DDD / Clean Architecture", pct: 85 },
        { name: "REST API / GraphQL / Dio", pct: 83 },
        { name: "UI/UX Design (Figma)", pct: 80 },
        { name: "DevOps / Self-Hosting", pct: 30 },
        { name: "JavaScript / Node.js", pct: 62 },
        { name: "C / C++", pct: 70 },
      ];
      const tagData = {
        lang: ["Dart", "JavaScript", "Node.js", "C", "C++"],
        cloud: [
          "Firebase Auth",
          "Firestore",
          "Cloud Storage",
          "Auth0",
          "GraphQL",
          "REST APIs",
          "WebRTC",
        ],
        arch: ["DDD", "MVVM", "Clean Architecture", "Repository Pattern"],
        devops: [
          "Self-Hosted Server",
          "Node.js Hosting",
          "Internet Exposure",
          "Ngrok / Tunneling",
          "Security Hardening",
          "Cost-Optimized Infra",
          "Local Server Mgmt",
        ],
        tools: [
          "Android Studio",
          "Xcode",
          "VS Code",
          "Postman",
          "Figma",
          "Adobe XD",
          "NPM",
          "Trello",
          "Jira",
          "Azure Board",
          "Notion",
        ],
        vcs: [
          "GitHub",
          "GitLab",
          "Azure DevOps",
          "MacOS",
          "Windows",
          "MySQL",
          "SQLite",
        ],
      };
      const tlData = [
        {
          date: "Jan 2025 — Present",
          type: "Work",
          edu: false,
          role: "Senior Flutter Developer",
          company: "NextZen Minds · Kolkata",
          desc: "Leading Flutter development for production cross-platform apps. Architecting scalable solutions with DDD and Clean Architecture. Driving technical decisions and mentoring.",
          chips: [
            "Flutter",
            "Dart",
            "BLoC",
            "DDD",
            "Firebase",
            "GraphQL",
            "Clean Architecture",
          ],
        },
        {
          date: "Dec 2021 — Dec 2024",
          type: "Work",
          edu: false,
          role: "Flutter Developer",
          company: "CBNITS · Kolkata",
          desc: "Developed and shipped multiple apps on App Store and Play Store. Worked with Auth0, WebRTC audio/video, Firebase, Google Maps, socket real-time features, in-app payments and Figma-based UI.",
          chips: [
            "Flutter",
            "Provider",
            "Firebase",
            "WebRTC",
            "Auth0",
            "REST API",
            "Google Maps",
            "Socket.io",
            "Figma",
            "Jira",
          ],
        },
        {
          date: "Sep 2021 — Dec 2021",
          type: "Work",
          edu: false,
          role: "Programmer Analyst",
          company: "Cognizant · Bangalore",
          desc: "Contributed to automation and integration tasks. Gained enterprise-level experience in software design and deployment workflows.",
          chips: ["Automation", "Integration", "Selenium", "Maven"],
        },
        {
          date: "2024",
          type: "Education",
          edu: true,
          role: "Master of Computer Applications (MCA)",
          company: "Chandigarh University · Distance & Online",
          desc: "Postgraduate program covering advanced programming, software engineering, algorithms, database systems and system design.",
          chips: ["MCA", "Software Engineering", "Algorithms", "System Design"],
        },
        {
          date: "2021",
          type: "Education",
          edu: true,
          role: "Bachelor of Computer Applications (BCA)",
          company: "Acharya Institute of Graduate Studies · Bangalore",
          desc: "Foundations in data structures, OOP, operating systems, algorithms and software development methodologies.",
          chips: ["BCA", "Computer Science", "Data Structures", "OOP"],
        },
      ];
      const projData = [
        {
          e: "👩",
          bg: "linear-gradient(135deg,#FF6B9D18,#FF6B9D06)",
          type: "flutter",
          badge: "Flutter · Live",
          title: "TotalHer",
          desc: "Safe social platform exclusively for women — selfie verification (Google ML Kit), audio/video calls (WebRTC), real-time messaging via sockets, and community features.",
          stack: [
            "Flutter",
            "DDD",
            "WebRTC",
            "Google ML Kit",
            "Firebase",
            "Socket.io",
          ],
          ios: "https://apps.apple.com/app/totalher",
          android: "https://play.google.com/store/apps/details?id=com.totalher",
        },
        {
          e: "📈",
          bg: "linear-gradient(135deg,#E8440A18,#F5A62308)",
          type: "flutter",
          badge: "Flutter · Live",
          title: "Saras — Stock Research",
          desc: "Track financial advisors' accuracy in real time. Virtual AI trade execution, ROI tracking, hit-rate metrics, and transparent results via socket-based live data.",
          stack: [
            "Flutter",
            "DDD",
            "Socket.io",
            "REST API",
            "Firebase",
            "Charts",
          ],
          ios: "https://apps.apple.com/app/saras",
          android: "https://play.google.com/store/apps/details?id=com.saras",
        },
        {
          e: "🧘",
          bg: "linear-gradient(135deg,#A78BFA18,#A78BFA06)",
          type: "flutter",
          badge: "Flutter · Live",
          title: "Wellma",
          desc: "Comprehensive wellness app — connect with practitioners worldwide, local & virtual events, educational content, in-app messaging and personalized wellness journeys.",
          stack: [
            "Flutter",
            "Firebase",
            "In-App Messaging",
            "REST API",
            "Figma",
          ],
          ios: "https://apps.apple.com/app/wellma",
          android: "https://play.google.com/store/apps/details?id=com.wellma",
        },
        {
          e: "🏥",
          bg: "linear-gradient(135deg,#54C5F818,#54C5F806)",
          type: "flutter",
          badge: "Flutter · Live",
          title: "eZHealth Philippines",
          desc: "End-to-end patient consultation — search doctors, book, pay, receive e-prescriptions, medical certificates, lab tests and manage full medical history.",
          stack: ["Flutter", "REST API", "In-App Payments", "Firebase", "Dio"],
          android:
            "https://play.google.com/store/apps/details?id=com.zuelligpharma.ezconsult",
        },
        {
          e: "👨‍⚕️",
          bg: "linear-gradient(135deg,#34D39918,#34D39906)",
          type: "flutter",
          badge: "Flutter · Live",
          title: "eZHealth Doctor",
          desc: "Doctor consultation app — patient management, booking controls, built-in audio/video calls, e-prescription management and working-hours settings.",
          stack: ["Flutter", "WebRTC", "REST API", "Dio", "Firebase"],
          android:
            "https://play.google.com/store/apps/details?id=com.zuelligpharma.ezhealthdoctor",
        },
        {
          e: "🤝",
          bg: "linear-gradient(135deg,#F5A62318,#E8440A08)",
          type: "flutter",
          badge: "Flutter · Live",
          title: "eMajlis",
          desc: "UAE-based professional networking — connect professionals across industries for business, career and knowledge-sharing goals.",
          stack: ["Flutter", "Firebase", "REST API", "Auth"],
          android:
            "https://play.google.com/store/apps/details?id=com.emajlis.android",
        },
        {
          e: "🚕",
          bg: "linear-gradient(135deg,#F9731618,#F9731606)",
          type: "flutter",
          badge: "Flutter",
          title: "OCabs",
          desc: "On-demand taxi booking with real-time GPS, card payments, price estimation, email receipts and advance pre-booking for any date and time.",
          stack: ["Flutter", "Maps API", "Payments", "Firebase", "REST API"],
        },
        {
          e: "💬",
          bg: "linear-gradient(135deg,#25D36618,#25D36606)",
          type: "flutter",
          badge: "Flutter · Live",
          title: "Tap 2 Chat",
          desc: "Send WhatsApp messages without saving numbers, open WhatsApp Web in-app, and save/share WhatsApp statuses — clean and fast.",
          stack: ["Flutter", "Dart", "WhatsApp API"],
          android:
            "https://play.google.com/store/apps/details?id=tech.shahbajjamil.taptochat",
        },
        {
          e: "🌙",
          bg: "linear-gradient(135deg,#8B5CF618,#8B5CF606)",
          type: "web",
          badge: "Web",
          title: "Eid Mubarak Greeting",
          desc: "Animated, shareable web greeting card for Eid — smooth CSS animations and vanilla JS, optimised for mobile sharing.",
          stack: ["HTML", "CSS", "JavaScript"],
          live: "https://shahbajjamil.github.io/Eid-Mubarak-2020/",
        },
        {
          e: "🕌",
          bg: "linear-gradient(135deg,#06B6D418,#06B6D406)",
          type: "web",
          badge: "Web",
          title: "Ramadan Mubarak Greeting",
          desc: "Beautiful animated Ramadan greeting card with fluid CSS transitions, shareable link for family and friends.",
          stack: ["HTML", "CSS", "JavaScript"],
          live: "https://shahbajjamil.github.io/Ramadan-Mubarak-2020/",
        },
      ];

      /* ─── THEME ─── */
      const root = document.documentElement,
        btn = document.getElementById("themeBtn"),
        ico = document.getElementById("themeIco");
      function setTheme(t) {
        root.setAttribute("data-theme", t);
        ico.className = t === "dark" ? "fa fa-sun" : "fa fa-moon";
        localStorage.setItem("sjT", t);
      }
      setTheme(
        localStorage.getItem("sjT") ||
          (matchMedia("(prefers-color-scheme:dark)").matches
            ? "dark"
            : "light"),
      );
      btn.onclick = () =>
        setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
      matchMedia("(prefers-color-scheme:dark)").onchange = (e) => {
        if (!localStorage.getItem("sjT"))
          setTheme(e.matches ? "dark" : "light");
      };

      /* ─── LOADER ─── */
      const ldEl = document.getElementById("loader"),
        ldPct = document.getElementById("ldPct");
      let p = 0;
      const iv = setInterval(() => {
        p = Math.min(p + Math.floor(Math.random() * 7 + 4), 100);
        ldPct.textContent = p + "%";
        if (p >= 100) {
          clearInterval(iv);
          setTimeout(() => ldEl.classList.add("out"), 300);
        }
      }, 45);

      /* ─── Flutter SVG (FA free doesn't ship Flutter icon) ─── */
      const FLUTTER_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="22" height="22"><g fill="#3FB6D3"><path d="M12.3 64.2L76.3 0h39.4L32.1 83.6zM76.3 128h39.4L81.6 93.9l34.1-34.8H76.3L42.2 93.5z"/></g><path fill="#27AACD" d="M81.6 93.9l-20-20-19.4 19.6 19.4 19.6z"/><path fill="#19599A" d="M115.7 128L81.6 93.9l-20 19.2L76.3 128z"/><defs><linearGradient id="flg" gradientUnits="userSpaceOnUse" x1="59.365" y1="116.36" x2="86.825" y2="99.399"><stop offset="0" stop-color="#1b4e94"/><stop offset=".63" stop-color="#1a5497"/><stop offset="1" stop-color="#195a9b"/></linearGradient></defs><path fill="url(#flg)" d="M61.6 113.1l30.8-8.4-10.8-10.8z"/></svg>`;

      function getIcon(icon) {
        if (icon === "flutter-svg") return FLUTTER_SVG;
        return `<i class="${icon}"></i>`;
      }

      /* ─── Flutter cards ─── */
      flutterCards.forEach((c) => {
        document.getElementById("flGrid").innerHTML +=
          `<div class="fl-card reveal">
    <div class="fl-icon">${getIcon(c.icon)}</div>
    <div class="fl-title">${c.title}</div>
    <div class="fl-tags">${c.tags.map((t) => `<span class="fl-tag">${t}</span>`).join("")}</div>
  </div>`;
      });

      /* ─── Skill bars ─── */
      skillBarsData.forEach((s) => {
        document.getElementById("skillBars").innerHTML += `<div class="sb-item">
    <div class="sb-lbl"><strong>${s.name}</strong><span>${s.pct}%</span></div>
    <div class="sb-track"><div class="sb-fill" data-pct="${s.pct}"></div></div>
  </div>`;
      });

      /* ─── Tag clouds ─── */
      function mkTags(id, arr) {
        arr.forEach((t) => {
          document.getElementById(id).innerHTML +=
            `<span class="t-tag">${t}</span>`;
        });
      }
      mkTags("tagLang", tagData.lang);
      mkTags("tagCloud", tagData.cloud);
      mkTags("tagArch", tagData.arch);
      mkTags("tagDevops", tagData.devops);
      mkTags("tagTools", tagData.tools);
      mkTags("tagVcs", tagData.vcs);

      /* ─── Timeline ─── */
      tlData.forEach((item) => {
        document.getElementById("timeline").innerHTML +=
          `<div class="tl-item reveal">
    <div class="tl-dot${item.edu ? " edu" : ""}"></div>
    <div class="tl-meta"><span class="tl-date">${item.date}</span><span class="tl-type">${item.type}</span></div>
    <div class="tl-role">${item.role}</div>
    <div class="tl-co"><i class="fa fa-building"></i>${item.company}</div>
    <p class="tl-desc">${item.desc}</p>
    <div class="tl-chips">${item.chips.map((c) => `<span class="tl-chip">${c}</span>`).join("")}</div>
  </div>`;
      });

      /* ─── Projects ─── */
      projData.forEach((p) => {
        const stores = [];
        if (p.ios)
          stores.push(
            `<a href="${p.ios}"     target="_blank" rel="noopener" class="store-btn ios"><i class="fab fa-apple"></i> App Store</a>`,
          );
        if (p.android)
          stores.push(
            `<a href="${p.android}" target="_blank" rel="noopener" class="store-btn and"><i class="fab fa-android"></i> Play Store</a>`,
          );
        const links = [];
        if (p.live)
          links.push(
            `<a href="${p.live}" target="_blank" rel="noopener" class="pl-link"><i class="fa fa-external-link-alt"></i> Live</a>`,
          );
        if (p.apk)
          links.push(
            `<a href="${p.apk}"  download class="pl-link"><i class="fa fa-download"></i> APK</a>`,
          );
        if (!p.ios && !p.android && !p.live && !p.apk)
          links.push(
            `<span class="pl-link" style="opacity:.35;cursor:default"><i class="fa fa-lock"></i> Private</span>`,
          );
        links.push(
          `<a href="https://github.com/shahbajjamil" target="_blank" rel="noopener" class="pl-link"><i class="fab fa-github"></i> GitHub</a>`,
        );
        document.getElementById("projGrid").innerHTML +=
          `<div class="proj-card reveal" data-type="${p.type}">
    <div class="proj-thumb" style="background:${p.bg}"><span>${p.e}</span><span class="proj-badge">${p.badge}</span></div>
    <div class="proj-body">
      ${stores.length ? `<div class="proj-stores">${stores.join("")}</div>` : ""}
      <div class="proj-title">${p.title}</div>
      <p class="proj-desc">${p.desc}</p>
      <div class="proj-stack">${p.stack.map((s) => `<span class="ps-tag">${s}</span>`).join("")}</div>
      <div class="proj-links">${links.join("")}</div>
    </div>
  </div>`;
      });

      /* ─── Intersection observer ─── */
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("vis");
              e.target
                .querySelectorAll(".sb-fill")
                .forEach((b) => (b.style.width = b.dataset.pct + "%"));
            }
          });
        },
        { threshold: 0.1 },
      );
      document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
      document
        .querySelectorAll(".skills-wrap > div")
        .forEach((el) => obs.observe(el));

      /* ─── Nav scroll spy ─── */
      document.querySelectorAll("section[id]").forEach((sec) => {
        new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                document
                  .querySelectorAll(".na")
                  .forEach((a) => a.classList.remove("act"));
                const a = document.querySelector(`.na[href="#${e.target.id}"]`);
                if (a) a.classList.add("act");
              }
            });
          },
          { rootMargin: "-38% 0px -58% 0px" },
        ).observe(sec);
      });

      /* ─── Burger ─── */
      const burger = document.getElementById("burger"),
        drawer = document.getElementById("drawer");
      burger.onclick = () => {
        burger.classList.toggle("open");
        drawer.classList.toggle("open");
      };
      document.querySelectorAll(".dr").forEach(
        (l) =>
          (l.onclick = () => {
            burger.classList.remove("open");
            drawer.classList.remove("open");
          }),
      );

      /* ─── Project filter ─── */
      document.querySelectorAll(".pf-btn").forEach((btn) => {
        btn.onclick = function () {
          document
            .querySelectorAll(".pf-btn")
            .forEach((b) => b.classList.remove("active"));
          this.classList.add("active");
          const f = this.dataset.f;
          document.querySelectorAll(".proj-card").forEach((c) => {
            c.classList.toggle("hidden", f !== "all" && c.dataset.type !== f);
          });
        };
      });

      /* ─── Back to top ─── */
      document.getElementById("backTop").onclick = () =>
        window.scrollTo({ top: 0, behavior: "smooth" });