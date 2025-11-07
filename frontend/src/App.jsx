import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

// ====== PROFESSIONAL UI (single-file, no extra deps) ======
// Polished design system + tasteful imagery via inline SVGs and gradients
function useInjectStyles() {
  React.useEffect(() => {
    const css = `
    :root {
      --bg: #0b0f1a;             /* deep indigo */
      --bg-2: #0d1426;            /* layered depth */
      --panel: #0f1b33;           /* glass panel */
      --line: rgba(255,255,255,.08);
      --muted: #95a3b8;
      --text: #eaf0ff;
      --title: #f7f9ff;
      --primary: #7c5cff;         /* violet */
      --teal: #49d0d0;            /* teal */
      --pink: #ff6ea8;            /* accent */
      --radius: 18px;
      --shadow: 0 20px 50px rgba(0,0,0,.35), inset 0 0 0 1px rgba(255,255,255,.035);
    }
    *{box-sizing:border-box}
    html,body,#root{height:100%}
    body{margin:0;background:
      radial-gradient(1200px 700px at 10% -10%, rgba(124,92,255,.18), transparent 60%),
      radial-gradient(1200px 800px at 110% 0%, rgba(73,208,208,.18), transparent 50%),
      linear-gradient(180deg, var(--bg), var(--bg-2));
      color:var(--text);font:500 15px/1.55 ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto}

    /* Shell */
    .shell{display:grid;grid-template-columns: 280px 1fr;min-height:100vh}
    .sidebar{position:sticky;top:0;height:100vh;padding:26px;background:linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.02));
      border-right:1px solid var(--line);backdrop-filter: blur(10px)}
    .logo{display:flex;gap:12px;align-items:center;margin-bottom:30px}
    .badge{width:40px;height:40px;border-radius:12px;background:conic-gradient(from 90deg,var(--primary),var(--teal));box-shadow:var(--shadow)}
    .brand{font-weight:800;letter-spacing:.4px}

    .nav{display:flex;flex-direction:column;gap:8px;margin-top:8px}
    .nav a{padding:10px 12px;border-radius:12px;color:var(--text);text-decoration:none;display:flex;gap:10px;align-items:center}
    .nav a:hover{background:rgba(255,255,255,.05)}
    .nav a.is-active{background:rgba(255,255,255,.08);outline:1px solid var(--line)}

    .content{padding:26px}

    /* Header */
    .header{display:flex;align-items:center;justify-content:space-between;margin-bottom:22px}
    .search{display:flex;align-items:center;gap:10px;background:rgba(255,255,255,.06);padding:10px 14px;border-radius:14px;min-width:340px;box-shadow:var(--shadow)}
    .search input{all:unset;color:var(--text);width:260px}
    .user{display:flex;align-items:center;gap:10px}
    .avatar{width:36px;height:36px;border-radius:999px;background:linear-gradient(135deg,#4d6aff,#63e,#2be);box-shadow:var(--shadow)}

    /* Hero */
    .hero{position:relative;overflow:hidden;border-radius:22px;background:
      linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.02));
      border:1px solid var(--line);box-shadow:var(--shadow);}
    .hero-inner{display:grid;grid-template-columns:1.2fr .8fr;align-items:center}
    .hero-copy{padding:24px 24px 10px 24px}
    .hero h1{margin:0 0 8px 0;color:var(--title);letter-spacing:.2px}
    .hero p{margin:0;color:var(--muted)}
    .hero-art{height:220px;display:grid;place-items:center}

    /* Grid */
    .grid{display:grid;grid-template-columns: repeat(12, 1fr); gap:18px;margin-top:18px}
    .card{grid-column: span 12;background:var(--panel);border-radius:var(--radius);padding:18px;box-shadow:var(--shadow)}
    .card h3{margin:0 0 8px 0}
    @media (min-width:980px){
      .card.span-4{grid-column: span 4}
      .card.span-6{grid-column: span 6}
      .card.span-8{grid-column: span 8}
      .card.span-12{grid-column: span 12}
    }

    /* KPI */
    .kpi{display:flex;gap:16px;flex-wrap:wrap}
    .kpi .box{padding:14px;border-radius:14px;background:rgba(255,255,255,.06);min-width:140px;flex:1;text-align:left}
    .kpi .box .value{font-size:28px;font-weight:800}

    /* Services Gallery */
    .services{display:grid;grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));gap:14px}
    .service{border-radius:16px;border:1px solid var(--line);overflow:hidden;background:linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.02));box-shadow:var(--shadow)}
    .service-img{height:110px;background:radial-gradient(200px 120px at 30% 30%, rgba(124,92,255,.35), transparent), radial-gradient(220px 140px at 80% 40%, rgba(73,208,208,.35), transparent)}
    .service-body{padding:14px;display:flex;align-items:center;justify-content:space-between}
    .badge-chip{display:inline-flex;gap:6px;align-items:center;padding:6px 10px;border-radius:999px;background:rgba(255,255,255,.06);font-size:12px}

    /* Table */
    table{width:100%;border-collapse:collapse}
    th,td{padding:12px;border-bottom:1px solid var(--line);text-align:left}
    th{color:var(--muted);font-weight:600}
    .pill{padding:6px 10px;border-radius:999px;font-size:12px;display:inline-block}
    .pill.granted{background:rgba(33,209,159,.15);color:#8cf3d6;outline:1px solid rgba(33,209,159,.25)}
    .pill.revoked{background:rgba(255,92,122,.15);color:#ffb2c0;outline:1px solid rgba(255,92,122,.25)}

    /* Buttons */
    .btn{cursor:pointer;background:linear-gradient(135deg,var(--primary),var(--teal));border:none;color:white;padding:10px 14px;border-radius:12px;box-shadow:var(--shadow)}
    .btn.ghost{background:transparent;outline:1px solid var(--line)}

    /* Modal */
    .modal{position:fixed;inset:0;display:grid;place-items:center;background:rgba(0,0,0,.45)}
    .modal-card{width:min(560px, calc(100% - 32px));background:var(--panel);border-radius:20px;box-shadow:var(--shadow);padding:18px}
    .muted{color:var(--muted)}
    `;
    const style = document.createElement("style");
    style.setAttribute("data-consenthub-pro-style","true");
    style.innerHTML = css;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);
}

// SVG: Abstract 3D device mock (for hero art)
function HeroArt(){
  return (
    <svg width="100%" height="100%" viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Abstract interface art">
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0%" stopColor="#7c5cff" stopOpacity=".9"/>
          <stop offset="100%" stopColor="#49d0d0" stopOpacity=".9"/>
        </linearGradient>
        <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="10"/>
        </filter>
      </defs>
      <g filter="url(#blur)">
        <rect x="30" y="40" rx="18" width="340" height="140" fill="url(#g1)" opacity=".18" />
      </g>
      <rect x="58" y="58" rx="14" width="284" height="104" fill="#0f1b33" stroke="rgba(255,255,255,.08)" />
      <rect x="74" y="76" rx="8" width="80" height="14" fill="#7c5cff" opacity=".8"/>
      <rect x="74" y="98" rx="8" width="140" height="10" fill="rgba(255,255,255,.15)"/>
      <rect x="74" y="114" rx="8" width="110" height="10" fill="rgba(255,255,255,.1)"/>
      <rect x="240" y="96" rx="10" width="82" height="30" fill="#49d0d0" opacity=".9"/>
    </svg>
  );
}

const IconSearch = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path>
  </svg>
);
const IconShield = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);
const IconBolt = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"></path>
  </svg>
);

