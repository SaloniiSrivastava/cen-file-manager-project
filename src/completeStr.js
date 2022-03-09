const completeStr= [
    {
      name: "Folder 1",
      id: 123,
      path: [0],
      isFolder: true,
      isActive: false,
      content: "",
      childNodes: [
        {
          name: "Child-Folder-1",
          id: 234,
          path: [0,0],
          isFolder: true,
          isActive: false,
          content: "",
          childNodes: []
        },
        {
          name: "File-2",
          id: 2777,
          path: [0,1],
          isFolder: false,
          isActive: false,
          content: "",
          childNodes: []
        },
      ]
    },
    {
      name: "Folder-2",
      id: 3434,
      path: [1],
      isFolder: true,
      isActive: false,
      content: "",
      childNodes: [
        {
          name: "Folder-2.2 ",
          id: 344,
          path: [1,0],
          isFolder: true,
          isActive: false,
          content: "",
          childNodes: [
            {
              name: "Folder-2.2.1 ",
              id: 443,
              path: [1,0,0],
              isFolder: true,
              isActive: false,
              content: "",
              childNodes: []
            },
            {
              name: "Folder-2.2.2",
              id: 342,
              path: [1,0,1],
              isFolder: true,
              isActive: false,
              content: "",
              childNodes: []
            },
            {
              name: "File-1",
              id: 3752,
              path: [1,0,2],
              isFolder: false,
              isActive: false,
              content: "",
              childNodes: []
            },
          ]
        },
      ]
    }
];


export default completeStr;