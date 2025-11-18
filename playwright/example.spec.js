// @ts-check
import { test, expect } from '@playwright/test'

test.describe('Home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test(
    'Should have correct metadata and components',
    {
      tag: '@homepage',
    },
    async ({ page }) => {
      await expect(page).toHaveTitle(/todo/i)
      await expect(
        page.getByRole('heading', { name: 'Home page' })
      ).toBeVisible()
      await expect(page.getByRole('link', { name: 'Todos' })).toBeVisible()
    }
  )

  test(
    'should redirect to todos page on click',
    {
      tag: '@homepage',
    },
    async ({ page }) => {
      await page.getByRole('link', { name: 'Todos' }).click()

      await expect(page).toHaveURL('/todos')
    }
  )
})

test.describe('Todos page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/todos')
  })

  test(
    'should have correct metadata and components',
    {
      tag: '@todospage',
    },
    async ({ page }) => {
      await expect(page).toHaveTitle('Todo demo')
      await expect(
        page.getByRole('heading', { name: 'Todos page' })
      ).toBeVisible()
      await expect(page.getByPlaceholder('title')).toBeVisible()
      await expect(page.getByRole('button', { name: 'add' })).toBeVisible()
    }
  )

  test(
    'should have empty items list on start',
    { tag: '@todospage' },
    async ({ page }) => {
      const itemsList = page.getByTestId('items-list')

      await expect(itemsList).toBeEmpty()
    }
  )

  test('should add item to list', { tag: '@todospage' }, async ({ page }) => {
    const input = page.getByPlaceholder('title')

    await input.fill('Item 1')

    await page.getByRole('button', { name: 'add' }).click()

    const item = page.getByTestId('todo').nth(0)

    await expect(item).toHaveText('Item 1')
    await expect(input).toBeEmpty()
  })

  test(
    'should complete todo on click',
    { tag: '@todospage' },
    async ({ page }) => {
      const itemsList = page.getByTestId('items-list')
      const input = page.getByPlaceholder('title')
      await input.fill('Item 1')
      await page.getByRole('button', { name: 'add' }).click()
      const item = page.getByTestId('todo').nth(0)
      await expect(itemsList).toHaveCount(1)
      await page.screenshot({ path: 'screenshot.png', fullPage: true })

      await item.click()

      await expect(itemsList).toBeEmpty()
    }
  )
})
