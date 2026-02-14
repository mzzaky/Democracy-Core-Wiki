# Command List

This document contains a complete list of available commands in the **DemocracyCore** plugin. Commands are categorized by permissions and functionality.

All commands use the main prefix: `/democracycore` or the alias `/dc`.

---

## 🌍 General Commands
These commands can be accessed by all players on the server.

| Command | Alias | Description |
| :--- | :--- | :--- |
| `/dc menu` | `/dc gui` | Opens the main DemocracyCore GUI menu. |
| `/dc help` | - | Displays help messages and a list of basic commands. |
| `/dc info` | `/dc status` | Displays current government information (President, Cabinet, Active Policies). |
| `/dc stats [player]` | - | View personal or another player's political stats (Playtime, Votes, Positions). |
| `/dc history` | - | Displays a history of previously serving presidents. |
| `/dc rate <1-5>` | `/dc approval` | Rate (1-5 stars) the current government's performance. |
| `/dc leaderboard` | `/dc lb` | Opens the Leaderboard GUI. |
| `/dc quickactions` | `/dc qa` | Opens the quick actions menu for frequently used features. |

---

## 🗳️ Election Commands
Commands used during the general election cycle.

| Command | Description |
| :--- | :--- |
| `/dc election` | Check the status, phase, and remaining time of the current election. |
| `/dc candidates` | Displays a list of registered presidential candidates. |
| `/dc register` | Register as a presidential candidate (Only during the Registration phase). |
| `/dc endorse <player>` | Provide official support to a candidate to increase their campaign points. |
| `/dc campaign <message>` | Broadcast a global campaign message (Paid & Cooldown applied). |
| `/dc vote <candidate>` | Cast a vote for a chosen candidate (Only during the Voting phase). |

---

## 💰 Economy & Treasury Commands

| Command | Description |
| :--- | :--- |
| `/dc treasury` | View latest national balance, income, and expenses. |
| `/dc treasury donate <amount>` | Donate personal money to the national treasury. |

---

## ⚔️ Arena Commands

| Command | Description |
| :--- | :--- |
| `/dc arena join` | Join the battle arena lobby. |
| `/dc arena leave` | Leave the arena. |
| `/dc arena stats` | View arena kill and death statistics. |
| `/dc arena leaderboard` | View the leaderboard of top players in the arena. |
| `/dc arena start` | **(President Only)** Start a new battle session in the arena. |

---

## 📢 Recall/Impeachment Commands
Features to remove a president deemed incompetent.

| Command | Description |
| :--- | :--- |
| `/dc recall status` | Check the status of an ongoing recall petition. |
| `/dc recall start` | Start a new recall petition against the president. |
| `/dc recall sign` | Sign an active recall petition. |
| `/dc recall vote <yes/no>` | Cast a vote in a recall referendum (If the petition succeeds). |

---

## 🏛️ President Commands (President Only)
Can only be used by the currently serving President.
*Permission node: `democracy.president`*

| Command | Description |
| :--- | :--- |
| `/dc order <type>` | Issue an Executive Order.<br />Example: `/dc order GOLDEN_AGE` |
| `/dc cabinet appoint <position> <player>` | Appoint a player as a cabinet minister.<br />Positions: `DEFENSE`, `TREASURY`, `COMMERCE`, `INFRASTRUCTURE`, `CULTURE` |
| `/dc cabinet dismiss <position>` | Dismiss a minister from their position. |

---

## 🛡️ Cabinet Commands (Cabinet Only)
Can only be used by a currently serving Minister.
*Permission node: `democracy.cabinet`*

| Command | Description |
| :--- | :--- |
| `/dc cabinet info` | View information about cabinet members and active decisions. |
| `/dc cabinet decision <type>` | Make a decision/policy according to their ministry.<br />Example: `/dc cabinet decision SUBSIDIZE_FOOD` |

---

## 🔧 Admin Commands (Admin Only)
Commands for system management and debugging.
*Permission node: `democracy.admin`*

| Command | Description |
| :--- | :--- |
| `/dc admin setpresident <player>` | Forcibly appoint a player as President. |
| `/dc admin removepresident` | Forcibly remove the current President. |
| `/dc admin startelection` | Manually start a new election cycle. |
| `/dc admin endelection` | End the current election phase. |
| `/dc admin addtreasury <amount>` | Add money to the national treasury (from thin air). |
| `/dc admin stoporder <type>` | Forcibly stop an active Executive Order. |
| `/dc admin reload` | Reload all configuration files. |
| `/dc admin reset <type>` | Reset plugin data.<br />Types: `government`, `election`, `treasury`, `all` |
