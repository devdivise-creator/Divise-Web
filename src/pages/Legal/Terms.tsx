import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Legal.css'; 

const Terms: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | DiViSe</title>
        <meta name="description" content="Terms of Service for DiViSe Consultancy." />
      </Helmet>
      <Navbar />
      <div className="legal-container">
        <h1>Terms of Service</h1>
        <p className="legal-subtitle">DiViSe Consultancy</p>
        <div className="legal-content">
          <h2>Acceptance</h2>
          <p>
            These Terms govern access to and use of our website and DiViSe-controlled website content. By accessing or using the website, you agree to these Terms.
          </p>

          <h2>Website Purpose</h2>
          <p>
            The website provides general corporate, advisory, service, and consulting information. Website content does not by itself constitute a binding proposal, professional opinion, certification, warranty, offer, or contract unless expressly incorporated into a separately executed written agreement.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            Unless otherwise stated, website text, graphics, software, service names, designs, photographs, diagrams, trademarks, logos, documentation, and other content are owned by or licensed to DiViSe and protected by applicable intellectual-property laws. Access to the website does not transfer ownership or grant a licence beyond the limited right to use the website for lawful informational and business purposes.
          </p>

          <h2>Prohibited Conduct</h2>
          <p>
            Users must not attempt unauthorized access; introduce malicious code; interfere with security, integrity, or availability; unlawfully scrape or harvest personal data; impersonate DiViSe or another person; bypass access controls; commercially exploit protected content without permission; or use the website for unlawful, fraudulent, or abusive activity.
          </p>

          <h2>Consulting and Advisory Information</h2>
          <p>
            Consulting, advisory, strategy, and related professional information presented on the website may be simplified for general presentation. Actual scope of work, methodology, deliverables, timelines, and outcomes are governed by the applicable engagement letter, proposal, contract, and scope-of-work documentation agreed with DiViSe.
          </p>

          <h2>AI, Analytics and Performance Statements</h2>
          <p>
            References to AI-powered, intelligent, predictive, prescriptive, optimization or analytics capabilities describe functionality at a general level. Actual results depend on configuration, available data, integration, operating conditions, and contractual scope. Website statements do not guarantee any particular result, efficiency gain, commercial outcome, or predictive accuracy.
          </p>

          <h2>User Submissions</h2>
          <p>
            A user submitting information represents that the user has authority to provide it and that submission does not violate law or third-party rights. Confidential business, financial, or technical information, credentials, payment-card data, or other sensitive information should not be submitted through a general website form unless DiViSe has designated that channel for such information.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            Links, integrations or references to third-party websites, standards, products, or services do not constitute endorsement unless expressly stated. Third-party services are governed by their own terms and policies.
          </p>

          <h2>Privacy</h2>
          <p>
            Personal data is processed in accordance with DiViSe's Privacy Policy, Cookie Policy, and applicable just-in-time notices.
          </p>

          <h2>Availability</h2>
          <p>
            DiViSe may modify, suspend, maintain, or discontinue website content or functionality. DiViSe does not guarantee uninterrupted or error-free availability.
          </p>

          <h2>Disclaimer of Warranties</h2>
          <p>
            To the maximum extent permitted by applicable law, the website and general website content are provided on an informational and as-available basis. No warranty applies except as expressly stated in an applicable written agreement or where a warranty cannot lawfully be excluded.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, DiViSe will not be liable for indirect, incidental, special, or consequential loss arising solely from reliance on general website content or inability to access the website. Nothing in these Terms excludes or limits liability that cannot lawfully be excluded or limited.
          </p>

          <h2>Governing Law and Jurisdiction</h2>
          <p>
            These Terms are governed by the laws of India. Subject to mandatory statutory forums and dispute-resolution requirements, courts at Mumbai, Maharashtra, India will have jurisdiction.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            DiViSe may revise these Terms from time to time. Continued use after publication of revised Terms constitutes acceptance to the extent permitted by applicable law.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Terms;
