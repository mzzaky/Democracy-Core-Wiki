# Introduction

**DemocracyCore** is a comprehensive Minecraft plugin designed to simulate a vibrant and realistic democratic government system within a server. This plugin transforms player interaction by introducing political structures, a national economy, and tangible power dynamics.

## 🌟 Key Features

The plugin is built upon several core pillars:

### 1. 🏛️ Government System
At the heart of this plugin are the **President** and the **Cabinet**.
*   **President:** The highest leader elected through general elections. Has the power to issue executive orders, manage the national treasury, and appoint ministers.
*   **Term of Office:** Limited by time (default: 30 days) and consecutive term limits (default: 2 terms) to prevent power monopolies.
*   **Cabinet:** The President can appoint other players to fill strategic positions:
    *   🛡️ **Defense Minister:** Focuses on security and PvP.
    *   💰 **Finance Minister (Treasury):** Manages the economy and taxes.
    *   📈 **Commerce Minister:** Oversees markets and player economy.
    *   🏗️ **Infrastructure Minister:** Focuses on development and construction.
    *   🎨 **Culture Minister:** Handles events and player experience.

### 2. 🗳️ Election System
The democratic cycle runs automatically without admin intervention.
*   **Automation:** Phase transitions from Registration -> Campaign -> Voting -> Inauguration run on their own.
*   **Smart Voting:** Player votes have different "weights" based on their contributions (Playtime, Level, Wealth).
*   **Campaign:** Candidates can promote themselves and receive official *endorsements*.
*(Full details available in `PRESIDENT_SYSTEM.MD`)*

### 3. 💵 Economy & National Treasury
The plugin separates personal wealth from state funds.
*   **National Treasury:** Funds managed by the government to finance projects, official salaries, and subsidies.
*   **Official Salaries:** The President and Ministers receive automatic daily salaries from the national treasury.
*   **Transaction Tax:** A small percentage of economic transactions can go into the national treasury (configurable).
*   **Transparency:** Every income and expenditure of the state records clear transaction logs.

### 4. ⚡ Executive Orders
The President has "ace cards" in the form of executive orders that provide global effects on the server. These require costs from the National Treasury.
Examples of orders:
*   ✨ **Golden Age:** Boosts global XP, Drop Rates, and economy.
*   ⚔️ **Purge Protocol:** Enables PvP worldwide for a limited time.
*   🏗️ **Infrastructure Initiative:** Grants Haste II to all players to speed up construction.
*   💸 **Economic Recovery:** Distributes cash stimulus to all citizens & shop discounts.
*   🛡️ **State of Emergency:** Disables PvP server-wide.

### 5. 🎁 Incentives & Buff System
*   **Approval Rating:** Citizens can rate their satisfaction with government performance.
*   **Daily Rewards:** Special daily rewards for government officials (Rare items, XP, Money).
*   **Welfare:** Subsidy and assistance mechanisms for players.

---

## 🏗️ Technical Structure

Technically, the plugin is organized using a modular **Manager** system to handle each aspect of the logic:

| Manager | Primary Function |
| :--- | :--- |
| `ElectionManager` | Handles all election logic, phases, and voting. |
| `GovernmentManager` | Manages president and cabinet data, terms, and salaries. |
| `TreasuryManager` | Handles national financial transactions and Vault integration. |
| `ExecutiveOrderManager` | Manages activation, cooldown, and effects of executive orders. |
| `CabinetManager` | Specific logic for cabinet member permissions and abilities. |
| `BuffManager` | Applies global/specific potion effects or stats to players. |
| `DataManager` | Handles persistent data storage (JSON/YAML). |

### Integrations
*   **Vault:** Required. Used for all economic transactions (registration fees, salaries, taxes, executive order costs).
*   **PlaceholderAPI (Optional):** To display president names, election status, etc., in scoreboards/chat.

---

## ⚙️ Basic Commands

Here are some core commands available for players and admins:

*   `/dc` - Opens the main DemocracyCore GUI menu.
*   `/dc help` - Displays the command list.
*   `/dc vote` - Cast a vote during the voting phase.
*   `/dc register` - Register as a presidential candidate.
*   `/dc cabinet` - View or manage cabinet members.
*   `/dc treasury` - View the national treasury status.
*   `/dc order` - (President) Opens the Executive Order menu.
*   `/dc stats` - View a player's personal political statistics.

---

## 📝 Developer Notes
This plugin is designed to be "self-regulating." If a President is inactive for several days (configurable), the system automatically removes them and starts an emergency election. This ensures the server doesn't "stagnate" due to a retired leader.
