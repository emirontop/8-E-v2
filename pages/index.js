import { useEffect, useState } from "react";

const studentsData = [
  {
    id: 0,
    name: "Ceylin",
    comment: ":D ==>",
    img: "/Ceylin.png"
  },
  {
    id: 1,
    name: "Mengi",
    comment: "Zengin babapiroyum",
    img: "/Mengi.png"
  },
  {
    id: 2,
    name: "Emir",
    comment: "Emoçç",
    img: "/emir.png"
  },
  {
    id: 3,
    name: "Yunus",
    comment: "Aciklama",
    img: "/Yunus.png"
  },
  {
    id: 4,
    name: "Ecrin",
    comment: "Belirli kisilere isim takma konusunda başarılı",
    img: "/Ecrin.png"
  },
  {
    id: 5,
    name: "Rabia",
    comment: "Ecrinin kankisi (biraz sinirli)",
    img: "/Rabia.png"
  },
  {
    id: 6,
    name: "Rıza",
    comment: "Damarlarında kan yerine Standoff (Cakma cs:go ) akan çocuk",
    img: "/Rıza.png"
  },
  {
    id: 7,
    name: "Elif",
    comment: "Kısa",
    img: "/Elif.png"
  },
  {
    id: 8,
    name: "Umut",
    comment: "MT🏴",
    img: "/Umut.png"
  },
  {
    id: 9,
    name: "Medet",
    comment: "Medet♥️Sinem",
    img: "/Medet.png"
  },
  {
    id: 10,
    name: "İbo/İbrahim",
    comment: "Futbolcu babapiro",
    img: "/İbrahim.png"
  },
  {
    id: 11,
    name: "Tolga",
    comment: "imam-hatipler kapatılsın",
    img: "/Tolga.png"
  },
  {
    id: 12,
    name: "Utku",
    comment: "Araba Hastası :D",
    img: "/Utku.png"
  },
  {
    id: 13,
    name: "Ece",
    comment: "(EKLE)",
    img: "/Ece.png"
  },
  {
    id: 14,
    name: "Eflal",
    comment: "Koyu MRT li",
    img: "/Eflal.png"
  },
  {
    id: 15,
    name: "enes",
    comment: "Basık tofaş",
    img: "/Enes.png"
  },
  {
    id: 16,
    name: "Rüştü",
    comment: "Titan",
    img: "/Rüştü.png"
  },
  {
    id: 17,
    name: "Feyza",
    comment: "(DÜZENLE)",
    img: "/Feyza.png"
  },
  {
    id: 18,
    name: "Berra",
    comment: "(burayada bisey eklicez)",
    img: "/berra.png"
  },
  {
    id: 19,
    name: "Cengiz",
    comment: "Bieiklet hastası",
    img: "/Feyza.png"
  },
  {
    id: 20,
    name: "Havana",
    comment: "4 göz",
    img: "/Havana.png"
  },
  {
    id: 21,
    name: "ülkü",
    comment: "(kotu bisey yazarsam kizar o yüzden cevap beklicem )",
    img: "/Feyza.png"
  },
  {
    id: 22,
    name: "İlayda",
    comment: "ulkunun ayinisi cevap bekliyorum.)",
    img: "/İlayda.png"
  },
  {
    id: 23,
    name: "Nildağ",
    comment: "bilmiyorum 4 göz v2?",
    img: "/Feyza.png"
  },
  {
    id: 24,
    name: "Beren",
    comment: "1.35",
    img: "/Beren.png"
  },
  {
    id: 25,
    name: "Gökçen",
    comment: "(BURAYI DUZENLE)",
    img: "/Gökçen.png"
  },
  {
    id: 300000000000000,
    name: "Rreanee...",
    comment: "hafif küfürbaz çocuk ama çok iyi ",
    img: "/Rr.png"
  },
  
];

const teachersData = [
  {
    id: 100,
    name: "Berna hoca",
    comment: "yerine otur yunus",
    img: "/math-teacher.png"
  },
  {
    id: 101,
    name: "Serap Hoca",
    comment: "Emir eksi aldın",
    img: "/turkish-teacher.png"
  },
  {
    id: 102,
    name: "Veli hoca",
    comment: "Sözlünüze 30 girerim bakın",
    img: "/science-teacher.png"
  },
  {
    id: 103,
    name: "Fatih hoca",
    comment: "Görüp görebileceğiniz en iyi ingilizce hocası",
    img: "/english-teacher.png"
  },
  {
    id: 105,
    name: " Ayşegül hoca ",
    comment: "Oğlum malzemen nerede?",
    img: "/music-teacher.png"

  },
  
  {
    id: 106,
    name: "Esin Hoca",
    comment: "OĞLUMMMM- KIZIIIMMMM-",
    img: "/music-teacher.png"

  },
];

