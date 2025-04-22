import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("Portfolio App", () => {
  test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    render(<App />);
    const topLevelHeading = screen.getByRole("heading", {
      name: /hi, i'm/i,
      exact: false,
      level: 1,
    });
    expect(topLevelHeading).toBeInTheDocument();
  });

  test("displays an image with descriptive alt text", () => {
    render(<App />);
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute(
      "alt",
      expect.stringMatching(/profile picture/i)
    );
  });

  test("displays a second-level heading with text 'About Me'", () => {
    render(<App />);
    const aboutHeading = screen.getByRole("heading", {
      name: /about me/i,
      level: 2,
    });
    expect(aboutHeading).toBeInTheDocument();
  });

  test("displays a paragraph for biography", () => {
    render(<App />);
    const bio = screen.getByText(/biography/i);
    expect(bio).toBeInTheDocument();
    expect(bio.tagName).toBe("P");
  });

  test("displays GitHub link", () => {
    render(<App />);
    const githubLink = screen.getByRole("link", { name: /github/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      "href",
      expect.stringContaining("github.com")
    );
  });

  test("displays LinkedIn link", () => {
    render(<App />);
    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute(
      "href",
      expect.stringContaining("linkedin.com")
    );
  });
});
