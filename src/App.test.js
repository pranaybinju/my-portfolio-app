import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders learn react link", () => {
  render(<App />)
  const element = screen.getAllByText(/Ash Ketchum/i)
  expect(element.length).not.toBe(0)
})
