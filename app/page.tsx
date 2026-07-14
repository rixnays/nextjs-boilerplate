'use client';

import React, { useEffect, useState } from 'react';

export default function Home() {
  const [particles, setParticles] = useState<{ id: number; left: string; top: string; size: string; delay: string; duration: string }[]>([]);

  // Siyah beyaz uçuşan partiküller için rastgele değerler oluşturuyoruz
  useEffect(() => {
    const generatedParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 4 + 2}px`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 10 + 5}s`,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <main style={styles.container}>
      {/* Arka Plan Görseli */}
      <div style={styles.bgImage} />

      {/* Siyah Yarı Saydam Katman (Yazıların okunması ve karanlık tema için) */}
      <div style={styles.overlay} />

      {/* Uçuşan Partiküller */}
      <div style={styles.particleContainer}>
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              position: 'absolute',
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              backgroundColor: p.id % 2 === 0 ? '#ffffff' : '#000000',
              borderRadius: '50%',
              opacity: 0.6,
              animation: `floatUp ${p.duration} linear infinite`,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      {/* CSS Animasyonları */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&display=swap');

        @keyframes floatUp {
          0% {
            transform: translateY(100vh) scale(0);
            opacity: 0;
          }
          50% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-20vh) scale(1);
            opacity: 0;
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(255,255,255,0.2), 0 0 20px rgba(255,255,255,0.2);
          }
          50% {
            text-shadow: 0 0 20px rgba(255,0,0,0.6), 0 0 40px rgba(255,0,0,0.4);
            color: #ff3333;
          }
        }

        @keyframes glitch {
          0% { transform: translate(0) }
          20% { transform: translate(-2px, 2px) }
          40% { transform: translate(-2px, -2px) }
          60% { transform: translate(2px, 2px) }
          80% { transform: translate(2px, -2px) }
          100% { transform: translate(0) }
        }

        .glitch-text {
          animation: glitch 1s linear infinite;
        }

        .animated-title {
          animation: pulseGlow 3s infinite;
        }
      `}</style>

      {/* İçerik Alanı */}
      <div style={styles.content}>
        <h1 className="animated-title" style={styles.title}>
          CTRL + C & CTRL + V IS NOT HACKING
        </h1>
        
        <p style={styles.subtitle} className="glitch-text">
          Imagine calling yourself a "developer" or "hackerman" while spoon-feeding on leaked, open-source repositories.
        </p>

        <div style={styles.box}>
          <span style={styles.codeText}>$ git clone https://github.com/skid/brain.git</span><br />
          <span style={styles.errorText}>[!] Error: Repository not found. Brain tissue missing.</span>
        </div>

        <p style={styles.footer}>
          Stop pasting code you don't understand. 🤫
        </p>
      </div>
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    backgroundColor: '#0a0a0a',
    fontFamily: "'JetBrains Mono', monospace",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
  },
  bgImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: "url('https://cdn.discordapp.com/attachments/1524891241991372972/1526647987756077267/images_2.jpeg?ex=6a57c93c&is=6a5677bc&hm=bb0dc17f00cf715058e29bc835a45ee1be02851497f4ab35ee92cd0ef0247c96&')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'blur(3px) brightness(0.4)',
    zIndex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(10, 10, 10, 0.65)',
    zIndex: 2,
  },
  particleContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 3,
    pointerEvents: 'none',
  },
  content: {
    position: 'relative',
    zIndex: 4,
    textAlign: 'center',
    padding: '20px',
    maxWidth: '800px',
  },
  title: {
    fontSize: '2.8rem',
    fontWeight: 800,
    letterSpacing: '-1px',
    marginBottom: '20px',
    textTransform: 'uppercase',
    transition: 'color 0.5s',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#cccccc',
    lineHeight: '1.6',
    marginBottom: '40px',
  },
  box: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    border: '1px solid #333333',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'left',
    display: 'inline-block',
    fontFamily: "'JetBrains Mono', monospace",
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
    marginBottom: '30px',
  },
  codeText: {
    color: '#a9ffb4',
  },
  errorText: {
    color: '#ff6b6b',
    display: 'inline-block',
    marginTop: '5px',
  },
  footer: {
    fontSize: '1rem',
    color: '#666666',
    fontStyle: 'italic',
  }
};
