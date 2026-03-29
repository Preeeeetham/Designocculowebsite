import { motion } from "motion/react";
import { BrandDiagonalBars } from "./components/brand-diagonal-bars";
import { DottedCircle } from "./components/dotted-circle";
import { HeatmapGrid } from "./components/heatmap-grid";
import { ArrowRight } from "lucide-react";
import logoImage from "figma:asset/359ed60898bc5915a5795dfba9ad8432baaf6cf7.png";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 h-20 flex items-center justify-between">
          <img src={logoImage} alt="OCCULO" className="h-8" />
          <button className="px-8 py-3 bg-[#FF6600] text-white hover:bg-[#E65C00] transition-colors" style={{ fontWeight: 600, fontSize: "14px", letterSpacing: "0.02em" }}>
            REQUEST ACCESS
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#FF6600]">
        <BrandDiagonalBars variant="orange" animated={true} />
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-16 py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6 text-white/80 tracking-widest" style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.15em" }}>
                SPATIAL INTELLIGENCE PLATFORM
              </div>
              
              <h1 
                className="mb-8 text-white"
                style={{ 
                  fontSize: "clamp(48px, 7vw, 96px)",
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: "-0.03em"
                }}
              >
                Space. Now intelligent.
              </h1>
              
              <p 
                className="text-white/90 mb-12"
                style={{ 
                  fontSize: "28px",
                  fontWeight: 400,
                  lineHeight: 1.4,
                  letterSpacing: "-0.01em"
                }}
              >
                Absolute environmental awareness.
              </p>

              <div className="flex gap-4 items-center flex-wrap">
                <button className="px-10 py-4 bg-white text-[#FF6600] hover:bg-white/95 transition-colors flex items-center gap-2 shadow-lg" style={{ fontWeight: 600, fontSize: "16px" }}>
                  DEPLOY SYSTEM
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-10 py-4 border-2 border-white text-white hover:bg-white/10 transition-colors" style={{ fontWeight: 600, fontSize: "16px" }}>
                  LEARN MORE
                </button>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="relative">
                <DottedCircle size={450} color="white" animated={true} className="mx-auto" />
                
                {/* Pulsing center indicator */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.6, 0.8, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div>
              <div className="inline-block px-4 py-2 bg-[#FF6600]/10 text-[#FF6600] mb-8 rounded-full" style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em" }}>
                THE PROBLEM
              </div>
              
              <h2 
                className="mb-8 text-[#0a0a0a]"
                style={{ 
                  fontSize: "clamp(36px, 5vw, 64px)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em"
                }}
              >
                Infrastructure operates blind
              </h2>
              
              <div className="space-y-6 text-[#404040]" style={{ fontSize: "19px", lineHeight: 1.7 }}>
                <p>
                  Critical systems lack real-time spatial awareness. Overcrowding builds undetected 
                  until it reaches dangerous levels.
                </p>
                <p>
                  Traditional monitoring provides static snapshots—insufficient for dynamic environments 
                  where conditions evolve in seconds, not minutes.
                </p>
                <p>
                  Safety margins erode invisibly. Response becomes reactive rather than predictive.
                </p>
              </div>
            </div>

            <motion.div
              className="relative h-[600px] bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 p-8">
                <HeatmapGrid />
              </div>
              
              {/* Data overlay */}
              <div className="absolute top-8 left-8 right-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="text-white/60 mb-1" style={{ fontSize: "11px", letterSpacing: "0.1em", fontWeight: 600 }}>
                      DENSITY THRESHOLD
                    </div>
                    <div className="text-[#FF6600]" style={{ fontSize: "48px", fontWeight: 700, lineHeight: 1 }}>
                      87%
                    </div>
                  </div>
                  <div className="px-3 py-1.5 bg-[#FF6600] text-white" style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.05em" }}>
                    ALERT
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "ZONES", value: "12/14" },
                    { label: "FLOW", value: "HIGH" },
                    { label: "STATUS", value: "WARN" }
                  ].map((item, i) => (
                    <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-3">
                      <div className="text-white/50 mb-1" style={{ fontSize: "9px", letterSpacing: "0.1em", fontWeight: 600 }}>
                        {item.label}
                      </div>
                      <div className="text-white" style={{ fontSize: "16px", fontWeight: 700 }}>
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] text-white overflow-hidden">
        <BrandDiagonalBars variant="white" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="text-center mb-24">
            <div className="inline-block px-4 py-2 bg-[#FF6600]/20 text-[#FF6600] mb-8 rounded-full" style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em" }}>
              THE SOLUTION
            </div>
            
            <h2 
              className="mb-8"
              style={{ 
                fontSize: "clamp(36px, 5vw, 72px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.02em"
              }}
            >
              Spatial intelligence.
              <br />
              Not people counting.
            </h2>
            
            <p className="text-white/70 max-w-3xl mx-auto" style={{ fontSize: "22px", lineHeight: 1.6 }}>
              Continuous environmental awareness. Density analysis. Predictive flow modeling.
              <br />
              <span className="text-white">Zero personal data.</span>
            </p>
          </div>

          {/* Key metrics bar */}
          <div className="grid grid-cols-4 gap-px bg-white/10 mb-24">
            {[
              { metric: "< 100ms", label: "Response Time" },
              { metric: "0 PII", label: "Data Collected" },
              { metric: "99.99%", label: "System Uptime" },
              { metric: "Real-time", label: "Processing" }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-[#0a0a0a] p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="mb-2 text-[#FF6600]" style={{ fontSize: "42px", fontWeight: 700, lineHeight: 1 }}>
                  {item.metric}
                </div>
                <div className="text-white/60" style={{ fontSize: "13px", letterSpacing: "0.05em" }}>
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Three pillars - clean layout */}
          <div className="grid lg:grid-cols-3 gap-16">
            {[
              {
                number: "01",
                title: "DENSITY",
                description: "Real-time occupancy monitoring across all zones. Predictive capacity modeling identifies threshold breaches before they occur."
              },
              {
                number: "02",
                title: "DISTRIBUTION",
                description: "Spatial pattern analysis and concentration mapping. Automated bottleneck detection with sub-second precision."
              },
              {
                number: "03",
                title: "FLOW",
                description: "Movement trajectory tracking and velocity analysis. Congestion prediction with automated intervention protocols."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <div className="text-[#FF6600]/40 mb-4" style={{ fontSize: "72px", fontWeight: 700, lineHeight: 1 }}>
                  {item.number}
                </div>
                <h3 className="mb-4 text-[#FF6600]" style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "0.1em" }}>
                  {item.title}
                </h3>
                <p className="text-white/70" style={{ fontSize: "17px", lineHeight: 1.7 }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Horizontal Flow */}
      <section className="relative py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-[#FF6600]/10 text-[#FF6600] mb-8 rounded-full" style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em" }}>
              SYSTEM ARCHITECTURE
            </div>
            
            <h2 
              className="text-[#0a0a0a]"
              style={{ 
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.02em"
              }}
            >
              Sense → Analyze → Act
            </h2>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF6600]/20 via-[#FF6600] to-[#FF6600]/20" />
            
            <div className="grid lg:grid-cols-3 gap-12 relative">
              {[
                {
                  title: "SENSE",
                  icon: "01",
                  description: "Edge sensors capture environmental data with hardware-level encryption. Anonymous spatial signatures only.",
                  specs: ["Multi-modal sensing", "Zero PII capture", "Edge processing"]
                },
                {
                  title: "ANALYZE",
                  icon: "02",
                  description: "Real-time ML inference identifies patterns and predicts density thresholds with sub-50ms latency.",
                  specs: ["Pattern recognition", "Anomaly detection", "Predictive modeling"]
                },
                {
                  title: "ACT",
                  icon: "03",
                  description: "Automated alerts trigger intervention protocols. API-first integration with control systems.",
                  specs: ["Instant notifications", "System integration", "Automated response"]
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                >
                  {/* Icon circle */}
                  <div className="w-20 h-20 rounded-full bg-[#FF6600] text-white flex items-center justify-center mb-8 mx-auto relative z-10" style={{ fontSize: "28px", fontWeight: 700 }}>
                    {item.icon}
                  </div>
                  
                  <h3 className="mb-4 text-center text-[#0a0a0a]" style={{ fontSize: "24px", fontWeight: 700, letterSpacing: "0.1em" }}>
                    {item.title}
                  </h3>
                  
                  <p className="text-[#404040] mb-6 text-center" style={{ fontSize: "16px", lineHeight: 1.7 }}>
                    {item.description}
                  </p>

                  <div className="space-y-2">
                    {item.specs.map((spec, j) => (
                      <div key={j} className="flex items-center gap-2 text-[#737373] justify-center" style={{ fontSize: "14px" }}>
                        <div className="w-1.5 h-1.5 bg-[#FF6600] rounded-full" />
                        {spec}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative py-32 bg-gradient-to-br from-[#FF6600] to-[#FF8533] overflow-hidden">
        <BrandDiagonalBars variant="orange" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-white/20 text-white mb-8 rounded-full" style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em" }}>
              DEPLOYMENT SCENARIOS
            </div>
            
            <h2 
              className="text-white mb-6"
              style={{ 
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.02em"
              }}
            >
              Critical infrastructure
            </h2>
            
            <p className="text-white/90 max-w-3xl mx-auto" style={{ fontSize: "20px", lineHeight: 1.6 }}>
              Mission-critical environments require mission-critical intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: "TRANSIT_001",
                title: "Transit Systems",
                metrics: ["Platform monitoring", "Crowd prediction", "Safety automation"]
              },
              {
                id: "VENUE_002",
                title: "Stadiums & Venues",
                metrics: ["Flow optimization", "Egress control", "Capacity management"]
              },
              {
                id: "VERTICAL_003",
                title: "Elevators",
                metrics: ["Load balancing", "Wait reduction", "Traffic optimization"]
              },
              {
                id: "PUBLIC_004",
                title: "Public Spaces",
                metrics: ["Occupancy tracking", "Density alerts", "Pattern analysis"]
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 hover:bg-white/15 hover:border-white/40 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-white/60 mb-6" style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em" }}>
                  {item.id}
                </div>
                
                <h3 className="mb-6 text-white group-hover:text-white transition-colors" style={{ fontSize: "22px", fontWeight: 700 }}>
                  {item.title}
                </h3>

                <div className="space-y-3">
                  {item.metrics.map((metric, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-white mt-2 flex-shrink-0 rounded-full" />
                      <div className="text-white/80" style={{ fontSize: "14px", lineHeight: 1.5 }}>
                        {metric}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="relative py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-[#FF6600]/10 text-[#FF6600] mb-8 rounded-full" style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em" }}>
              CORE CAPABILITIES
            </div>
            
            <h2 
              className="text-[#0a0a0a]"
              style={{ 
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.02em"
              }}
            >
              Built for critical systems
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-16">
            {[
              {
                title: "Zero Personal Data",
                description: "Complete privacy by design. No PII collection. Anonymous spatial signatures only. GDPR and CCPA compliant from the ground up."
              },
              {
                title: "Retrofit Integration",
                description: "Deploy across existing infrastructure without downtime. Compatible with legacy systems. Minimal installation footprint."
              },
              {
                title: "Real-time Processing",
                description: "Sub-second latency. Continuous monitoring. Instant alerts. Predictive intervention before incidents occur."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <div className="w-24 h-24 rounded-full bg-[#FF6600] flex items-center justify-center mx-auto mb-8">
                  <div className="w-16 h-16 rounded-full border-4 border-white" />
                </div>
                
                <h3 className="mb-4 text-[#0a0a0a]" style={{ fontSize: "28px", fontWeight: 700 }}>
                  {item.title}
                </h3>
                
                <p className="text-[#404040] max-w-sm mx-auto" style={{ fontSize: "17px", lineHeight: 1.7 }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-40 bg-[#0a0a0a] text-white overflow-hidden">
        <BrandDiagonalBars variant="white" />
        
        {/* Dotted circle decoration */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-20">
          <DottedCircle size={600} color="white" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-8 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 
              className="mb-8"
              style={{ 
                fontSize: "clamp(36px, 5vw, 72px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.02em"
              }}
            >
              Make your space intelligent
            </h2>
            
            <p className="text-white/70 mb-12 max-w-2xl mx-auto" style={{ fontSize: "22px", lineHeight: 1.6 }}>
              Deploy infrastructure-grade spatial awareness. Transform your environment into a 
              responsive, predictive system.
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <button className="px-12 py-5 bg-[#FF6600] text-white hover:bg-[#E65C00] transition-colors flex items-center gap-2 shadow-xl" style={{ fontWeight: 600, fontSize: "16px" }}>
                REQUEST DEPLOYMENT
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-12 py-5 border-2 border-white/30 text-white hover:bg-white/5 transition-colors" style={{ fontWeight: 600, fontSize: "16px" }}>
                API DOCUMENTATION
              </button>
            </div>

            {/* System status indicators */}
            <div className="mt-20 flex justify-center gap-16 flex-wrap">
              {[
                { label: "SYSTEM STATUS", value: "OPERATIONAL" },
                { label: "UPTIME", value: "99.99%" },
                { label: "RESPONSE", value: "< 100ms" }
              ].map((item, i) => (
                <div key={i}>
                  <div className="text-white/50 mb-2" style={{ fontSize: "11px", letterSpacing: "0.1em", fontWeight: 600 }}>
                    {item.label}
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <div className="w-2 h-2 bg-[#FF6600] rounded-full animate-pulse" />
                    <div className="text-white" style={{ fontSize: "15px", fontWeight: 700 }}>
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-black/5 py-12">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <img src={logoImage} alt="OCCULO" className="h-8" />
            <p className="text-[#737373]" style={{ fontSize: "14px" }}>
              © 2026 OCCULO. Spatial intelligence infrastructure.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
