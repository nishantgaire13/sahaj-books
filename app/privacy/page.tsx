import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "100vh", background: "#f5f5f0", paddingTop: "100px", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 48px" }}>
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "48px", color: "#1a3318", marginBottom: "16px" }}>Privacy Policy</h1>
          <p style={{ fontSize: "14px", color: "#aaa", marginBottom: "40px" }}>Last updated: January 2025</p>
          {[
            { title: "Information we collect", body: "We collect information you provide when contacting us including your name, email address, phone number and business details. We also collect information about how you use our website." },
            { title: "How we use your information", body: "We use your information to provide accounting and compliance services, respond to enquiries, and improve our service. We do not sell your personal data to third parties." },
            { title: "Data security", body: "All client data is stored securely and handled in accordance with UK GDPR requirements. We use industry-standard encryption and access controls to protect your information." },
            { title: "Your rights", body: "You have the right to access, correct or delete your personal data at any time. To exercise these rights, contact us at sahajbooks10@gmail.com." },
            { title: "Contact", body: "For any privacy-related queries, email us at sahajbooks10@gmail.com or write to us at our registered address in Kathmandu, Nepal." },
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