import "@testing-library/jest-dom"
import { render, screen  } from "@testing-library/svelte"
import Test from "../dropdown"

test("Title-textbox loads", () => {
    let mockNewDoc = jest.fn()

    render(Test, {
        all: [],
        id: "",
        title: "",
        handleNewDoc: mockNewDoc
    })

    let text = screen.getByRole('textbox', { name: "" })

    expect(text).toBeInTheDocument()
})

test("Title-textbox loads w/ id", () => {
    let mockNewDoc = jest.fn()

    render(Test, {
        all: [],
        id: "test",
        title: "",
        handleNewDoc: mockNewDoc
    })

    let text = screen.getByRole('textbox', { name: "" })
    let txt = document.getElementById("test")

    expect(text).toBeInTheDocument()
    expect(text).toBeInTheDocument()

    expect(text).toEqual(txt)
})

test("'New Document'-button loads", () => {
    let mockNewDoc = jest.fn()

    render(Test, {
        all: [],
        id: "test",
        title: "",
        handleNewDoc: mockNewDoc
    })

    let newDoc = document.getElementById("New Document")

    expect(newDoc).toBeDefined();
})

test("Doc-button loads", () => {
    let mockNewDoc = jest.fn()

    render(Test, {
        all: [{
            _id: "123",
            title: "Test"
        }],
        id: "test",
        title: "",
        handleNewDoc: mockNewDoc
    })

    let doc = document.getElementById("123")

    expect(doc).toBeDefined();
    expect(doc).toHaveValue("Test")
})
