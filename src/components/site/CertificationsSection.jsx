import { motion as Motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { MotionSection, Reveal } from "../ui/Reveal";

const certificateUrl = `${import.meta.env.BASE_URL}assets/documents/PowerBiCertificate.pdf`;

function CertificationsSection() {
  return (
    <MotionSection id="certifications" className="section-shell h-full px-6 py-8 sm:px-8 sm:py-10">
      <SectionHeader
        eyebrow="Credentials"
        title="Supplementary learning that supports the product and data work in my portfolio."
        description="A focused set of practical credentials that complement my software engineering work with stronger reporting and analytics fundamentals."
      />

      <Reveal className="mt-8 glass-card overflow-hidden p-5 sm:p-6" delay={0.08}>
        <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(85,114,216,0.1),transparent_40%,rgba(255,255,255,0.34))]" />
        <div className="relative flex h-full flex-col gap-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-500">
                Completed Mar 2023
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-stone-900">
                Microsoft Power BI Certification
              </h3>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                Built practical familiarity with reporting workflows, dashboards,
                visualization, and business intelligence concepts.
              </p>
            </div>

            <a href={certificateUrl} target="_blank" rel="noreferrer" className="button-primary">
              View Certificate
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {["Reporting", "Dashboards", "Business Intelligence"].map((item) => (
              <Motion.div
                key={item}
                whileHover={{ y: -4 }}
                className="stat-card text-center text-sm font-medium text-stone-700"
              >
                {item}
              </Motion.div>
            ))}
          </div>
        </div>
      </Reveal>
    </MotionSection>
  );
}

export default CertificationsSection;
