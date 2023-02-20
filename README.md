# Project REST-Rant

REST-Rant is an app where users can review restaurants.

| Method | Path | Purpose |
| ------ | ------------------------------------- | ----------------------------- |
| GET | `/` | The home page |
| GET | `/places` | Index page listing all places |
| GET | `/places/new` | New form for a place |
| POST | `/places` | Create a new place |
| GET | `/places/:id` | Show one place in detail (Associated rants, new rant form, delete rant button) |
| GET | `/places/:id/edit` | Edit form for a place |
| PUT | `/places/:id` | Make changes to existing place |
| DELETE | `/places/:id` | Delete a place |
| POST | `/places/:id/rant` | Add rant to a place |
| DELETE | `/places/:id/rant/:rantId` | Delete a rant |

---

1. As a developer, I need to request data from the server about a specific place using a new endpoint, so I can populate the places detail page

2. As a user, I need a place to view the specific details of one of my pages on a new JSX page, so I can use the app

3. As a user, I need to edit a place using a new place editing form page, so I can change the data for one of my existing places