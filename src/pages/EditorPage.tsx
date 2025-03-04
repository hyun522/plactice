import ReactQuill from "react-quill";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
// import "react-quill/dist/quill.bubble.css"; // Bubble 테마 추가
// import Quill from "quill";

// DOMPurify 라이브러리를 사용하면 안전하게 HTML을 필터링
// XSS 공격은 웹사이트에서 사용자 입력을 검증하지 않고 그대로 출력할 때 발생하는 보안 취약점
// 공격자가 악성 JavaScript 코드를 삽입하여 다른 사용자의 브라우저에서 실행되도록 유도할 수 있습니다.

//HTML Toolbar
// const CustomButton = () => <span className="octicon octicon-star">★</span>;

// function insertStar(this: Quill) {
//   const cursorPosition = this.getSelection()?.index ?? 0;
//   this.insertText(cursorPosition, "★");
//   // this.setSelection(cursorPosition + 1);
//   this.setSelection({ index: cursorPosition + 1, length: 0 });
// }

// const CustomToolbar = () => (
//   <div id="toolbar">
//     <select className="ql-header">
//       <option value="1"></option>
//       <option value="2"></option>
//       <option selected></option>
//     </select>
//     <button className="ql-bold"></button>
//     <button className="ql-italic"></button>
//     <button className="ql-underline"></button>
//     <select className="ql-color">
//       <option value="red"></option>
//       <option value="green"></option>
//       <option value="blue"></option>
//       <option value="orange"></option>
//       <option value="violet"></option>
//       <option value="#d0d1d2"></option>
//       <option selected></option>
//     </select>
//     <button className="ql-insertStar">
//       <CustomButton />
//     </button>
//   </div>
// );

// const modules = {
//   toolbar: {
//     container: "#toolbar", // 위에서 만든 커스텀 툴바 사용
//     handlers: {
//       insertStar: insertStar, // 별 삽입 기능 추가
//     },
//   },
// };

// const formats = [
//   "header",
//   "bold",
//   "italic",
//   "underline",
//   "color",
//   "list",
//   "bullet",
//   "indent",
//   "link",
//   "image",
// ];

const EditorPage = () => {
  //const [value, setValue] = useState("");
  const [editorContent, setEditorContent] = useState(""); // 에디터 입력 값 저장
  const [submittedContent, setSubmittedContent] = useState(""); // 작성 완료된 내용 저장

  const handleSubmit = () => {
    setSubmittedContent(editorContent); // 입력한 내용을 저장
  };

  return (
    <>
      {/* <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
      /> */}
      {/* Custom Toolbar */}
      {/* <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
        ormats={formats}
      /> */}
      {/* HTML Toolbar */}
      {/* <div className="text-editor">
        <CustomToolbar />
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          modules={modules}
          formats={formats}
        />
      </div> */}
      <div className="text-editor">
        <h2>에디터</h2>
        <ReactQuill
          theme="snow"
          value={editorContent}
          onChange={setEditorContent}
        />

        <button
          onClick={handleSubmit}
          style={{
            marginTop: "10px",
            padding: "8px 16px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          작성 완료
        </button>
        {submittedContent && (
          <div>
            <h3>적용된 내용</h3>
            <div
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                marginTop: "10px",
                background: "#f9f9f9",
              }}
              dangerouslySetInnerHTML={{ __html: submittedContent }} // HTML 적용
            />
          </div>
        )}
      </div>
    </>
  );
};

export default EditorPage;
