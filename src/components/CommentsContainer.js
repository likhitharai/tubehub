import React from "react";
//Used reccursion
const commentsData = [
  {
    name: "Likhitha",
    text: "Loremkjncukbdciunisnxsnxuinxis",
    replies: [
      {
        name: "Ljsuhs",
        text: "Loremkjncukbdciunisnxsnxuinxis",
        replies: [
            {
                name: "John",
                text: "Loremkjncukbdciunisnxsnxuinxis",
                replies: [
                    {
                        name: "Doe",
                        text: "Loremkjncukbdciunisnxsnxuinxis",
                        replies: [],
                      },
                ],
              },
        ],
      },
    ],
  },
  {
    name: "Likhitha",
    text: "Loremkjncukbdciunisnxsnxuinxis",
    replies: [],
  },
  {
    name: "Likhitha",
    text: "Loremkjncukbdciunisnxsnxuinxis",
    replies: [
        {
            name: "Likhitha",
            text: "Loremkjncukbdciunisnxsnxuinxis",
            replies: [],
          },
    ],
  },
  {
    name: "Likhitha",
    text: "Loremkjncukbdciunisnxsnxuinxis",
    replies: [
        {
            name: "Likhitha",
            text: "Loremkjncukbdciunisnxsnxuinxis",
            replies: [
                {
                    name: "Likhitha",
                    text: "Loremkjncukbdciunisnxsnxuinxis",
                    replies: [],
                  },
            ],
          },
    ],
  },
  {
    name: "Likhitha",
    text: "Loremkjncukbdciunisnxsnxuinxis",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex bg-gray-100 p-2 round-lg my-2">
      <img
        className="w-8 h-8"
        src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
        alt="i-comment"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies}/>
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-3xl font-bold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
