import { describe, expect, it } from "vitest";
import { render, screen } from '@testing-library/react'
import React from "react";
import App from '../src/App'

describe('App', () => {
    it('Should render App', () => {
        const { getByTestId } = render(<App />)

        expect(getByTestId('sample')).toBeInTheDocument()
    })
}) 