import "@testing-library/jest-dom"
import { render, fireEvent, screen } from "@testing-library/svelte"
import Test from "../save"

test("'Save-button' loads", () => {
    let mockSave = jest.fn()
    render(Test, {handleSave: mockSave})

    let button = screen.getByRole('button', { name: 'Save Project' })

    expect(button).toBeInTheDocument()
})

test("'Save-button' action", async () => {
    let mockSave = jest.fn()
    render(Test, {handleSave: mockSave})

    let button = screen.getByRole('button', { name: 'Save Project' })

    expect(button).toBeInTheDocument()

    await fireEvent.click(button)

    expect(mockSave.mock.calls.length).toEqual(1)
})