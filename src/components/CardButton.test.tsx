import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { CardButton } from './CardButton'

describe('CardButton', () => {
  it('renders the title and description', () => {
    render(<CardButton title="Hello" description="World" onClick={() => {}} />)
    expect(screen.getByText('Hello →')).toBeInTheDocument()
    expect(screen.getByText('World')).toBeInTheDocument()
  })

  it('fires onClick when activated', async () => {
    const handleClick = vi.fn()
    render(<CardButton title="Click" description="Me" onClick={handleClick} />)
    await userEvent.click(screen.getByRole('button', { name: /click/i }))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
