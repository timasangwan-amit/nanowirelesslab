# NanoWireless Lab — Website Strategy Guide
## Making the Most of Your Site at the Early-Career Stage

---

## THE BIG PICTURE

Your website has four jobs, in order of importance right now:

1. **Establish research identity** — tell the world clearly what you work on
   and why it matters, even before you have the publications to prove it

2. **Build collaborator relationships** — faculty at PhD-granting institutions,
   industry contacts, and potential grant co-PIs will look you up

3. **Attract undergraduate and MS researchers** — your primary talent
   pipeline right now

4. **Support grant applications** — NSF/NIH reviewers will visit this site;
   it should reinforce, not contradict, your proposal narrative

---

## SECTION 1 — CONTENT YOU SHOULD ADD NOW

### 1.1 Your Headshot (highest single impact change)
A lab site without a PI photo feels anonymous. Prospective students
deciding whether to cold-email you are also deciding whether you feel
approachable. A professional headshot — or even a clean, well-lit photo
taken against a plain wall — makes an outsized difference.

To add it:
- Save your photo as: `images/pi-photo.jpg` (create an `images/` folder)
- In `pages/team.html`, find the `.pi-photo-box` div and replace it with:

  <img src="../images/pi-photo.jpg"
       alt="Dr. A. Sangwa"
       style="width:100%; border: 1px solid var(--border);" />

### 1.2 Your Real Publications
Open `pages/publications.html` and replace every `[Paper title...]`
placeholder with your actual papers. For each one you need:
- Full title
- Your author name + co-authors (bold your name)
- Venue: journal name + volume/issue, or conference name + year
- A link to IEEE Xplore or DOI (get this from scholar.google.com)

Keep your name bolded as `<strong>A. Sangwa</strong>` in every entry.
Use badge-journal, badge-conference, or badge-preprint as appropriate.

