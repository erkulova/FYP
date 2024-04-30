const ROUTES = {
  ADMIN: {
    INDEX: "/admin",
    NEWS: "/add-news",
    ID: "/:id",
  },

  USER: {
    INDEX: "/user",
    NEWS: "/news",
    NETWORKING: "/networking",
    QUESTIONS: "/questions",
    PLANNING: "/planning",
    EVENTS:"/events",
    CHATS:"/chats",
    POSSIBILITIES:"/possiblities",
    ID:"/:id",
  },
};

const ROLES = {
  ADMIN: "ADMIN",
  USER: "USER",
  GUEST: "GUEST",
};

export { ROUTES, ROLES };
