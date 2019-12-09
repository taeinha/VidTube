```javascript
{
  entities: {
    users: {
      1: {
        id: 1,
        username: "taeinha",
        email: "taeinha@gmail.com",
        uploaded_videos: [3,10,11]
      },
      2: {
        id: 2,
        username: "mochi",
        email: "mochi@gmail.com"
      },
      5: {
        id: 5,
        username: "truman",
        email: "truman@gmail.com"
      }
    },
    videos: {
      3: {
        id: 3,
        title: "day in the life of mochi",
        description: "very fluffy and cute cat",
        view_count: 15000,
        url: "https://aws.amazon.com/websites/reinvent2014-videos/",
        uploader_id: 1,
        like_counts: {
          likes: 700,
          dislikes: 15
        }
      },
      10: {
        id: 10,
        title: "Mochi's favorite food",
        description: "beef",
        view_count: 100000,
        url: "https://aws.amazon.com/websites/reinvent2014-videos/",
        uploader_id: 1,
        like_counts: {
          likes: 400,
          dislikes: 50
        }
      },
      11: {
        id: 11,
        title: "how awesome are golden retrievers",
        description: "most friendly dog ever",
        view_count: 70000,
        url: "https://aws.amazon.com/websites/reinvent2014-videos/",
        uploader_id: 1,
        like_counts: {
          likes: 3000,
          dislikes: 300
        }
      }
    },
    comments: {
      1: {
        id: 1,
        user_id: 2,
        video_id: 10,
        parent_comment_id: null,
        body: "too cute!",
        like_counts: {
          likes: 200,
          dislikes: 10
        }
      },
      2: {
        id: 2,
        user_id: 3,
        video_id: 11,
        parent_comment_id: null,
        body: "this is a bad video!",
        like_counts: {
          likes: 10,
          dislikes: 1
        }
      },
    }
  },
  ui: {
    loading_screen: true
  },
  errors: {
    login: ["Password must have more than 6 characters!"],
    videoForm: ["Title cannot be blank!"],
    commentForm: ["Body cannot be blank!"]
  },
  session: {
    current_user_id: 1
  }
}
```