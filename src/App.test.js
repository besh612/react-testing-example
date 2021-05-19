import { render } from "@testing-library/react";
import App from "./App";

test("App Component 정상 랜더링 확인", () => {
  const app = render(<App />);
  expect(app).not.toBeNull();
});