export default function Home() {
  const [show, setShow] = useState(false);
  const [viewMode, setViewMode] = useState("students");

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  const currentData = viewMode === "students" ? studentsData : teachersData;
  const title = viewMode === "students" ? "Öğrenciler" : "Öğretmenler";

  return (
    <>
      <div className="app">
        <div className="container">
          <header>
            <div className="header-content">
              <h1>2024–2025 Eğitim Yılı</h1>
              <h2>Bizim Güzel Sınıfımız</h2>
              <p>
                Birbirinden <strong>özel</strong> öğrencilerimizi ve <strong>değerli</strong> öğretmenlerimizi tanıyalım.
              </p>

              <div className="view-switcher">
                <button
                  className={viewMode === "students" ? "active" : ""}
                  onClick={() => setViewMode("students")}
                >
                  Öğrenciler
                </button>

                <button
                  className={viewMode === "teachers" ? "active" : ""}
                  onClick={() => setViewMode("teachers")}
                >
                  Öğretmenler
                </button>
              </div>
            </div>
          </header>
        </div>

        <main>
          <h2 className="section-title">{title}</h2>
          <section className={`student-list ${show ? "visible" : ""}`}>
            {currentData.map((person) => (
              <article key={person.id} className="student-card">
                <div className="profile">
                  <div className="imgbox">
                    <img src={person.img} alt={person.name} loading="lazy" />
                  </div>
                  <div className="info">
                    <h2>{person.name}</h2>
                    <p>"{person.comment}"</p>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </main>

        <footer>
          <div className="footer-content">
            <p>Bu siteyi emir adlı deli çocuk yaptı </p>
            <div className="class-name">8-E Sınıfı</div>
          </div>
        </footer>
      </div>
    </>
  );
}



      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        .app {
          min-height: 100vh;
          background: linear-gradient(to bottom, #f8f9fa, #e9ecef);
          font-family: 'Nunito', sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
        
        .container {
          width: 100%;
          max-width: 1200px;
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
        }
        
        header {
          background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
          color: white;
          padding: 40px 20px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        header::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 10% 20%, rgba(255,255,255,0.1) 0%, transparent 20%),
            radial-gradient(circle at 90% 80%, rgba(255,255,255,0.1) 0%, transparent 20%);
          z-index: 0;
        }
        
        .header-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
          margin: 0 auto;
        }
        
        header h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 5px;
          letter-spacing: 1px;
          text-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        header h2 {
          font-size: 2.2rem;
          font-weight: 600;
          margin-bottom: 15px;
          color: #ffde7d;
        }
        
        header p {
          font-size: 1.3rem;
          font-weight: 300;
          max-width: 600px;
          margin: 0 auto;
          opacity: 0.9;
          margin-bottom: 10px;
        }
        
        .view-switcher {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-top: 25px;
        }
        
        .view-switcher button {
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid white;
          color: white;
          padding: 12px 30px;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(5px);
        }
        
        .view-switcher button:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-3px);
        }
        
        .view-switcher button.active {
          background: white;
          color: #6a11cb;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        main {
          padding: 40px 20px;
          background: #f8f9fa;
        }
        
        .section-title {
          text-align: center;
          font-size: 2rem;
          color: #343a40;
          margin-bottom: 30px;
          position: relative;
        }
        
        .section-title::after {
          content: "";
          display: block;
          width: 80px;
          height: 4px;
          background: #6a11cb;
          margin: 10px auto;
          border-radius: 2px;
        }
        
        .student-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        
        .student-list.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .student-card {
          background: white;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          border: 1px solid #f0f0f0;
        }
        
        .student-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }
        
        .profile {
          display: flex;
          padding: 25px;
        }
        
        .imgbox {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid #f0f0f0;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          flex-shrink: 0;
          margin-right: 20px;
          transition: all 0.3s ease;
        }
        
        .student-card:hover .imgbox {
          border-color: #6a11cb;
          transform: scale(1.05);
        }
        
        .imgbox img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        
        .info {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        h2 {
          font-size: 1.6rem;
          font-weight: 700;
          color: #343a40;
          margin-bottom: 10px;
        }
        
        p {
          font-size: 1.05rem;
          line-height: 1.6;
          color: #495057;
          font-style: italic;
          position: relative;
          padding-left: 15px;
        }
        
        p::before {
          content: "";
          position: absolute;
          top: -10px;
          left: 0;
          font-size: 3rem;
          color: #6a11cb;
          opacity: 0.2;
          font-family: serif;
        }
        
        footer {
          background: #343a40;
          color: white;
          padding: 30px 20px;
          text-align: center;
        }
        
        .footer-content {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .footer-content p {
          font-size: 1.1rem;
          margin-bottom: 15px;
          color: #e9ecef;
          font-style: normal;
          padding-left: 0;
        }
        
        .footer-content p::before {
          display: none;
        }
        
        .class-name {
          font-size: 1.3rem;
          font-weight: 600;
          color: #ffde7d;
          letter-spacing: 1px;
        }
        
        @media (max-width: 768px) {
          header h1 {
            font-size: 2.3rem;
          }
          
          header h2 {
            font-size: 1.8rem;
          }
          
          .profile {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          
          .imgbox {
            margin-right: 0;
            margin-bottom: 20px;
          }
          
          p::before {
            left: 50%;
            transform: translateX(-50%);
          }
          
          .view-switcher {
            flex-direction: column;
            gap: 10px;
          }
          
          .view-switcher button {
            width: 100%;
            max-width: 250px;
            margin: 0 auto;
          }
        }
        
        @media (max-width: 480px) {
          header {
            padding: 30px 15px;
          }
          
          header h1 {
            font-size: 2rem;
          }
          
          header h2 {
            font-size: 1.5rem;
          }
          
          header p {
            font-size: 1.1rem;
          }
          
          .student-list {
            grid-template-columns: 1fr;
          }
          
          .section-title {
            font-size: 1.7rem;
          }
        }
      `}</style>
    </div>
  );
  }
    
