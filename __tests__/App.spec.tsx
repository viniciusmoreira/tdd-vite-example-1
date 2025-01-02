import { describe, expect, it } from "vitest";
import { render, screen } from '@testing-library/react'
import React from "react";
import App from '../src/App'

describe('App', () => {
    it('Should render App', () => {
        render(<App />)

        expect(screen.queryByTestId('sample')).toBeInTheDocument()
    })

    it('Should render not render', async () => {
        render(<App />)

        expect(screen.queryByTestId('not.found')).not.toBeInTheDocument()
    })
}) 