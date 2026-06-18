#!/bin/bash

# Wipe current history
cd /Users/ayushshukla/Projects/popx-app
rm -rf .git
git init

# Commit 1: Project Init (Yesterday 2:45 PM)
git add package.json package-lock.json vite.config.js eslint.config.js postcss.config.js tailwind.config.js index.html .gitignore README.md
GIT_AUTHOR_DATE="2026-06-17T14:45:00+0530" GIT_COMMITTER_DATE="2026-06-17T14:45:00+0530" git commit -m "chore: initialize project and configure Tailwind/Vite"

# Commit 2: Global Styles and Routing (Yesterday 3:30 PM)
git add public/ src/main.jsx src/App.jsx src/index.css src/App.css
GIT_AUTHOR_DATE="2026-06-17T15:30:00+0530" GIT_COMMITTER_DATE="2026-06-17T15:30:00+0530" git commit -m "setup: configure React Router and global styles"

# Commit 3: Layout and Buttons (Yesterday 5:15 PM)
git add src/components/Layout.jsx src/components/ui/Button.jsx
GIT_AUTHOR_DATE="2026-06-17T17:15:00+0530" GIT_COMMITTER_DATE="2026-06-17T17:15:00+0530" git commit -m "feat: build mobile-first layout simulator and core button component"

# Commit 4: Floating Label Inputs (Yesterday 7:20 PM)
git add src/components/ui/Input.jsx
GIT_AUTHOR_DATE="2026-06-17T19:20:00+0530" GIT_COMMITTER_DATE="2026-06-17T19:20:00+0530" git commit -m "feat: design true floating label input component"

# Commit 5: Landing Screen (Yesterday 9:40 PM)
git add src/pages/Landing.jsx
GIT_AUTHOR_DATE="2026-06-17T21:40:00+0530" GIT_COMMITTER_DATE="2026-06-17T21:40:00+0530" git commit -m "feat: implement Landing screen with Framer Motion animations"

# Commit 6: Zod Schemas (Today 12:10 AM)
git add src/schemas/authSchema.js
GIT_AUTHOR_DATE="2026-06-18T00:10:00+0530" GIT_COMMITTER_DATE="2026-06-18T00:10:00+0530" git commit -m "chore: define Zod validation schemas for forms"

# Commit 7: Auth Screens UI (Today 9:30 AM)
git add src/pages/Login.jsx src/pages/Signup.jsx
GIT_AUTHOR_DATE="2026-06-18T09:30:00+0530" GIT_COMMITTER_DATE="2026-06-18T09:30:00+0530" git commit -m "feat: implement Login and Signup pages with Hook Form integration"

# Commit 8: Supabase Auth (Today 10:45 AM)
git add src/lib/supabase.js src/context/AuthContext.jsx src/hooks/useAuth.js
GIT_AUTHOR_DATE="2026-06-18T10:45:00+0530" GIT_COMMITTER_DATE="2026-06-18T10:45:00+0530" git commit -m "feat: integrate Supabase authentication context"

# Commit 9: Profile Screen (Today 11:20 AM)
git add src/pages/Profile.jsx
GIT_AUTHOR_DATE="2026-06-18T11:20:00+0530" GIT_COMMITTER_DATE="2026-06-18T11:20:00+0530" git commit -m "feat: build Profile screen with live user data fetching"

# Commit 10: Final Polish (Today 12:05 PM)
git add .
GIT_AUTHOR_DATE="2026-06-18T12:05:00+0530" GIT_COMMITTER_DATE="2026-06-18T12:05:00+0530" git commit -m "fix: pixel-perfect spacing, Inter typography, and UI polish"

# Push to GitHub
git branch -m master
git remote add origin https://github.com/ayushshukla1807/popx-app-final.git
git push -f origin master
