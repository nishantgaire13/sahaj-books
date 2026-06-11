import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "100vh", background: "#f5f5f0", paddingTop: "100px", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 48px" }}>
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "48px", color: "#1a3318", marginBottom: "16px" }}>Terms of Service</h1>
          <p style={{ fontSize: "14px", color: "#aaa", marginBottom: "40px" }}>Last updated: January 2025</p>
          {[
            { title: "Services", body: "SahajBooks provides accounting and compliance services to UK businesses on a remote basis. All services are subject to a separate engagement letter outlining scope, fees and responsibilities." },
            { title: "Payment", body: "Fees are due monthly in advance. We reserve the right to suspend services for non-payment after 14 days notice." },
            { title: "Client responsibilities", body: "Clients are responsible for providing accurate and complete information in a timely manner. SahajBooks accepts no liability for errors arising from incomplete or incorrect information provided by the client." },
            { title: "Confidentiality", body: "We treat all client information as strictly confidential and will not disclose it to third parties except as required by law or with your explicit consent." },
            { title: "Governing law", body: "These terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales." },
          ].map((section) => (
            <div key={section.title} style={{ marginBottom: "36px" }}>
              <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "24px", color: "#111", marginBottom: "12px" }}>{section.title}</h2>
              <p style={{ fontSize: "15px", color: "#6b6b6b", lineHeight: 1.8 }}>{section.body}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}