export default function App(){
  useInjectStyles();
  const [services, setServices] = useState([]);
  const [consents, setConsents] = useState([]);
  const [q, setQ] = useState("");
  const [showService, setShowService] = useState(null);
  const [toast, setToast] = useState("");

  React.useEffect(()=>{
    axios.get('/api/services').then(r=>setServices(r.data)).catch(()=>{});
    axios.get('/api/consents').then(r=>setConsents(r.data)).catch(()=>{});
  },[]);

  const filtered = useMemo(()=> q ? services.filter(s=>s.name?.toLowerCase().includes(q.toLowerCase())) : services, [services,q]);

  async function seed(){
    await axios.post('/api/services/seed');
    const { data } = await axios.get('/api/services');
    setServices(data); announce('Demo services added');
  }
  async function grant(serviceId){
    const res = await axios.post('/api/consents',{ user_id:'demo-user', service_id: serviceId, scopes:['basic'], status:'granted' });
    setConsents([res.data, ...consents]); announce('Access granted');
  }
  async function revoke(id){
    await axios.post(`/api/consents/${id}/revoke`);
    setConsents(consents.map(c=> c.id===id ? {...c, status:'revoked'}: c)); announce('Access revoked');
  }
  function announce(msg){ setToast(msg); setTimeout(()=>setToast(""),1500); }

  return (
    <div className="shell">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <div className="badge"/>
          <div>
            <div className="brand">ConsentHub</div>
            <div className="muted" style={{fontSize:12}}>Unified Permission Wallet</div>
          </div>
        </div>
        <nav className="nav">
          <a className="is-active" href="#dashboard"><IconShield/> Dashboard</a>
          <a href="#services"><IconBolt/> Services</a>
          <a href="#consents"><IconShield/> Consents</a>
          <a href="#receipts"><IconShield/> Receipts</a>
          <a href="#settings"><IconShield/> Settings</a>
        </nav>
      </aside>

      {/* Main */}
      <main className="content">
        {/* Header */}
        <div className="header">
          <div className="search"><IconSearch/><input placeholder="Search services…" value={q} onChange={e=>setQ(e.target.value)} /></div>
          <div className="user">
            <button className="btn ghost" onClick={seed}>Seed Demo</button>
            <div className="avatar"/>
          </div>
        </div>

        {/* Hero */}
        <section className="hero">
          <div className="hero-inner">
            <div className="hero-copy">
              <h1>Professional Privacy Dashboard</h1>
              <p>Grant, time-limit, and revoke access across all services. Every access writes a signed data-use receipt.</p>
              <div style={{display:'flex',gap:10, marginTop:14}}>
                <button className="btn">Create Policy</button>
                <button className="btn ghost">Explore Receipts</button>
              </div>
            </div>
            <div className="hero-art"><HeroArt/></div>
          </div>
        </section>

        {/* Grid */}
        <section className="grid">
          {/* KPI */}
          <div className="card span-4">
            <h3>Overview</h3>
            <div className="kpi">
              <div className="box"><div className="muted">Services</div><div className="value">{services.length}</div></div>
              <div className="box"><div className="muted">Consents</div><div className="value">{consents.length}</div></div>
              <div className="box"><div className="muted">Granted</div><div className="value">{consents.filter(c=>c.status==='granted').length}</div></div>
            </div>
          </div>

          {/* Services Gallery */}
          <div className="card span-8" id="services">
            <h3>Services Marketplace</h3>
            <div className="services">
              {filtered.map(s => (
                <article className="service" key={s.id}>
                  <div className="service-img"/>
                  <div className="service-body">
                    <div>
                      <div style={{fontWeight:700}}>{s.name}</div>
                      <div className="muted" style={{fontSize:12}}>Scopes: {(s.scopes || []).join(', ') || '—'}</div>
                    </div>
                    <div style={{display:'flex',gap:10}}>
                      <span className="badge-chip">New</span>
                      <button className="btn" onClick={()=>grant(s.id)}>Grant</button>
                    </div>
                  </div>
                </article>
              ))}
              {filtered.length === 0 && (
                <div className="muted">No services. Click <b>Seed Demo</b> to add sample services.</div>
              )}
            </div>
          </div>

          {/* Consents */}
          <div className="card span-12" id="consents">
            <h3>My Consents</h3>
            <table>
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Scopes</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {consents.map(c => (
                  <tr key={c.id}>
                    <td><a href="#" onClick={(e)=>{e.preventDefault(); setShowService(c.service_id);}}>{c.service_id}</a></td>
                    <td>{(c.scopes || []).join(', ')}</td>
                    <td><span className={`pill ${c.status}`}>{c.status}</span></td>
                    <td>{c.status==='granted' ? <button className="btn ghost" onClick={()=>revoke(c.id)}>Revoke</button> : <span className="muted">—</span>}</td>
                  </tr>
                ))}
                {consents.length===0 && <tr><td colSpan={4} className="muted">No consents yet</td></tr>}
              </tbody>
            </table>
          </div>
        </section>

        {/* Modal: simple service info */}
        {showService && (
          <div className="modal" onClick={()=>setShowService(null)}>
            <div className="modal-card" onClick={e=>e.stopPropagation()}>
              <h3 style={{marginTop:0}}>Service: {showService}</h3>
              <p className="muted">This is a placeholder for richer detail: scopes, data categories, last access receipts, and policy suggestions.</p>
              <div style={{display:'flex',justifyContent:'flex-end',gap:10,marginTop:12}}>
                <button className="btn ghost" onClick={()=>setShowService(null)}>Close</button>
                <button className="btn" onClick={()=>setShowService(null)}>Open Details</button>
              </div>
            </div>
          </div>
        )}
      </main>

      {toast && <div className="toast" style={{position:'fixed',right:18,bottom:18,background:'var(--panel)',border:'1px solid var(--line)',borderRadius:12,padding:'10px 14px',boxShadow:'var(--shadow)'}}>{toast}</div>}
    </div>
  );
}
