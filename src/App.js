// import "./App.css";

// function App() {
//   return <div>111</div>;
// }

// export default App;

import { Form, Input } from "antd";
import "antd/dist/antd.less";
import "./demo.less";

const Demo = () => {
  return (
    <Form labelCol={{ span: 24 }} wrapperCol={{ span: 0 }}>
      <Form.Item>
        <Input />
      </Form.Item>
    </Form>
  );
};

export default Demo;
