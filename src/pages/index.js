import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const FeatureList = [
  {
    icon: '🏛️',
    title: 'Government System',
    description:
      'A comprehensive political structure with Presidents, Cabinets, and Ministers — each with unique powers, perks, and responsibilities.',
  },
  {
    icon: '🗳️',
    title: 'Automated Elections',
    description:
      'Fully automated democratic cycles from registration through campaigns to voting and inauguration, with weighted smart voting.',
  },
  {
    icon: '💰',
    title: 'National Treasury',
    description:
      'Separate state finances from personal wealth. Manage taxes, salaries, subsidies, and transparent transaction logs.',
  },
  {
    icon: '⚡',
    title: 'Executive Orders',
    description:
      'Presidential "ace cards" that apply global server effects — from Golden Ages to Purge Protocols, funded by the treasury.',
  },
  {
    icon: '🛡️',
    title: 'Recall & Impeachment',
    description:
      'Democratic checks and balances. Citizens can initiate impeachment votes to remove an underperforming president.',
  },
  {
    icon: '🎁',
    title: 'Rewards & Buffs',
    description:
      'Approval ratings, daily rewards for officials, welfare subsidies, and dynamic buff systems tied to government performance.',
  },
];

const ArchitectureItems = [
  { icon: '⚙️', name: 'ElectionManager', desc: 'Handles all election logic, phases, and voting' },
  { icon: '🏛️', name: 'GovernmentManager', desc: 'Manages president and cabinet data' },
  { icon: '💵', name: 'TreasuryManager', desc: 'National financial transactions & Vault integration' },
  { icon: '📋', name: 'ExecutiveOrderManager', desc: 'Activation, cooldowns, and effects' },
  { icon: '👥', name: 'CabinetManager', desc: 'Cabinet permissions and abilities' },
  { icon: '✨', name: 'BuffManager', desc: 'Global potion effects and stat boosts' },
];

/* ===========================
   HERO SECTION
   =========================== */
function HomepageHero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroContent}>
        {/* Badge */}
        <div className={styles.heroBadge}>
          <span className={styles.heroBadgeDot} />
          Minecraft Plugin • Open Source
        </div>

        {/* Title */}
        <Heading as="h1" className={styles.heroTitle}>
          Democracy for{'\n'}Minecraft Servers
        </Heading>

        {/* Subtitle */}
        <p className={styles.heroSubtitle}>
          Transform your server with realistic politics — elections, governments,
          treasuries, and executive orders. All automated, all configurable.
        </p>

        {/* Buttons */}
        <div className={styles.heroActions}>
          <Link className={styles.heroPrimary} to="/docs/intro">
            📖 Read the Docs
          </Link>
          <Link
            className={styles.heroSecondary}
            href="https://github.com/mzzaky/Democracy-Core"
          >
            ⭐ View on GitHub
          </Link>
        </div>

        {/* Stats strip */}
        <div className={styles.statsStrip}>
          <div className={styles.statItem}>
            <div className={styles.statValue}>7+</div>
            <div className={styles.statLabel}>Core Systems</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>50+</div>
            <div className={styles.statLabel}>Commands</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>5</div>
            <div className={styles.statLabel}>Minister Roles</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>∞</div>
            <div className={styles.statLabel}>Possibilities</div>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ===========================
   FEATURES SECTION
   =========================== */
