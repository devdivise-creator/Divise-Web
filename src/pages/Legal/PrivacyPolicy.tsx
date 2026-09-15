import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Legal.css'; 

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | DiViSe</title>
        <meta name="description" content="Privacy Policy for DiViSe Consultancy." />
      </Helmet>
      <Navbar />
      <div className="legal-container">
        <h1>Privacy Policy</h1>
        <p className="legal-subtitle">DiViSe Consultancy</p>
        
        <div className="legal-content">
          <h2>Purpose and Scope</h2>
          <p>
            DiViSe Consultancy ("DiViSe", "we", "us" or "our") respects the privacy of individuals who visit our website, communicate with us, submit enquiries, or use website-enabled services. This Privacy Policy explains how DiViSe processes digital personal data in connection with its website and related digital interactions. Where DiViSe determines the purpose and means of processing, it acts as a Data Fiduciary for purposes of the Digital Personal Data Protection Act, 2023 ("DPDP Act").
          </p>

          <h2>Personal Data We May Process</h2>
          <p>
            Depending on the interaction, DiViSe may process name, organization, job title, email address, telephone number, correspondence, consultation or advisory requests, engagement and project information, IP address, browser and device information, timestamps, referring pages, pages viewed, security events, cookie identifiers, and consent choices. Where website-linked services are enabled, DiViSe may also process account identifiers, authentication records, transaction references, support information, CMS usage data, diagnostics, or telemetry associated with an identifiable account.
          </p>

          <h2>How Data Is Collected</h2>
          <p>
            Personal data may be provided directly through contact forms, enquiries, registrations, subscriptions, account interactions, or support requests; collected through necessary website infrastructure and lawfully enabled analytics; or received from a client organization, referral partner, event organizer, or other legitimate business source.
          </p>

          <h2>Purposes of Processing</h2>
          <p>
            DiViSe may process personal data to respond to enquiries and engagement requests; provide, administer and support consultancy, advisory and related professional services; manage client, vendor and partner relationships; operate and secure websites and portals; authenticate users; prevent fraud, misuse and cyberattacks; measure website performance where lawfully enabled; send requested or consent-based communications; comply with contractual, accounting, tax, regulatory, security and recordkeeping obligations; and establish, exercise or defend legal claims.
          </p>

          <h2>Consent and Other Lawful Processing</h2>
          <p>
            Where DiViSe relies on consent, the associated notice will identify the personal data and specified purpose and require a clear affirmative action. Consent may be withdrawn through an accessible mechanism. DiViSe may also process personal data where processing is permitted by another applicable statutory ground, specified legitimate use or legal requirement.
          </p>

          <h2>Data Minimisation and Accuracy</h2>
          <p>
            DiViSe seeks to collect only personal data reasonably necessary for the specified purpose and to keep relevant personal data accurate and complete where it is likely to be used to make a decision affecting the Data Principal or disclosed to another Data Fiduciary.
          </p>

          <h2>Processors and Disclosure</h2>
          <p>
            DiViSe may disclose personal data on a need-to-know basis to authorized personnel, appropriate affiliates, hosting, cloud, cybersecurity, CRM, communications, support and professional-service providers, payment processors where applicable, necessary business partners, and regulators or authorities where required or permitted by law. Processors acting for DiViSe should be subject to appropriate contractual confidentiality, security, purpose-limitation, deletion/return, and incident-notification obligations.
          </p>

          <h2>Cross-Border Processing</h2>
          <p>
            DiViSe may use service providers whose systems or personnel are outside India. Such processing will be managed in accordance with the DPDP Act, applicable rules, restrictions notified by the Central Government and other applicable Indian law.
          </p>

          <h2>Retention</h2>
          <p>
            DiViSe will retain personal data only for as long as reasonably necessary for the purpose for which it was processed, applicable legal or regulatory obligations, audit, dispute resolution, or legal claims, and will thereafter erase or anonymize it subject to lawful retention exceptions. Applicable ICT security logs will be retained consistently with CERT-In requirements.
          </p>

          <h2>Security</h2>
          <p>
            DiViSe will implement reasonable technical and organizational safeguards proportionate to risk, including access control, authentication, least privilege, encryption in transit, secure configuration, vulnerability and patch management, logging and monitoring, backup and recovery, vendor security controls, and incident-response procedures.
          </p>

          <h2>Personal Data Breach</h2>
          <p>
            DiViSe will maintain procedures to identify, contain, investigate, remediate, and document personal data breaches and will make notifications to affected Data Principals, the Data Protection Board of India, CERT-In or other authorities where and when required by applicable law.
          </p>

          <h2>Data Principal Rights</h2>
          <p>
            Subject to the applicable provisions of the DPDP Act and their commencement, Data Principals may have rights to obtain information about processing, seek correction, completion, updating or erasure, withdraw consent where applicable, use DiViSe's grievance-redressal mechanism and make a nomination in the circumstances recognized by law. DiViSe may apply proportionate identity verification and lawful exceptions.
          </p>

          <h2>Children</h2>
          <p>
            The public website is directed principally to businesses, professionals and adult users and is not intended to solicit personal data from children. Where DiViSe knowingly processes personal data of a child in a governed context, DiViSe will apply the requirements applicable under law unless an exemption applies.
          </p>

          <h2>Cookies and Similar Technologies</h2>
          <p>
            DiViSe uses or may use cookies and similar technologies as described in the Cookie Policy. Non-essential technologies should be activated only consistently with the applicable notice and recorded user choice where consent is required.
          </p>

          <h2>Changes</h2>
          <p>
            DiViSe may update this Privacy Policy to reflect legal, regulatory, technological, or business changes. The current version will identify its effective or last-updated date. Material changes affecting consent-based processing will be handled with appropriate notice and, where required, fresh consent.
          </p>

          <h2>Privacy and Grievance Channel</h2>
          <p>
            Data Principal requests and privacy grievances may be submitted to <a href="mailto:dilipjain@gmail.com">dilipjain@gmail.com</a>.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
