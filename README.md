# Open Circle Good First Issue Notifications

This repository contains a GitHub Actions workflow that notifies Discord when an issue is labeled `good first issue`.

## How It Works

The workflow in `.github/workflows/good-first-issues.yml`:

1. Runs when an issue receives a label.
2. Continues only when the label is exactly `good first issue`.
3. Sends the issue title, URL, description, repository, and author to Discord.

## Setup

### 1. Create a Discord webhook

In Discord, open the channel where notifications should appear:

1. Open **Edit Channel**.
2. Select **Integrations**.
3. Select **Webhooks** and create a webhook.
4. Copy the webhook URL.

### 2. Add the GitHub secret

In the GitHub repository, open **Settings > Secrets and variables > Actions** and create a repository secret with:

- **Name:** `DISCORD_WEBHOOK`
- **Value:** the Discord webhook URL

Do not commit the webhook URL to the repository.

### 3. Use the label

Create or edit an issue and apply the label `good first issue`. GitHub Actions will send the notification automatically.

If the label does not exist, create it with that exact name, including spaces and capitalization.

## Workflow File

- `.github/workflows/good-first-issues.yml`

The workflow requires the `DISCORD_WEBHOOK` repository secret to send notifications.
