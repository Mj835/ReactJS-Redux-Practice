import React from "react";
import ReactDOM from "react-dom";
// Command to install faker is (npx install --save faker)
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Bob"
        timeAgo="Today at 4:55 PM"
        content="Nice blog post"
        avatar={faker.image.avatar()}
      />

      <CommentDetail
        author="James"
        timeAgo="Yesterday at 2:55 AM"
        content="I like the post contents"
        avatar={faker.image.avatar()}
      />

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 8:55 AM"
          content="Valuable post"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
