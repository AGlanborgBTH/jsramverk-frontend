import "@testing-library/jest-dom"
import { render, fireEvent, screen } from "@testing-library/svelte"
import Test from "../download"

test("'Save-button' loads", () => {
    let mockDownload = jest.fn()
    render(Test, {handleDownload: mockDownload})

    let button = screen.getByRole('button', { name: 'Download' })

    expect(button).toBeInTheDocument()
})

test("'Save-button' action", async () => {
    let mockDownload = jest.fn()
    render(Test, {handleDownload: mockDownload})

    let button = screen.getByRole('button', { name: 'Download' })

    expect(button).toBeInTheDocument()

    await fireEvent.click(button)

    expect(mockDownload.mock.calls.length).toEqual(1)
})