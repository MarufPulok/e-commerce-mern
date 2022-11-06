import "../../chats.css";

const UserChatComponent = () => {
  return (
    <>
      <input type="checkbox" id="check" />
      <label className="chat-btn" htmlFor="check">
        <i className="bi bi-chat-dots comment"></i>
        <span className="position-absolute top-0 start-10 translate-middle p-2 bg-danger border-light rounded-circle"></span>
        <i className="bi bi-x-circle close"></i>
      </label>

      <div className="chat-wrapper">
        <div className="chat-header">
          <h6>Let's Chat -Online</h6>
        </div>
        <div className="chat-form">
          <div className="chat-msg">
            {Array.from({ length: 20 }).map((_, id) => (
              <div key={id}>
                <p>
                  <b>You wrote:</b> Hello, how are you? This is test
                </p>
                <p className="bg-primary p-3 ms-4 text-light rounded-pill">
                  <b>Admin wrote:</b> Hello, I am fine. Thank you. What about
                  you? this is test
                </p>
              </div>
            ))}
          </div>
          <textarea
            id="clientChatMsg"
            className="form-control"
            placeholder="Your Text"
          />
          <button className="btn btn-success btn-block">Submit </button>
        </div>
      </div>
    </>
  );
};

export default UserChatComponent;
