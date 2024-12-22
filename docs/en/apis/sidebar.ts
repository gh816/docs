import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "apis/gitcode-openapi-users",
    },
    {
      type: "category",
      label: "User Management",
      items: [
        {
          type: "doc",
          id: "apis/get-users",
          label: "Get list of usersfsds",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/create-user",
          label: "Create a new user",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apis/get-user-by-id",
          label: "Get a single user",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apis/update-user",
          label: "Update a user",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apis/delete-user",
          label: "Delete a user",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
