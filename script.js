(() => {
  const TYPED_TEXT =
    "Full Stack Developer Crafting Web3 Apps & Production Platforms.";

  // Year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Navbar shrink on scroll
  const navbar = document.getElementById("navbar");
  if (navbar) {
    const onScroll = () => {
      if (window.scrollY > 40) navbar.classList.add("scrolled");
      else navbar.classList.remove("scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Typed text effect
  const typedEl = document.getElementById("typed-text");
  if (typedEl) {
    let i = 0;
    const type = () => {
      if (i <= TYPED_TEXT.length) {
        typedEl.textContent = TYPED_TEXT.slice(0, i);
        i += 1;
        setTimeout(type, 38);
      }
    };
    setTimeout(type, 400);
  }

  // Experience cards reveal
  const cards = document.querySelectorAll(".exp-card");
  if (cards.length && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -20px 0px" }
    );
    cards.forEach((card, idx) => {
      card.style.transitionDelay = `${idx * 120}ms`;
      io.observe(card);
    });
    // Fallback so cards never stay invisible
    setTimeout(() => {
      cards.forEach((card) => card.classList.add("visible"));
    }, 1800);
  } else {
    cards.forEach((card) => card.classList.add("visible"));
  }

  // Animated grid squares (like 0xbose)
  const squaresHost = document.querySelector(".grid-squares");
  if (squaresHost) {
    const SIZE = 45;
    const NUM = 20;
    const squares = [];

    const place = () => {
      const cols = Math.ceil(window.innerWidth / SIZE) + 2;
      const rows = Math.ceil(window.innerHeight / SIZE) + 2;
      squaresHost.innerHTML = "";
      squares.length = 0;

      for (let n = 0; n < NUM; n += 1) {
        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        const col = Math.floor(Math.random() * cols);
        const row = Math.floor(Math.random() * rows);
        rect.setAttribute("width", String(SIZE - 1));
        rect.setAttribute("height", String(SIZE - 1));
        rect.setAttribute("x", String(col * SIZE + 1));
        rect.setAttribute("y", String(row * SIZE + 1));
        rect.setAttribute("class", "grid-square");
        squaresHost.appendChild(rect);
        squares.push(rect);
      }
    };

    place();
    window.addEventListener("resize", place);

    const pulse = () => {
      squares.forEach((sq) => {
        const delay = Math.random() * 2000;
        setTimeout(() => {
          sq.style.opacity = String(0.15 + Math.random() * 0.35);
          setTimeout(() => {
            sq.style.opacity = "0";
          }, 600 + Math.random() * 800);
        }, delay);
      });
    };

    pulse();
    setInterval(() => {
      place();
      pulse();
    }, 3500);
  }

  // Hero canvas — dark geometric torus / ring that tracks pointer
  const canvas = document.getElementById("hero-canvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let w = 0;
    let h = 0;
    let raf = 0;
    let t = 0;
    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX ?? e.touches?.[0]?.clientX ?? rect.width / 2) - rect.left;
      const y = (e.clientY ?? e.touches?.[0]?.clientY ?? rect.height / 2) - rect.top;
      targetX = (x / rect.width - 0.5) * 2;
      targetY = (y / rect.height - 0.5) * 2;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    resize();

    const project = (x, y, z, rotX, rotY) => {
      // rotate Y then X
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      let x1 = x * cosY - z * sinY;
      let z1 = x * sinY + z * cosY;
      let y1 = y * cosX - z1 * sinX;
      z1 = y * sinX + z1 * cosX;

      const fov = 420;
      const scale = fov / (fov + z1 + 280);
      return {
        x: w / 2 + x1 * scale,
        y: h / 2 + y1 * scale,
        s: scale,
        z: z1,
      };
    };

    const draw = () => {
      t += 0.008;
      curX += (targetX - curX) * 0.05;
      curY += (targetY - curY) * 0.05;

      ctx.clearRect(0, 0, w, h);

      const rotY = t * 0.6 + curX * 0.5;
      const rotX = 0.4 + curY * 0.35;

      const R = Math.min(w, h) * 0.22;
      const r = R * 0.38;
      const segsU = 48;
      const segsV = 20;
      const points = [];

      for (let i = 0; i < segsU; i += 1) {
        for (let j = 0; j < segsV; j += 1) {
          const u = (i / segsU) * Math.PI * 2;
          const v = (j / segsV) * Math.PI * 2;
          const x = (R + r * Math.cos(v)) * Math.cos(u);
          const y = (R + r * Math.cos(v)) * Math.sin(u);
          const z = r * Math.sin(v);
          points.push(project(x, y, z, rotX, rotY));
        }
      }

      // soft glow disc
      const glow = ctx.createRadialGradient(w / 2, h / 2, 10, w / 2, h / 2, R * 1.8);
      glow.addColorStop(0, "rgba(238,238,238,0.08)");
      glow.addColorStop(1, "rgba(238,238,238,0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(w / 2, h / 2, R * 1.8, 0, Math.PI * 2);
      ctx.fill();

      // particles
      points
        .slice()
        .sort((a, b) => a.z - b.z)
        .forEach((p) => {
          const alpha = 0.15 + Math.max(0, Math.min(1, (p.s - 0.7) * 2)) * 0.75;
          ctx.fillStyle = `rgba(235,235,235,${alpha})`;
          const size = Math.max(0.6, 1.8 * p.s);
          ctx.beginPath();
          ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
          ctx.fill();
        });

      // orbiting rings
      ctx.strokeStyle = "rgba(238,238,238,0.18)";
      ctx.lineWidth = 1;
      for (let ring = 0; ring < 3; ring += 1) {
        ctx.beginPath();
        const rr = R * (0.55 + ring * 0.35);
        for (let i = 0; i <= 64; i += 1) {
          const a = (i / 64) * Math.PI * 2 + t * (0.2 + ring * 0.1);
          const p = project(Math.cos(a) * rr, Math.sin(a) * rr * 0.35, Math.sin(a) * rr * 0.2, rotX, rotY);
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }

      raf = requestAnimationFrame(draw);
    };

    draw();

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else draw();
    });
  }
})();
