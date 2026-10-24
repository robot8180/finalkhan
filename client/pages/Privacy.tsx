export default function Privacy() {
  return (
    <div className="py-12 md:py-20 bg-background">
      <div className="container max-w-4xl">
        <h1 className="text-3xl font-extrabold text-foreground mb-4">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last Updated: January 2025</p>

        <div className="space-y-6 text-foreground/80 leading-relaxed text-sm">
          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">1. Overview</h2>
            <p>
              At QuickROFix (operated under RO Services Bengaluru, accessible from bookroservice.com), your privacy is of paramount importance to us. This Privacy Policy document outlines the types of information that is collected and recorded by QuickROFix and how we use it.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">2. Information We Collect</h2>
            <p>
              When you book a service, call our helpline, or fill out our online request forms, we may collect personally identifiable information including:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Name and contact phone number.</li>
              <li>Residential or commercial service address in Bengaluru and nearby areas.</li>
              <li>Water purifier make, model, and reported issues.</li>
              <li>Feedback and service rating data.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">3. How We Use Your Information</h2>
            <p>We use the collected information solely for the following purposes:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Dispatching certified technicians to your doorstep at your requested time.</li>
              <li>Providing customer support, warranty validation, and AMC scheduling.</li>
              <li>Sending service confirmation and invoice receipts.</li>
              <li>Improving customer experience and service quality.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">4. Data Protection &amp; Security</h2>
            <p>
              We implement industry-standard security measures to safeguard your contact details. We do not sell, rent, or lease your personal information to third-party marketing companies. Data is only accessible to verified technicians handling your service request.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">5. Contact Us</h2>
            <p>
              If you have any questions or require more information about our Privacy Policy, do not hesitate to contact us at:
            </p>
            <p className="mt-2 font-medium">
              Email: info@bookroservice.com<br />
              Helpline: +918088275348<br />
              Location: Bengaluru, Karnataka, India
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
