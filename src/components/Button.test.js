import { act, fireEvent, render } from "@testing-library/react";
import Button from "./Button";

describe("Button Component (@testing-library/react)", () => {
  it("Component가 정상적으로 생성됨", () => {
    const button = render(<Button />);
    expect(button).not.toBeNull();
  });

  it("Button 이라고 쓰여있는 엘리먼트는 HTMLButtonElement이다.", () => {
    const { getByText } = render(<Button />);
    const buttonElement = getByText("button");
    expect(buttonElement).toBeInstanceOf(HTMLButtonElement);
  });

  it("Button을 클릭하면 p 태그안에 Button pressed! 라고 쓰여진다.", () => {
    const { getByText } = render(<Button />);
    const buttonElement = getByText("button");
    fireEvent.click(buttonElement);

    const p = getByText("Button pressed!");
    expect(p).not.toBeNull();
    expect(p).toBeInstanceOf(HTMLParagraphElement);
  });

  it("Button을 클릭하기 전에는 p태그 안에 Button not pressed! 라고 쓰여진다.", () => {
    const { getByText } = render(<Button />);

    const p = getByText("Button not pressed!");
    expect(p).not.toBeNull();
    expect(p).toBeInstanceOf(HTMLParagraphElement);
  });

  it("Button을 클릭하고 5초 뒤에는 p 태그 안에 Button not pressed! 라고 쓰여진다.", () => {
    jest.useFakeTimers();
    const { getByText } = render(<Button />);
    const buttonElement = getByText("button");
    fireEvent.click(buttonElement);

    // 5초가 지나야한다.
    act(() => {
      jest.advanceTimersByTime(5000);
    });

    const p = getByText("Button not pressed!");
    expect(p).not.toBeNull();
    expect(p).toBeInstanceOf(HTMLParagraphElement);
  });

  it("Button을 클릭하면 5초동안 비활성화 된다.", () => {
    jest.useFakeTimers();
    const { getByText } = render(<Button />);
    const buttonElement = getByText("button");
    fireEvent.click(buttonElement);

    // 비활성화
    expect(buttonElement).toBeDisabled();
    // 5초 흐르고
    act(() => {
      jest.advanceTimersByTime(5000);
    });
    // 활성화
    expect(buttonElement).not.toBeDisabled();
  });
});
