# Day 36 Migration Notes

## Original React Router → Next.js App Router

| Original | Next.js + TypeScript |
|---|---|
| `BrowserRouter` / `Routes` / `Route` | `app/` folder tree |
| `/` + `Layout` + `Outlet` | `app/layout.tsx` + `app/page.tsx` |
| `path="menu"` | `app/menu/page.tsx` |
| `path="menu/:id"` | `app/menu/[id]/page.tsx` |
| `useParams()` | `params` page prop |
| `Navigate` | `router.replace()` |
| `useNavigate()` | `useRouter()` from `next/navigation` |
| React Router `Link` | `next/link` |
| `*` route | `app/not-found.tsx` |
| component-level loading/error wiring | `loading.tsx` / `error.tsx` |
| JSX/JS | TSX/TypeScript types |

The implementation follows the uploaded Day 36 lesson: the file system is the router, route pages use default exports, dynamic segments use brackets, and special state files are colocated with the route segment.
