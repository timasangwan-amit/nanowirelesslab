# NanoWireless Lab Website
## Deployment Guide — GitHub Pages

---

### STEP 1 — Create a GitHub account (if you don't have one)
Go to https://github.com and sign up with your university email.

---

### STEP 2 — Create a new repository
1. Click the "+" icon → "New repository"
2. Name it exactly: `nanowirelesslab.github.io`
   (or any name if you're using a custom domain — see Step 5)
3. Set it to **Public**
4. Leave everything else as default → click "Create repository"

---

### STEP 3 — Upload these files
Option A (easiest — no coding needed):
1. In your new repo, click "uploading an existing file"
2. Drag ALL these files and folders into the upload box:
   - index.html
   - css/
   - js/
   - pages/
3. Scroll down, write a commit message like "Initial site upload"
4. Click "Commit changes"

Option B (if you're comfortable with Git):
```bash
git init
git add .
git commit -m "Initial site upload"
git remote add origin https://github.com/YOUR_USERNAME/nanowirelesslab.github.io
git push -u origin main
```

---

### STEP 4 — Enable GitHub Pages
1. In your repository, go to **Settings** (top tab)
2. In the left sidebar, click **Pages**
3. Under "Source", select **Deploy from a branch**
4. Branch: **main**, folder: **/ (root)**
5. Click **Save**

Your site will be live in ~2 minutes at:
`https://YOUR_USERNAME.github.io/nanowirelesslab.github.io`

---

### STEP 5 — Point nanowirelesslab.com to GitHub Pages
Since you already own nanowirelesslab.com (currently on Google Sites),
you just need to update the DNS settings.

**A. Add a CNAME file to your repo:**
Create a file called exactly `CNAME` (no extension) in the root folder
with one line of text:
```
nanowirelesslab.com
```

**B. Update DNS at your domain registrar (Google Domains / Squarespace Domains):**
Log into wherever you registered nanowirelesslab.com and add these records:

| Type  | Name | Value                   |
|-------|------|-------------------------|
| A     | @    | 185.199.108.153         |
| A     | @    | 185.199.109.153         |
| A     | @    | 185.199.110.153         |
| A     | @    | 185.199.111.153         |
| CNAME | www  | YOUR_USERNAME.github.io |

DNS changes take 10 min to 48 hours to propagate.

**C. Back in GitHub Settings → Pages:**
Under "Custom domain", type: `nanowirelesslab.com`
Check "Enforce HTTPS" (free SSL, auto-renews)

---

### STEP 6 — Updating the site going forward
Every time you want to make a change:
1. Edit the HTML file on your computer
2. Go to GitHub → find the file → click the pencil (edit) icon
3. Make your changes → "Commit changes"
4. Site updates automatically within ~30 seconds

Or install GitHub Desktop (https://desktop.github.com) for a
drag-and-drop workflow without any command line.

---

### FILE STRUCTURE
```
nanowirelesslab/
├── index.html          ← Homepage
├── CNAME               ← Create this for custom domain (Step 5)
├── README.md           ← This file
├── css/
│   └── style.css       ← All shared styles
├── js/
│   └── main.js         ← Mobile nav + active link logic
└── pages/
    ├── research.html   ← Research thrusts
    ├── publications.html ← Your papers (edit this most often)
    ├── team.html       ← PI bio + students
    └── contact.html    ← Contact + open positions
```

---

### THINGS TO FILL IN BEFORE GOING LIVE
Search each file for these placeholders and replace them:

In `index.html`:
- "AS" initials → your real initials (if you add a photo, replace the avatar div)
- "Lab est. [Year]" → your actual founding year

In `pages/publications.html`:
- Replace ALL placeholder paper entries with your real publications
- Add DOI/IEEE Xplore links for each paper

In `pages/team.html`:
- Add your photo (save as `images/pi-photo.jpg` and update the img src)
- Add real student cards as students join

In `pages/contact.html`:
- Update position descriptions as they open/fill

---

### ADDING A PHOTO
1. Create an `images/` folder in your repo
2. Upload your photo as `pi-photo.jpg`
3. In `pages/team.html`, replace the `.pi-photo-box` div with:
```html
<img src="../images/pi-photo.jpg" alt="Dr. A. Sangwa"
     style="width:100%; border: 1px solid var(--border);" />
```

---

### TOTAL COST
- GitHub Pages hosting: FREE
- Custom domain (nanowirelesslab.com): whatever you already pay (~$12/yr)
- SSL certificate: FREE (GitHub handles it)
