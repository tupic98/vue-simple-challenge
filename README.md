# Vue Simple Test

This project is created by using these

- Vue 3
- [Vue Router 4.x](https://github.com/vuejs/vue-router-next)
- [Inter var font](https://github.com/rsms/inter) (self-hosted, woff2, v3.19, with 'preload' attr, check out index.html)
- [Just-in-Time](https://tailwindcss.com/docs/just-in-time-mode) mode by default introduced in Tailwind CSS v2.1 (in preview!)
- [Headless UI](https://headlessui.dev/vue/menu) - unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS
- [Heroicons](https://github.com/tailwindlabs/heroicons#vue) - beautiful hand-crafted SVG icons,
by the makers of Tailwind CSS
- Latest [Storybook](https://storybook.js.org/)

First-party plugins needed for Tailwind UI:

- [tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)
- [tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography)
- [tailwindcss/line-clamp](https://github.com/tailwindlabs/tailwindcss-line-clamp)
- [tailwindcss/aspect-ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio)

### Getting Started 🚀

yarn:
```sh
yarn install
yarn dev
```

### Storybook
```shell
yarn storybook
```

## Your Task
Build a simple **Tasks List Management**

Estimated time would take: **45m ~ 2hrs**

We have this simple tasks list:

```json
[
  {
    "id": 1,
    "name": "Develop the Home page",
    "description": "For the home page, I need to do blah blah blah, and also blah blah blah to make it work and blah blah blah...",
    "created_at": "30/06/2021"
  },
  {
    "id": 2,
    "name": "Learning Tailwind and Vue 3",
    "description": "To learn these skills, I need to do blah blah blah, and also blah blah blah to make it work and blah blah blah...",
    "created_at": "30/06/2021"
  },
  //… more
]
```

You need to build a page using Vue (version 3 is preferred, using composition APIs) with any CSS (tailwind is preferred) to show the tasks like this:

- Task 1
- Task 2
- …

Bonus point:

- Clean code / high readabitlity
- Responsive
- Minify the description (maximum 50 chars)
- Click to a task to open a Modal to see the full task info
- Edit icon:
    - Click to show the Edit Task modal (with form)
    - Submit to edit the task (locally)
- Delete icon:
    - Click to delete a Task (locally)
    - Filter by keyword (locally)
- Create a story for Storybook (optional)

P/s: feel free to **add more of your creative ideas** to improve the page better and better, it would be **++ bonus points**.

### To-Do list
- Fork the repository
- Do the test
  - Remember to create a new branch from `master`
- After finished the test, create a PR to `master`
- Send us the PR link.

## Last but not least
Good luck!