function HomepageFeatures() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>Core Features</span>
        <Heading as="h2" className={styles.sectionTitle}>
          Everything You Need for Server Democracy
        </Heading>
        <p className={styles.sectionSubtitle}>
          A modular plugin architecture that covers every aspect of
          democratic governance — from elections to economics.
        </p>
      </div>

      <div className={styles.featuresGrid}>
        {FeatureList.map((feature, idx) => (
          <div
            key={idx}
            className={styles.featureCard}
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className={styles.featureIcon}>{feature.icon}</div>
            <div className={styles.featureTitle}>{feature.title}</div>
            <div className={styles.featureDesc}>{feature.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ===========================
   ARCHITECTURE SECTION
   =========================== */
function ArchitectureSection() {
  return (
    <section className={styles.architectureSection}>
      <div className={styles.archGrid}>
        <div className={styles.archContent}>
          <span className={clsx(styles.sectionLabel)}>Architecture</span>
          <Heading as="h2" className={styles.archTitle}>
            Modular Manager System
          </Heading>
          <p className={styles.archDesc}>
            Built with a clean, extensible manager pattern. Each system operates
            independently, making the plugin easy to configure, debug, and extend.
          </p>
          <ul className={styles.archList}>
            {ArchitectureItems.map((item, idx) => (
              <li key={idx} className={styles.archListItem}>
                <span className={styles.archListIcon}>{item.icon}</span>
                <span className={styles.archListText}>
                  <strong>{item.name}</strong> — {item.desc}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.archVisual}>
          <div className={styles.terminalWindow}>
            <div className={styles.terminalHeader}>
              <span className={clsx(styles.terminalDot, styles.terminalDotRed)} />
              <span className={clsx(styles.terminalDot, styles.terminalDotYellow)} />
              <span className={clsx(styles.terminalDot, styles.terminalDotGreen)} />
              <span className={styles.terminalTitle}>plugins/DemocracyCore</span>
            </div>
            <div className={styles.terminalBody}>
              <div className={styles.terminalLine}>
                <span className={styles.terminalComment}>
                  # Plugin structure overview
                </span>
              </div>
              <div className={styles.terminalLine}>
                <span className={styles.terminalPrompt}>$</span>
                <span className={styles.terminalCmd}> tree src/managers/</span>
              </div>
              <br />
              <div className={styles.terminalLine}>
                <span className={styles.terminalHighlight}>├──</span>
                <span> ElectionManager.java</span>
              </div>
              <div className={styles.terminalLine}>
                <span className={styles.terminalHighlight}>├──</span>
                <span> GovernmentManager.java</span>
              </div>
              <div className={styles.terminalLine}>
                <span className={styles.terminalHighlight}>├──</span>
                <span> TreasuryManager.java</span>
              </div>
              <div className={styles.terminalLine}>
                <span className={styles.terminalHighlight}>├──</span>
                <span> ExecutiveOrderManager.java</span>
              </div>
              <div className={styles.terminalLine}>
                <span className={styles.terminalHighlight}>├──</span>
                <span> CabinetManager.java</span>
              </div>
              <div className={styles.terminalLine}>
                <span className={styles.terminalHighlight}>├──</span>
                <span> BuffManager.java</span>
              </div>
              <div className={styles.terminalLine}>
                <span className={styles.terminalHighlight}>└──</span>
                <span> DataManager.java</span>
              </div>
              <br />
              <div className={styles.terminalLine}>
                <span className={styles.terminalSuccess}>
                  ✓ 7 managers loaded successfully
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===========================
   CTA SECTION
   =========================== */
function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaBox}>
        <Heading as="h2" className={styles.ctaTitle}>
          Ready to Bring Democracy to Your Server?
        </Heading>
        <p className={styles.ctaDesc}>
          Dive into the comprehensive documentation, explore every system,
          and set up your own democratic Minecraft server today.
        </p>
        <div className={styles.ctaActions}>
          <Link className={styles.heroPrimary} to="/docs/intro">
            Get Started →
          </Link>
          <Link
            className={styles.heroSecondary}
            to="/docs/commands"
          >
            View Commands
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ===========================
   MAIN PAGE
   =========================== */
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="DemocracyCore — Minecraft Democracy Plugin"
      description="Comprehensive documentation for DemocracyCore, a Minecraft plugin that simulates democratic government systems with elections, treasuries, and executive orders."
    >
      <HomepageHero />
      <main>
        <HomepageFeatures />
        <ArchitectureSection />
        <CTASection />
      </main>
    </Layout>
  );
}
