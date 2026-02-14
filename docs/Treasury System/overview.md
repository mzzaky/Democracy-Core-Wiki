# 💰 National Treasury System

This document explains the technical aspects of the **Treasury** system in the DemocracyCore plugin. This system regulates money circulation, national income, and government spending to fund policies.

## 📋 Overview

The Treasury is an economic entity separate from any player's personal account. The State has its own balance used for:
1.  Funding presidential **Executive Orders**.
2.  Funding ministerial **Cabinet Decisions**.
3.  Paying official salaries (President & Ministers).
4.  Providing voter rewards (**Voter Rewards**).

If the national treasury is empty, the government cannot perform its functions (collapse).

## 📥 Sources of Income

State income comes from several automatic and manual sources:

### 1. Transaction Tax (`TAX_INCOME`)
*   Every time a transaction occurs (integrated with the plugin), a tax deduction will go into the national treasury.
*   **Default:** 5% of the transaction value.
*   **Configuration:** `treasury.transaction-tax`

### 2. Fines & Seizures (`FINE_INCOME`)
*   Deposit money from failed recall petitions (**Recall**) is seized and moved here.
*   Registration money from candidates who lose significantly (if configured).

### 3. Donations (`DONATION`)
*   Players can donate their personal money to the state to help government programs.
*   **Command:** `/dc treasury donate <amount>`

### 4. Term Start Funding (`TERM_START_FUND`)
*   Initial fund injection every time a new president is elected (optional/admin).

## 📤 Types of Expenses

### 1. Government Programs
*   **Executive Orders:** Large costs to activate global policies (e.g., *Golden Age*).
*   **Cabinet Decisions:** Ministry operational costs (e.g., *Festivals*, *Subsidies*).

### 2. Official Salaries (`CABINET_SALARY`)
*   Daily salaries paid to the President and Ministers.
*   Paid automatically every day at a specific time.

### 3. Public Rewards
*   **Voter Reward:** Cash rewards for citizens who exercise their voting rights during elections.
*   **Stimulus:** Direct cash assistance (BLT) from the Finance Minister.
*   **Deposit Refund:** Refund of campaign deposit money for election winners.

## 📊 Transaction Management

The system records every inflow and outflow of funds transparently.
*   **Recording:** Every deposit/withdrawal is recorded with: Type, Amount, Description, Actor (UUID), and Time.
*   **Log Limit:** The system stores the last 1000 transactions for audit purposes.
*   **Audit:** Players can view transaction history through a GUI or command.

## 💾 Data Structure

Treasury data is stored in JSON/YAML format, including:
*   `balance`: Current balance (double).
*   `total_income`: Accumulated total income of all time.
*   `total_expenses`: Accumulated total expenses of all time.
*   `transactions`: List of transaction objects.

## 🔧 Related Commands

| Command | Function | Access |
| :--- | :--- | :--- |
| `/dc treasury` | View national financial status (Balance, Income, Expense, Log). | Public |
| `/dc treasury donate <amount>` | Donate money to the national treasury. | Public |
| `/dc admin addtreasury <amount>` | Instantly add money to the national treasury (Cheat). | Admin |

## ⚙️ Configuration

Economic-related settings are in the `config.yml` under the `treasury` section.

```yaml
treasury:
  # Transaction tax (0.05 = 5%)
  transaction-tax: 0.05
  
  # Daily official salaries
  salaries:
    president: 5000
    minister: 2500
```
