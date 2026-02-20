export default function TermsOfServicePage() {
  return (
    <div className="container py-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Terms of Service</h1>
          <p className="mt-4 text-lg text-foreground/70">
            Clear guidelines for using our services. Please read these terms carefully before proceeding.
          </p>
          <p className="text-sm text-muted-foreground">Last Updated: 16th February 2026</p>
        </div>

        <div className="space-y-12">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold border-b border-border/20 pb-2">Introduction</h2>
            <p>
              To guarantee a premium, stable, and fair experience for all Rex Cloud clients, we have established the following Terms of Service. These guidelines are designed to be transparent and easy to understand. In this document, "Service" refers to any hosting solution or product rented from us, and "Company," "We," or "Us" refers to Rex Cloud. By using our platforms, you agree to these terms. If any point requires clarification, our support team is available to assist you.
            </p>
            <p>
              By purchasing or using any service from Rex Cloud, you acknowledge and agree to be bound by these Terms of Service. We reserve the right to modify these terms at any time. While we aim to notify users of major changes, it is your responsibility to review this document periodically. Continued use of our services following any changes constitutes acceptance of the new terms. Rex Cloud reserves the right to suspend or terminate services for violations of these terms, with or without prior notice.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold border-b border-border/20 pb-2">General Terms</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Responsible Use:</strong> We expect all clients to exercise good judgment. If an activity seems illegal, harmful, or malicious, it is likely prohibited.
              </li>
              <li>
                <strong>Right to Terminate:</strong> Rex Cloud retains the authority to terminate any service at our sole discretion if it poses a risk to our infrastructure or reputation, potentially without refund.
              </li>
              <li>
                <strong>Legal Prescriptions:</strong> You may not use our services for any activity that is illegal in your jurisdiction or under International Law.
              </li>
              <li>
                <strong>Non-Interference:</strong> Exploiting services to disrupt Rex Cloud's operations or attack third parties (DDoS, scanning, etc.) is strictly forbidden.
              </li>
              <li>
                <strong>Age Requirement:</strong> You must be at least 13 years old to use our services. Users aged 13-17 require explicit parental or guardian consent.
              </li>
              <li>
                <strong>VPS Disclaimer:</strong> VPS services operate on shared physical infrastructure; allocated resources are provided under fair-use and performance may vary during exceptional system load.
              </li>
            </ul>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold border-b border-border/20 pb-2">Minecraft Hosting Policies</h2>
            <h3 className="text-xl font-semibold mt-4">Usage Guidelines</h3>
            <p>
              By hosting a Minecraft server with us, you agree to comply with Mojang's EULA and our internal guidelines. Servers violating these rules may be suspended until compliant.
            </p>
            
            <h3 className="text-xl font-semibold mt-6">Fair Usage Policy</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Resource Allocation:</strong> While we do not impose hard limits on CPU or bandwidth for standard plans, these resources are shared. Abusive usage (e.g., crypto-mining, sustained 100% CPU load) that impacts other clients will be restricted.
              </li>
              <li>
                <strong>Storage:</strong> "Unlimited" storage implies storage for active server files. It is not a repository for personal media, backups unrelated to the server, or archived data. A soft limit of 100GB applies for fair use.
              </li>
              <li>
                <strong>Backups:</strong> We provide 3 slots for internal backups (max 15GB total). Critical data should be offloaded to external storage.
              </li>
              <li>
                <strong>Map Renders:</strong> Dynmap/Bluemap data files should not exceed 10GB. We enforce low-resolution render settings to prevent disk exhaustion.
              </li>
              <li>
                <strong>World Generation:</strong> World pre-generation is capped at a 10,000 block radius. Massive pre-generated maps uploaded from external sources (&gt;5GB) are discouraged and may be flagged.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">Management Services</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>The Server Management addon is tied to a specific service and billing cycle. It is non-transferable.</li>
              <li>Requests must be submitted via support tickets with clear instructions.</li>
              <li>
                <strong>Scope of Support:</strong> Our team handles server stability, updates, and core configuration. We do not provide custom plugin development, map building, or complex permission setups.
              </li>
              <li>We reserve the right to decline management requests that fall outside reasonable support scope.</li>
            </ul>
          </section>

          <section className="space-y-4">
              <h2 className="text-2xl font-bold border-b border-border/20 pb-2">Service Fulfillment</h2>
              <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Instant Setup:</strong> Most services are provisioned instantly upon payment confirmation. However, high-demand periods may cause slight delays.</li>
                  <li><strong>Fast-Track Support:</strong> This one-time purchase prioritizes your ticket. Note that if the ticket subject changes significantly, the priority status may be voided.</li>
              </ul>
          </section>

          <section className="space-y-4">
              <h2 className="text-2xl font-bold border-b border-border/20 pb-2">Account Security</h2>
              <ul className="list-disc pl-6 space-y-3">
                  <li>You are solely responsible for maintaining the confidentiality of your credentials.</li>
                  <li>Access sharing should be done via the Sub-Account feature, not by sharing passwords.</li>
                  <li>You are liable for all actions performed under your account. Failure to report unauthorized access immediately may result in liability.</li>
                  <li>Attempting to probe, scan, or exploit vulnerabilities in our system or other user systems will result in immediate termination.</li>
              </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold border-b border-border/20 pb-2">Payments & Billing</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Services are activated only after full payment is received.</li>
              <li><strong>Late Payments:</strong> We offer a 24-hour grace period after invoice due dates before suspension. Services are terminated and data wiped 30 days after non-payment.</li>
              <li><strong>Disputes:</strong> Initiating a payment dispute or chargeback will result in immediate account suspension. Please contact support to resolve billing issues first.</li>
              <li>Account credits are non-refundable and cannot be withdrawn to a bank account.</li>
            </ul>
          </section>
          
          <section className="space-y-4">
              <h2 className="text-2xl font-bold border-b border-border/20 pb-2">Refund Policy</h2>
              <ul className="list-disc pl-6 space-y-3">
                  <li>We stand by our quality with a <strong>24-Hour Money-Back Guarantee</strong> for all new service orders.</li>
                  <li>Refund requests must be submitted via a support ticket within 24 hours of the initial purchase.</li>
                  <li><strong>Exclusions:</strong> Renewals, dedicated servers, domains, software licenses, and Gift Cards are non-refundable.</li>
                  <li>Accounts with a history of abuse or active disputes are ineligible for refunds.</li>
                  <li>Refunds are typically processed to the original payment method or as account credit, at our discretion.</li>
              </ul>
          </section>

          <section className="space-y-4">
              <h2 className="text-2xl font-bold border-b border-border/20 pb-2">Cancellations</h2>
              <ul className="list-disc pl-6 space-y-3">
                  <li>You may cancel your service at any time via the Client Area. Cancellation requests can be set to "Immediate" or "End of Billing Period."</li>
                  <li><strong>Note:</strong> Cancelling a service with us does not automatically cancel external subscriptions (e.g., PayPal automatic payments). You must manually cancel these in your payment provider's dashboard.</li>
              </ul>
          </section>

          <section className="space-y-4">
              <h2 className="text-2xl font-bold border-b border-border/20 pb-2">Affiliates</h2>
              <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Payouts:</strong> Affiliate earnings can be withdrawn to PayPal (subject to a 10% fee) or Account Credit (with a 10% bonus).</li>
                  <li><strong>Maturation:</strong> Commissions are pending for 35 days to account for potential refunds.</li>
                  <li><strong>Eligibility:</strong> Commissions apply only to new customer signups. Self-referrals or fraudulent activity will result in the forfeiture of all earnings.</li>
              </ul>
          </section>

          <section className="space-y-4">
              <h2 className="text-2xl font-bold border-b border-border/20 pb-2">Data Privacy</h2>
              <ul className="list-disc pl-6 space-y-3">
                  <li>We collect minimal data (IP address, browser type) necessary for security and service provision.</li>
                  <li>Cookies are utilized to maintain session states in our Client Area and Control Panel.</li>
                  <li>We do not sell your personal data. Data is used strictly for order fulfillment and legal compliance. You may request account deletion via support.</li>
              </ul>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold border-b border-border/20 pb-2">Violations</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Rex Cloud enforces a zero-tolerance policy for violations of these terms.</li>
              <li>Any service found to be used for illegal activities, attacks, or severe abuse will be terminated immediately without refund.</li>
              <li>We reserve the right to report serious illegal activities to relevant authorities.</li>
            </ul>
          </section>

          <section className="space-y-4">
              <h2 className="text-2xl font-bold border-b border-border/20 pb-2">Reporting Abuse</h2>
              <p>If you encounter a Rex Cloud service being used maliciously, please report it immediately to <a href="mailto:rexcloudonline@gmail.com" className="text-primary hover:underline">rexcloudonline@gmail.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
