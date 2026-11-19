import React from 'react';

const PrivacyPolicy = () => (
  <article className="LegalPage">
    <header>
      <h1>Privacy Policy</h1>
      <p className="LegalPage-meta">Last Updated: November 19, 2026</p>
      <p className="LegalPage-subtitle">
        This Privacy Policy explains how Lockpray ("the App", "we", "our") handles user data, permissions,
        analytics, subscriptions, and third-party services.
      </p>
    </header>

    <section>
      <h2>1. Information We Collect</h2>
      <h3>1.1 Personal Information</h3>
      <p>
        We do not ask for your name, email address, or phone number, and you do not create an account. RevenueCat gives
        each installation of the App a random user ID. We use this ID to connect your usage data and subscription
        status. It does not contain your name or contact details.
      </p>

      <h3>1.2 Automatically Collected Data</h3>
      <p>
        To improve the App's performance, stability, and user experience, we use Google Firebase Analytics and PostHog.
        These services may automatically collect information such as:
      </p>
      <ul>
        <li>app interactions such as feature usage and button taps</li>
        <li>device type and operating system version</li>
        <li>approximate location (country and city), estimated from your IP address; we do not store the IP address</li>
        <li>app performance metrics and crash diagnostics</li>
        <li>screen views and session duration</li>
        <li>the app version and when the App was installed, opened, or closed</li>
      </ul>
      <p>We also send PostHog the following details about how you use the App, linked to the random user ID above:</p>
      <ul>
        <li>whether you have an active subscription, which plan it is, and when it ends</li>
        <li>the App language and your device language</li>
        <li>whether you finished onboarding and how long apps stay unlocked after a prayer</li>
        <li>how many prayers you have completed, your current prayer streak, and whether you prayed today</li>
        <li>how many custom prayers you have added</li>
        <li>how many apps and app categories you have blocked</li>
      </ul>
      <p>
        We do not send the text of your prayers or the names of the apps you block. Your list of blocked apps is managed
        by Apple's Screen Time and stays on your device.
      </p>
      <p>
        Additionally, subscription-related events and entitlement status may be processed through RevenueCat for
        purchase verification and subscription management purposes.
      </p>
      <p>This data does not include your name or contact details, and we use it only to improve the App.</p>

      <h3>1.3 Advertising</h3>
      <p>The App does not display personalized advertising and does not collect advertising identifiers such as IDFA.</p>
    </section>

    <section>
      <h2>2. Subscriptions and Payments</h2>
      <p>The App offers optional weekly, monthly, and yearly subscription plans.</p>
      <p>All purchases are processed securely through Apple's App Store.</p>
      <p>
        To manage subscriptions, verify purchase status, and grant access to premium features, the App uses RevenueCat,
        a third-party subscription management service.
      </p>
      <p>
        We do not access, store, or process any payment or credit card information. All payment details are handled
        exclusively by Apple.
      </p>
      <p>You may manage or cancel your subscriptions at any time through your App Store account settings.</p>
    </section>

    <section>
      <h2>3. Data Security</h2>
      <p>
        Your prayers, prayer history, and blocked apps are stored on your device. Usage data sent to PostHog is stored on
        PostHog's servers in the European Union.
      </p>
      <p>
        We apply reasonable technical and organizational measures to protect data against unauthorized access, loss, or
        misuse.
      </p>
    </section>

    <section>
      <h2>4. Your Rights</h2>
      <p>You can stop all analytics collection by uninstalling the App.</p>
      <p>
        To have the usage data linked to your installation deleted, email us at the address in section 8 and we will
        delete it.
      </p>
      <p>When the App is uninstalled, all locally stored data is permanently deleted from your device.</p>
    </section>

    <section>
      <h2>5. Children's Privacy</h2>
      <p>The App is suitable for all ages. We do not knowingly collect personal information from children under the age of 13.</p>
    </section>

    <section>
      <h2>6. Third-Party Services</h2>
      <p>
        The App uses the following third-party services:
      </p>
      <h3>Google Firebase Analytics</h3>
      <p>Used for anonymized usage statistics, crash diagnostics, and performance monitoring.</p>
      <p>
        Firebase Privacy Policy:{' '}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
          https://policies.google.com/privacy
        </a>
      </p>

      <h3>PostHog</h3>
      <p>
        Used for product analytics: which features are used, how often, and how usage relates to subscriptions. Data is
        stored in the European Union.
      </p>
      <p>
        PostHog Privacy Policy:{' '}
        <a href="https://posthog.com/privacy" target="_blank" rel="noreferrer">
          https://posthog.com/privacy
        </a>
      </p>

      <h3>RevenueCat</h3>
      <p>Used to manage subscriptions, verify purchases, and provide access to premium features.</p>
      <p>
        RevenueCat may process anonymized purchase-related data such as subscription status, transaction identifiers, and
        device or app-level identifiers. No payment or credit card information is accessed or stored by us.
      </p>
      <p>
        RevenueCat Privacy Policy:{' '}
        <a href="https://www.revenuecat.com/privacy/" target="_blank" rel="noreferrer">
          https://www.revenuecat.com/privacy/
        </a>
      </p>
      <p>We do not sell user data and do not share personal data for advertising purposes.</p>
    </section>

    <section>
      <h2>7. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be reflected by updating the "Last Updated"
        date at the top of this page.
      </p>
    </section>

    <section>
      <h2>8. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at:{' '}
        <a href="mailto:cem-ergin@outlook.com">cem-ergin@outlook.com</a>
      </p>
    </section>
  </article>
);

export default PrivacyPolicy;
