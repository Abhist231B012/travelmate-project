# 🚀 How to Configure Render Environment Variables

Since `.env` files are private and **ignored by Git** (they don't get uploaded to GitHub for security), you need to manually set your secrets on the Render website.

## ✅ Steps to Add MONGO_URI, SESSION_SECRET (and others)

1.  **Open Render Dashboard**: Go to [https://dashboard.render.com/](https://dashboard.render.com/)
2.  **Select Your Service**: Click on your project/service name in the list.
3.  **Go to Environment**: In the left sidebar menu, click on **"Environment"**.
4.  **Add Variable**: Click the **"Add Environment Variable"** button.
5.  **Enter Details**:

    | Key | Value | Note |
    | :--- | :--- | :--- |
    | `MONGO_URI` | `mongodb+srv://...` | **REQUIRED** (do not use localhost on Render) |
    | `SESSION_SECRET` | `your_long_random_secret` | **REQUIRED** for persistent sessions |
    | `NODE_ENV` | `production` | Enables secure cross-site cookies |
    | `CLIENT_URL` | `https://your-app.onrender.com` | Only needed if the frontend is hosted on a different origin |
    | `VITE_GOOGLE_GEMINI_AI_API_KEY` | (from `client/.env`) | Build-time frontend variable for AI itineraries |

6.  **Save**: Click **"Save Changes"**.
7.  **Done!**: Render will automatically restart your server with the new settings.

---

## ❓ Why can't I just push `.env`?
Your `.gitignore` file prevents `.env` from being uploaded to GitHub. This is a safety feature so your secrets aren't exposed publicly.