### 1.3 A Short "News" Section
Even a minimal news section signals an active lab. Add it to your
homepage between the research grid and the vision section. Good items:
- A paper accepted → "Paper accepted at IEEE [Venue] · Month Year"
- A new student joins → "Welcome [Name], joining as a Research Assistant"
- A grant submitted → "Submitted NSF proposal on [topic] · Month Year"
  (you can post submissions — you don't have to wait for awards)
- A conference talk → "Presenting at [Conference] · Month Year"
- A course you're teaching → "Teaching [Course Name] this semester"

You don't need many — even 3–4 items makes the lab look alive.

### 1.4 Your CV / Resume Link
Add a link to a PDF of your academic CV on the Team and Contact pages.
Host it in GitHub: upload `cv.pdf` to your repo's `files/` folder.
Then link it as: `<a href="../files/cv.pdf">Download CV</a>`

Update it once or twice a year (before grant season, before conferences).

---

## SECTION 2 — HOW TO UPDATE THE SITE (keeping it alive)

### 2.1 When you publish a new paper
1. Open `pages/publications.html` in GitHub (click the file → pencil icon)
2. Copy an existing `.pub-item` block
3. Paste it at the TOP of the correct year group (most recent first)
4. Fill in: title, authors, venue, DOI link
5. Commit → site updates in ~30 seconds

Time required: ~10 minutes per paper

### 2.2 When a student joins
1. Open `pages/team.html`
2. Copy this block and paste it BEFORE the join cards:

  <div class="student-card">
    <div class="student-avatar">XX</div>  ← initials
    <div class="student-name">First Last</div>
    <div class="student-role">MS Student / Research Assistant</div>
    <div class="student-focus">Working on: [one sentence]</div>
  </div>

Time required: ~5 minutes

### 2.3 When you have news
1. Open `index.html`
2. Find the `<!-- NEWS -->` comment (or add a news section — see below)
3. Add the item as a simple list entry
4. Commit

### 2.4 Minimum maintenance cadence
- **Every paper acceptance**: update publications.html same week
- **Start of each semester**: check team.html is accurate
- **Once a year**: update your CV file, check all links still work,
  refresh the research descriptions if your focus has shifted

---

## SECTION 3 — USING THE SITE FOR GRANT APPLICATIONS

Every NSF and NIH grant you submit will have reviewers who Google you.
Here is how to make the site work for you in that context:

### 3.1 Research page = your broader impact statement, visualized
The three research thrusts on your research page should use language
that mirrors your active grant proposals. If you're writing an NSF CAREER
proposal on wireless implantables, the research page should reflect that
framing. Reviewers who visit should feel the site confirms and expands
on what they read in the proposal — not contradicts it.

Keep the research descriptions updated whenever you submit a major proposal.

### 3.2 Publications page = your track record
This is the page grant reviewers will check. Make sure it is:
- Complete (every peer-reviewed paper listed)
- Up to date (add papers within a week of acceptance, not just publication)
- Linked (every paper should have an IEEE Xplore or DOI link)
- Honest (do not list papers as "under review" here — only accepted work)

### 3.3 The PI bio = your credibility anchor
Your bio on the homepage and team page is read by collaborators and
program officers. Keep it factual and forward-looking. When you receive
a grant, add a line: "Dr. Sangwa's research is supported by [Agency]."
Even a small grant (travel grant, seed grant) is worth mentioning.

### 3.4 Before submitting a major proposal
Do a full site pass:
- Is every publication listed and linked?
- Does the research page align with the proposal topic?
- Is the PI bio accurate (institution, title, current focus)?
- Are all links working (no broken DOI or Scholar links)?

---

## SECTION 4 — BUILDING COLLABORATOR RELATIONSHIPS THROUGH THE SITE

### 4.1 Make your collaboration interest explicit
The contact page already does this, but you can go further. Consider
adding a one-paragraph "Collaboration" section to your research page
that names the specific expertise you're looking to complement:

  "We are actively seeking collaborations with groups working in
   materials science (graphene and 2D materials), clinical neurology,
   and RF/microwave circuit design. If your work overlaps with ours,
   please reach out."

Specific > generic. Faculty at RPI or Cornell who work on graphene
and happen to search for collaborators will find this.

### 4.2 Name-drop institutional geography strategically
Your contact page already mentions the Northeast corridor.
You can also add to your about bio: "Located in the heart of New York's
semiconductor and photonics industry corridor, SUNY Poly has strong
ties to GlobalFoundries, Wolfspeed, and the Albany NanoTech complex."
This signals industry accessibility to potential collaborators.

### 4.3 After meeting someone at a conference
Within 48 hours, send a follow-up email and link your site.
Your site URL should be in your email signature:
  Dr. A. Sangwa | nanowirelesslab.com | sangwaa@sunypoly.edu

---

## SECTION 5 — THE MIGRATION ROADMAP

You don't need to do this now. But here is what to watch for as signals
that it's time to migrate to a more data-heavy platform (Al-Folio, etc.):

TRIGGER 1 — PhD program opens at SUNY Poly in your department
  → Add PhD recruitment pitch, add doctoral student cards

TRIGGER 2 — You receive an NSF CAREER or similar major award
  → Add a "Funding" section, list grants with award numbers
  → Consider Al-Folio migration: metrics now work for you

TRIGGER 3 — You hit ~20+ publications
  → A manual HTML list becomes cumbersome
  → BibTeX auto-population (Al-Folio) starts saving real time

TRIGGER 4 — You have 3+ students in the lab simultaneously
  → Team page needs more structure (PhD vs MS vs UG)
  → Lab alumni section becomes relevant

TRIGGER 5 — You move to an R1 or research-intensive institution
  → Full rebrand; new institutional affiliation; PhD recruitment
  → Al-Folio or custom React site both viable at that stage

Until at least two of these triggers happen, the current site serves
you better than any template would. Keep it updated and let the content
do the work.

---

## SECTION 6 — QUICK WINS CHECKLIST

Do these in order, within the next 2 weeks:

[ ] Add your headshot photo (images/pi-photo.jpg)
[ ] Fill in all real publications in publications.html
[ ] Add your CV as a downloadable PDF (files/cv.pdf)
[ ] Put the site URL in your email signature
[ ] Put the site URL in your Google Scholar profile
[ ] Put the site URL in your SUNY Poly faculty directory page
[ ] Follow up with 2–3 people from your last conference with the link
[ ] Set a recurring calendar reminder: "Update lab website" — first Monday
    of every month, 20 minutes

---

## SECTION 7 — WHAT NOT TO DO

These are common early-career lab website mistakes:

✗ Adding a "News" section and then not updating it for 18 months
  → Stale news is worse than no news. Only add it when you'll maintain it.

✗ Listing papers as "under review" or "in preparation"
  → Until it's accepted, it doesn't exist on the publications page.
  → One exception: arXiv preprints can be listed with the badge-preprint tag.

✗ Copying research descriptions from your grant proposals verbatim
  → Grant language is written for program officers, not students/collaborators.
  → Rewrite for a smart reader with no domain context.

✗ Letting the site go 6+ months without any update
  → An unchanged site signals an inactive lab. Even small updates matter.

✗ Adding a PhD recruitment pitch before you can deliver
  → Students will apply, you'll have to say no, and it damages trust.
  → Only advertise what you can actually offer.

✗ Linking to your old institution's page for papers
  → DOI links and IEEE Xplore links are permanent. Use those.

---

*This guide should be reviewed and updated once a year alongside your CV.*
*Last updated: 2025*
